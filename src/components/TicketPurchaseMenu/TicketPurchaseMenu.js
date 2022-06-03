import { useParams } from "react-router-dom";
import "./TicketPurchaseMenu.css";

const TicketPurchaseMenu = () => {

    const { projectionId } = useParams();

    return (
        <div className="purchase-container">
            <div className="purchase-state">
                <div className="purchase-ticket-selection">Ticket selection...</div>
                <div className="purchase-seat-selection">Seat selection...</div>
                <div className="purchase-buy-or-reserve">Buy/Reserve...</div>
                <div className="purchase-finish">Finish</div>
            </div>
            <div className="buy-or-reserve-container">
                <button className="ticket-btn">BUY TICKETS</button>
                <button className="ticket-btn">RESERVE TICKETS</button>
            </div>
            <div className="purchase-info-container">
                <div className="purchase-projection-info"></div>
                <div className="purchase-ticket-type-menu"></div>
            </div>
            <div className="purchase-disclaimer-and-total-sum-container">
                <div className="purchase-disclaimer"></div>
                <div className="purchase-total-sum"></div>
                <button className="purchase-continue-btn">Continue</button>
            </div>
        </div>
    );
}

export default TicketPurchaseMenu;