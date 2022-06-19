import { useLocation, useNavigate, useParams } from "react-router-dom";

import TicketPurchaseStage from "../TicketPurchaseStage/TicketPurchaseStage";
import { parseDate, parseHour } from '../../../utils/utils';

import "./Finish.css";

const Finish = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { projectionId } = useParams();

    const stage = 4;
    const { projection, totalTickets, activeTicketState, totalPrice, regularTickets, studentTickets, selectedSeatsObj, ccn, name, expDate, email, phone } = location.state;
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let seatsInfo = [];

    Object.values(selectedSeatsObj).forEach((seatsArr, i) => {
        if (seatsArr.length > 0) {
            seatsArr = seatsArr.sort((a, b) => a - b);
            seatsInfo.push(`Row ${i + 1} - Seat ${seatsArr.join(', ')}`);
        }
    });

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
                        {studentTickets > 0
                            ? <div className="ticket-info-ticket-type-student">Student x {studentTickets}</div>
                            : null}
                    </div>
                    <div className="ticket-info-seat-container">
                        <div className="ticket-info-seat-header">Seat</div>
                        {seatsInfo.map((rowInfo, i) => <div className="ticket-info-seat-content" key={i}>{rowInfo}</div>)}
                    </div>
                </div>
                <div className="delivery-information-title">Delivery information</div>
                <div className="delivery-information-container">
                    <div className="delivery-information-header">Method</div>
                    {activeTicketState === 'buy'
                        ? <div className="delivery-information-content">E-ticket</div>
                        : <div className="delivery-information-content">Collect in cinema</div>}
                </div>
                <div className="grand-total-sum">Grand Total ${totalPrice.toFixed(2)}</div>
                <div className="terms-and-conditions">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">I have read and agree to CineBear's General Terms and Conditions</label>
                </div>
                <div className="finish-buttons">
                    <button className="finish-back">Back</button>
                    <button className="finish-continue">Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Finish;