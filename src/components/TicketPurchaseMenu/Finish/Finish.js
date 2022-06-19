import { useLocation, useNavigate, useParams } from "react-router-dom";

import TicketPurchaseStage from "../TicketPurchaseStage/TicketPurchaseStage";

import "./Finish.css";

const Finish = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { projectionId } = useParams();

    const stage = 4;
    const { projection, totalTickets, activeTicketState, totalPrice, regularTickets, studentTickets, selectedSeatsObj, newCreditCardNum, name, expDate, email, phone } = location.state;
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <div className="purchase-container">
            <TicketPurchaseStage stage={stage} />
        </div>
    )
}

export default Finish;