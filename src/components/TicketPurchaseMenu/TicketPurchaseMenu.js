import "./TicketPurchaseMenu.css";

const TicketPurchaseMenu = () => {

    return (
        <div className="purchase-container">
            <div className="buy-or-reserve-container">
                <botton className="ticket-btn">BUY TICKETS</botton>
                <botton className="ticket-btn">RESERVE TICKETS</botton>
            </div>
            <div className="purchase-info-container">
                <div className="purchase-projection-info"></div>
                <div className="purchase-ticket-type-menu"></div>
            </div>
            <div className="purchase-disclaimer-and-total-sum-container">
                <div className="purchase-disclaimer"></div>
                <div className="purchase-total-sum"></div>
                <button className="purchase-continue-btn"></button>
            </div>
        </div>
    );
}

export default TicketPurchaseMenu;