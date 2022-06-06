import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as projectionService from "../../services/projectionService";
import TicketPurchaseStage from "./TicketPurchaseStage/TicketPurchaseStage";

import "./TicketPurchaseMenu.css";

const TicketPurchaseMenu = () => {
    const stage = 1;
    const { projectionId } = useParams();
    const [projection, setProjection] = useState({});

    useEffect(() => {
        projectionService.getProjectionById(projectionId)
            .then(result => {
                setProjection(result);
            })
    }, [projectionId])

    return (
        <div className="purchase-container">
            <TicketPurchaseStage stage={1} />
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