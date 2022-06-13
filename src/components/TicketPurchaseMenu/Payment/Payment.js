import { useLocation } from "react-router-dom";

import TicketPurchaseStage from "../TicketPurchaseStage/TicketPurchaseStage";

import "./Payment.css";

const Payment = () => {
    const location = useLocation();
    const stage = 3;
    const { projection, totalTickets, activeTicketState, totalPrice, regularTickets, studentTickets } = location.state;

    return (
        <div className="purchase-container">
            <TicketPurchaseStage stage={stage} />
        </div>
    );
}

export default Payment;