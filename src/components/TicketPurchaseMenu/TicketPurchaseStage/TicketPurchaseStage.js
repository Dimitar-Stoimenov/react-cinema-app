const TicketPurchaseStage = ({ stage }) => {

    return (
        <div className="purchase-stage">
            <div className={stage === 1 ? "active-stage" : "stage"}>1. Ticket selection</div>
            <div className={stage === 2 ? "active-stage" : "stage"}>2. Seat selection</div>
            <div className={stage === 3 ? "active-stage" : "stage"}>3. Buy/Reserve</div>
            <div className={stage === 4 ? "active-stage" : "stage"}>4. Finish</div>
        </div>
    );
}

export default TicketPurchaseStage;