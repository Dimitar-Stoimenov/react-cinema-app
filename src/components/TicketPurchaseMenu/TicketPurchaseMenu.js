import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillDashSquareFill, BsFillPlusSquareFill } from "react-icons/bs";

import * as projectionService from "../../services/projectionService";
import TicketPurchaseStage from "./TicketPurchaseStage/TicketPurchaseStage";
import { parseHour, parseDate } from "../../utils/utils";

import "./TicketPurchaseMenu.css";

const TicketPurchaseMenu = () => {
    const [projection, setProjection] = useState();
    const [activeTicketState, setActiveTicketState] = useState(null);
    const { projectionId } = useParams();
    const stage = 1;

    const [regularTickets, setRegularTickets] = useState(0);
    const [studentTickets, setStudentTickets] = useState(0);
    const maxTicketCount = 6;

    useEffect(() => {
        projectionService.getProjectionById(projectionId)
            .then(result => {
                setProjection(result);
            })
    }, []);

    function decreaseTicketCount(x) {
        if (x === 0) {
            return 0;
        }

        return x - 1;
    }

    function increaseTicketCount(x) {
        if (regularTickets + studentTickets === maxTicketCount) {
            alert(`You cannot buy more than ${maxTicketCount} tickets.`);
            return x;
        }

        return x + 1;
    }

    return (
        <div className="purchase-container">
            <TicketPurchaseStage stage={stage} />
            <div className="choose-disclaimer">
                <div>Choose number and type of tickets you would like to buy/reserve.</div>
                <div>Maximum number of tickets - 6 tickets.</div>
            </div>

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
                <div className="purchase-ticket-grid">
                    <div className="div1">Type of ticket</div>
                    <div className="div2">Regular</div>
                    <div className="div3">Student</div>
                    <div className="div4">Quantity</div>
                    <div className="div5">
                        <BsFillDashSquareFill onClick={() => setRegularTickets(x => decreaseTicketCount(x))} />
                    </div>
                    <div className="div6">{regularTickets}</div>
                    <div className="div7">
                        <BsFillPlusSquareFill onClick={() => setRegularTickets(x => increaseTicketCount(x))} />
                    </div>
                    <div className="div8">
                        <BsFillDashSquareFill onClick={() => setStudentTickets(x => decreaseTicketCount(x))} />
                    </div>
                    <div className="div9">{studentTickets}</div>
                    <div className="div10">
                        <BsFillPlusSquareFill onClick={() => setStudentTickets(x => increaseTicketCount(x))} />
                    </div>
                    <div className="div11">Price</div>
                    <div className="div12">${projection?.price.regular.toFixed(2)}</div>
                    <div className="div13">${projection?.price.students.toFixed(2)} </div>
                    <div className="div14">Total</div>
                    <div className="div15">${(projection?.price.regular * regularTickets).toFixed(2)}</div>
                    <div className="div16">${(projection?.price.students * studentTickets).toFixed(2)}</div>
                </div>
            </div>
            <div className="purchase-disclaimer-and-total-sum-container">
                <div className="purchase-disclaimer"></div>
                <div className="purchase-total-sum"></div>
                {/* <button className="purchase-continue-btn">Continue</button> */}
            </div>
        </div>
    );
}

export default TicketPurchaseMenu;