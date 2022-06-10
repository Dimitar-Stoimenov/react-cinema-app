import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as projectionService from "../../services/projectionService";
import TicketPurchaseStage from "./TicketPurchaseStage/TicketPurchaseStage";
import { parseHour, parseDate } from "../../utils/utils";

import "./TicketPurchaseMenu.css";

const TicketPurchaseMenu = () => {
    const [projection, setProjection] = useState();
    const [activeTicketState, setActiveTicketState] = useState(null);
    const { projectionId } = useParams();
    const stage = 1;

    useEffect(() => {
        projectionService.getProjectionById(projectionId)
            .then(result => {
                setProjection(result);
            })
    }, [projectionId, activeTicketState]);

    return (
        <div className="purchase-container">
            <TicketPurchaseStage stage={stage} />
            <div className="buy-or-reserve-container">
                <div className={activeTicketState === "buy" ? "ticket-btn activated-ticket" : "ticket-btn"} onClick={() => setActiveTicketState('buy')}>
                    BUY TICKETS
                    <div className={activeTicketState === "buy" ? "ticket-checkbox activated-tick" : "ticket-checkbox"}>✓</div>
                </div>
                <div className="ticket-or">or</div>
                <div className={activeTicketState === "reserve" ? "ticket-btn activated-ticket" : "ticket-btn"} onClick={() => setActiveTicketState('reserve')}>
                    RESERVE TICKETS
                    <div className={activeTicketState === "reserve" ? "ticket-checkbox activated-tick" : "ticket-checkbox"}>✓</div>
                </div>
            </div>
            <div className="purchase-info-container">
                <div className="purchase-projection-info">
                    <div className="purchase-projection-info-headers">
                        <div className="header-movie-title">Movie: </div>
                        <div className="header-date">Date: </div>
                        <div className="header-hour">Hour: </div>
                        <div className="header-hall">Hall: </div>
                        <div className="header-category">Category: </div>
                    </div>
                    <div className="purchase-projection-info-contents">
                        <div className="info-movie-title">{projection?.movieId.movieName}</div>
                        <div className="info-date">{projection ? parseDate(new Date(projection?.date)) : ""}</div>
                        <div className="info-hour">{projection ? parseHour(projection?.hour) : ""}</div>
                        <div className="info-hall">{projection?.hallId.hallName}</div>
                        <div className="info-category">{projection?.movieId.movieCategory}</div>
                    </div>
                </div>
                <div className="purchase-ticket-type-menu">asdfas</div>
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