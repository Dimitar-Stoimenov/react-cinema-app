import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as projectionService from "../../services/projectionService";
import TicketPurchaseStage from "./TicketPurchaseStage/TicketPurchaseStage";

import "./TicketPurchaseMenu.css";

const TicketPurchaseMenu = () => {
    const [projection, setProjection] = useState({});
    const [activeTicketState, setActiveTicketState] = useState();
    const { projectionId } = useParams();
    const stage = 1;

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
                <div className="ticket-btn ticket-buy">
                    BUY TICKETS
                    <div className="ticket-checkbox checkbox-buy">✓</div>
                </div>
                <div className="ticket-or">or</div>
                <div className="ticket-btn ticket-reserve">
                    RESERVE TICKETS
                    <div className="ticket-checkbox checkbox-reserve">✓</div>
                </div>
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