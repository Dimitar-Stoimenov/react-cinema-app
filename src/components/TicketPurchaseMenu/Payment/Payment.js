import { useLocation, useNavigate, useParams } from "react-router-dom";

import TicketPurchaseStage from "../TicketPurchaseStage/TicketPurchaseStage";
import { parseDate, parseHour } from "../../../utils/utils";
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';

import "./Payment.css";
import "./Payment-grid.css";

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { projectionId } = useParams();

    const stage = 3;
    const { projection, totalTickets, activeTicketState, totalPrice, regularTickets, studentTickets, selectedSeatsObj } = location.state;
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let seatsInfo = [];

    Object.values(selectedSeatsObj).forEach((seatsArr, i) => {
        if (seatsArr.length > 0) {
            seatsArr = seatsArr.sort((a, b) => a - b);
            seatsInfo.push(`Row ${i + 1} - Seat ${seatsArr.join(', ')}`);
        }
    });

    function onClickSubmitButton(e, type) {
        e.preventDefault();

        if (type === 'buy') {
            const { name, ccn, "exp-date": expDate, cvc } = e.target.elements;

            if (ccn.value.length < 16) {
                return alert('Please enter a valid Credit card number.');
            } else if (Number(cvc.value) < 0 || Number(cvc.value > 999) || isNaN(Number(cvc.value)) || !Number.isInteger(Number(cvc.value)) || cvc.value.length !== 3) {
                return alert('Please enter a valid CVC.');
            } else if (name.value.length < 3) {
                return alert('Name cannot be shorter than 3 characters.');
            } else if (expDate.value[2] !== "/" || Number(expDate.value[0].concat(expDate.value[1])) > 12 || Number(expDate.value[0].concat(expDate.value[1])) === 0 || Number(expDate.value[3].concat(expDate.value[4])) < 22) {
                return alert('Please enter a valid expiration date in the format "month/year".');
            }

            let last4digits = ccn.value.slice(12);
            let newCreditCardNum = '*'.repeat(8) + last4digits;
            let nameString = name.value;
            let expDateString = expDate.value;
            let emailString = 'n/a';
            let phoneString = 'n/a';

            navigate(`/projections/id/${projectionId}/finish`, { state: { projection, totalTickets, activeTicketState, totalPrice, regularTickets, studentTickets, selectedSeatsObj, ccn: newCreditCardNum, name: nameString, expDate: expDateString, email: emailString, phone: phoneString } });
        } else if (type === "reserve") {
            const { name, phone, "email-address": email, "confirm-email": confirm } = e.target.elements;

            if (email.value !== confirm.value) {
                return alert('Emails don\'t match!');
            } else if (phone.value.length < 7) {
                return alert('Phone number must have atleast 7 digits.');
            } else if (name.value.length < 3) {
                return alert('Name cannot be shorter than 3 characters.');
            }

            let newCreditCardNum = 'n/a';
            let nameString = name.value;
            let expDateString = 'n/a';
            let emailString = email.value;
            let phoneString = phone.value;

            navigate(`/projections/id/${projectionId}/finish`, { state: { projection, totalTickets, activeTicketState, totalPrice, regularTickets, studentTickets, selectedSeatsObj, ccn: newCreditCardNum, name: nameString, expDate: expDateString, email: emailString, phone: phoneString } });
        }
    }

    return (
        <div className="purchase-container">
            <TicketPurchaseStage stage={stage} />
            <div className="payment-container">
                <div className="payment-info-container">
                    <ul className="projection-info-container">
                        <li>{projection.movieId.movieName}</li>
                        <li>{weekday[new Date(projection.date).getDay()]} {parseHour(projection.hour)}</li>
                        <li>{parseDate(new Date(projection.date))}</li>
                        <li>{projection.hallId.hallName}</li>
                    </ul>
                    <ul className="ticket-info-container">
                        {regularTickets > 0 ? <li>Regular Tickets: {regularTickets}</li> : ""}
                        {studentTickets > 0 ? <li>Student Tickets: {studentTickets}</li> : ""}
                        <li>Seat information:</li>
                        {seatsInfo.map((rowInfo, i) => <li key={i}>{rowInfo}</li>)}
                    </ul>
                </div>
                <div className="total-price">Total Price: {"$" + totalPrice.toFixed(2)}</div>
                {activeTicketState === "buy"
                    ? <form method="POST" className="credit-card-payment-container" onSubmit={(e) => onClickSubmitButton(e, 'buy')}>
                        <div className="pay1">Enter your card details</div>
                        <div className="credit-card-icons"><FaCcVisa /> <FaCcMastercard /></div>
                        <label forhtml="name" className="pay2">Name</label>
                        <input id="name" className="pay3" type="text" placeholder="Enter your name" />
                        <label forhtml="ccn" className="pay4">Credit Card Number</label>
                        <input id="ccn" className="pay5" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="16" placeholder="0000 0000 0000 0000" />
                        <label forhtml="exp-date" className="pay6">Exp. date</label>
                        <input id="exp-date" className="pay7" type="tel" inputMode="numeric" maxLength="5" placeholder="05/24" />
                        <label forhtml="cvc" className="pay8">CVC</label>
                        <input id="cvc" className="pay9" type="tel" placeholder="123" maxLength="3" />
                        <button className="pay10" type="submit">Continue</button>
                    </form>
                    : activeTicketState === "reserve"
                        ? <form method="POST" className="credit-card-payment-container" onSubmit={(e) => onClickSubmitButton(e, 'reserve')}>
                            <div className="pay1">Enter your personal details</div>
                            <label forhtml="name" className="pay2">Name</label>
                            <input id="name" className="pay3" type="text" placeholder="Enter your name" />
                            <label forhtml="phone" className="pay4">Phone Number</label>
                            <input id="phone" className="pay5" type="tel" maxLength="13" placeholder="0888123456" />
                            <label forhtml="email-address" className="pay6">Email address</label>
                            <input id="email-address" className="pay7" inputMode="text" maxLength="25" placeholder="Enter your email address" />
                            <label forhtml="confirm-email" className="pay8">Confirm your email</label>
                            <input id="confirm-email" className="pay9" placeholder="Confirm your email address" maxLength="25" />
                            <button className="pay10" type="submit">Continue</button>
                        </form>
                        : null}
            </div>
        </div>
    );
}

export default Payment;