import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import TicketPurchaseStage from "../TicketPurchaseStage/TicketPurchaseStage";
import { create } from '../../../services/ticketService';
import * as projectionService from '../../../services/projectionService';
import { parseDate, parseHour } from '../../../utils/utils';

import "./Finish.css";
import "./Loading.css";

const Finish = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { projectionId } = useParams();

    const [confirmBoxIsChecked, setConfirmBoxIsChecked] = useState(false);
    const [termsBoxIsChecked, setTermsBoxIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleConfirmBox = () => {
        setConfirmBoxIsChecked(!confirmBoxIsChecked);
    };

    const handletermsBox = () => {
        setTermsBoxIsChecked(!termsBoxIsChecked);
    };

    const stage = 4;
    const { projection, activeTicketState, totalPrice, regularTickets, studentTickets, selectedSeatsObj, ccn, name, email, phone } = location.state;
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let seatsInfo = [];

    Object.values(selectedSeatsObj).forEach((seatsArr, i) => {
        if (seatsArr.length > 0) {
            seatsArr = seatsArr.sort((a, b) => a - b);
            seatsInfo.push(`Row ${i + 1} - Seat ${seatsArr.join(', ')}`);
        }
    });

    function clickBackButton() {
        navigate(-1);
    }

    async function checkIfSeatsAreAvailable() {
        let check = true;

        await projectionService.getProjectionById(projectionId)
            .then(result => {
                let selectedRowsArray = Object.entries(selectedSeatsObj).filter(x => x[1].length !== 0);
                selectedRowsArray.forEach(([row, seatsArr]) => {
                    seatsArr.forEach(seat => {
                        if (result.occupiedSeats[row].includes(seat)) {
                            check = false;
                        }
                    })
                })
                return result;
            })
            .catch(error => {
                alert(error.message);
                check = false;
                return error;
            });

        return check;
    }

    async function addTicketAndSeatsToProjection({ _id, occupiedSeats }) {
        let result = await projectionService.addTicketsAndSeats(_id, occupiedSeats, projectionId);

        if (result.message === "Some seat is already taken!") {
            navigate(`/projections/id/${projectionId}/declined`);
        } else {
            navigate(`/projections/id/${projectionId}/success`);
        }
    }

    async function clickContinueButton() {
        if (termsBoxIsChecked && confirmBoxIsChecked) {
            setIsLoading(true);
            const seatCheck = await checkIfSeatsAreAvailable();
            setTimeout(() => {
                if (seatCheck) {
                    create(selectedSeatsObj, projectionId)
                        .then(ticketData => addTicketAndSeatsToProjection(ticketData))
                        .catch(error => alert(error.message));
                } else {
                    navigate(`/projections/id/${projectionId}/declined`);
                }
            }, 4000);
        } else if (!termsBoxIsChecked && confirmBoxIsChecked) {
            return alert('Please agree to the terms of service in order to continue.');
        } else if (termsBoxIsChecked && !confirmBoxIsChecked) {
            return alert('Please confirm the order details to continue.');
        } else {
            return alert('Please confirm the details and agree to the general terms and conditions in order to continue.')
        }
    }

    return (
        <div className="purchase-container">
            <TicketPurchaseStage stage={stage} />
            <div className="finish-container">
                <div className="review-order-title">Review your order</div>
                <div className="review-order">
                    <div className="review-order-sub">Check your order details and confirm</div>
                </div>
                <div className="personal-information-title">Personal information</div>
                <div className="personal-information">
                    <div className="personal-information-name-container">
                        <div className="person-information-name-header">Name</div>
                        <div className="person-information-name-content">{name}</div>
                    </div>

                    {activeTicketState === 'buy'
                        ?
                        <div className="personal-information-credit-card-container">
                            <div className="personal-information-credit-card-header">Credit card Number</div>
                            <div className="personal-information-credit-card-content">{ccn}</div>
                        </div>
                        :
                        <div className="personal-information-phone-container">
                            <div className="personal-information-phone-header">Phone Number</div>
                            <div className="personal-information-phone-content">{phone}</div>
                        </div>
                    }

                    <div className="personal-information-email-container">
                        <div className="personal-information-email-header">E-mail</div>
                        <div className="personal-information-email-content">{email}</div>
                    </div>
                </div>
                <div className="ticket-information-title">Ticket information</div>
                <div className="ticket-information">
                    <div className="ticket-info-event-container">
                        <div className="ticket-info-event-header">Event</div>
                        <div className="ticket-info-event-content">
                            {projection.movieId.movieName}, {weekday[new Date(projection.date).getDay()]} {parseDate(new Date(projection.date))} {parseHour(projection.hour)}
                        </div>
                    </div>
                    <div className="ticket-info-hall-container">
                        <div className="ticket-info-hall-header">Hall</div>
                        <div className="ticket-info-hall-content">{projection.hallId.hallName}</div>
                    </div>
                    <div className="ticket-info-ticket-type-container">
                        <div className="ticket-info-ticket-type-header">Ticket Type</div>
                        {regularTickets > 0
                            ? <div className="ticket-info-ticket-type-regular">Regular x {regularTickets}</div>
                            : null}
                        {regularTickets > 0 && studentTickets > 0 ? <div className="mandatory-padding-for-whitespace">,</div> : null}
                        {studentTickets > 0
                            ? <div className="ticket-info-ticket-type-student">Student x {studentTickets}</div>
                            : null}
                    </div>
                    {seatsInfo.map((rowInfo, i) =>
                        <div key={i} className="ticket-info-seat-container">
                            <div className="ticket-info-seat-header">Seat Info</div>
                            <div className="ticket-info-seat-content">{rowInfo}</div>
                        </div>
                    )}
                </div>
                <div className="delivery-information-title">Delivery information</div>
                <div className="delivery-information-container">
                    <div className="delivery-information-header">Method</div>
                    {activeTicketState === 'buy'
                        ? <div className="delivery-information-content">E-ticket</div>
                        : <div className="delivery-information-content">Collect in cinema</div>}
                </div>
                <div className="grand-total-sum">{"Grand Total $" + totalPrice.toFixed(2)}</div>
                <div className="terms-and-conditions">
                    <div>
                        <input
                            type="checkbox"
                            id="confirm"
                            checked={confirmBoxIsChecked}
                            onChange={handleConfirmBox}
                        />
                        <label htmlFor="confirm">I confirm the order details.</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="terms"
                            checked={termsBoxIsChecked}
                            onChange={handletermsBox}
                        />
                        <label htmlFor="terms">I have read and agree to the General Terms and Conditions.</label>
                    </div>
                </div>
                <div className="finish-buttons">
                    <button className="finish-back" onClick={clickBackButton}>Back</button>
                    <button className="finish-continue" onClick={clickContinueButton}>Continue</button>
                </div>
            </div>
            <div className={isLoading ? "overlay-loader show-loader" : "overlay-loader"}></div>
            <div className="finish-wrapper">
                <div className={isLoading ? "spanner-loader show-loader" : "spanner-loader"}>
                    <div className="finish-loader"></div>
                    <p>Processing payment, please be patient.</p>
                </div>
            </div>
        </div>
    )
}

export default Finish;