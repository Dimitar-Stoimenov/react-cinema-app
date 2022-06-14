import { useLocation } from "react-router-dom";

import TicketPurchaseStage from "../TicketPurchaseStage/TicketPurchaseStage";
import { parseDate, parseHour } from "../../../utils/utils";

import "./Payment.css";
import "./Payment-grid.css";

const Payment = () => {
    const location = useLocation();
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
                <div className="credit-card-payment-container">
                    <div className="pay1">Enter your card details:</div>
                    <label forhtml="name" className="pay2">Name</label>
                    <input id="name" className="pay3" type="text" placeholder="Enter your name" />
                    <label forhtml="ccn" className="pay4">Credit Card Number</label>
                    <input id="ccn" className="pay5" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19" placeholder="0000 0000 0000 0000" />
                    <label forhtml="exp-date" className="pay6">Exp. date</label>
                    <input id="exp-date" className="pay7" type="tel" inputMode="numeric" maxLength="5" placeholder="00/00"/>
                    <label forhtml="cvc" className="pay8">CVC</label>
                    <input id="cvc" className="pay9" type="tel" placeholder="123" maxLength="3"/>
                    <div className="pay10">Continue</div>
                </div>
            </div>
        </div>
    );
}

export default Payment;