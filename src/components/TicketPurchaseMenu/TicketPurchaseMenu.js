import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillDashSquareFill, BsFillPlusSquareFill } from "react-icons/bs";

import * as projectionService from "../../services/projectionService";
import TicketPurchaseStage from "./TicketPurchaseStage/TicketPurchaseStage";
import { parseHour, parseDate } from "../../utils/utils";

import "./TicketPurchaseMenu.css";

const TicketPurchaseMenu = () => {
    const stage = 1;
    const navigate = useNavigate();
    const { projectionId } = useParams();
    
    const [projection, setProjection] = useState();
    const [activeTicketState, setActiveTicketState] = useState(null);

    const [regularTickets, setRegularTickets] = useState(0);
    const [studentTickets, setStudentTickets] = useState(0);
    const maxTicketCount = 6;

    useEffect(() => {
        projectionService.getProjectionById(projectionId)
            .then(result => {
                setProjection(result);
            })
    }, [projectionId]);

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

    function continueToSeatSelection() {
        if (activeTicketState === null) {
            return alert('Please select the type of tickets you wish to buy.')
        }

        if ((regularTickets + studentTickets) === 0) {
            return alert('You have not selected any tickets.');
        }

        if ((regularTickets + studentTickets) > maxTicketCount) {
            return alert('You have selected more tickets than the maximum amount!');
        }

        navigate(`/projections/id/${projectionId}/seat-selection`, {state: {projection, regularTickets, studentTickets, activeTicketState, maxTicketCount}});
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
                    <div className="sel1">Type of ticket</div>
                    <div className="sel2">Regular</div>
                    <div className="sel3">Student</div>
                    <div className="sel4">Quantity</div>
                    <div className="sel5">
                        <BsFillDashSquareFill onClick={() => setRegularTickets(x => decreaseTicketCount(x))} />
                    </div>
                    <div className="sel6">{regularTickets}</div>
                    <div className="sel7">
                        <BsFillPlusSquareFill onClick={() => setRegularTickets(x => increaseTicketCount(x))} />
                    </div>
                    <div className="sel8">
                        <BsFillDashSquareFill onClick={() => setStudentTickets(x => decreaseTicketCount(x))} />
                    </div>
                    <div className="sel9">{studentTickets}</div>
                    <div className="sel10">
                        <BsFillPlusSquareFill onClick={() => setStudentTickets(x => increaseTicketCount(x))} />
                    </div>
                    <div className="sel11">Price</div>
                    <div className="sel12">${projection?.price.regular.toFixed(2)}</div>
                    <div className="sel13">${projection?.price.students.toFixed(2)} </div>
                    <div className="sel14">Total</div>
                    <div className="sel15">${(projection?.price.regular * regularTickets).toFixed(2)}</div>
                    <div className="sel16">${(projection?.price.students * studentTickets).toFixed(2)}</div>
                </div>
            </div>
            <div className="purchase-disclaimer-and-total-sum-container">
                <div className="purchase-total-sum">Total Sum: ${(projection?.price.regular * regularTickets + projection?.price.students * studentTickets).toFixed(2)}</div>
                <div className="purchase-continue-btn" onClick={continueToSeatSelection}>Continue</div>
            </div>
        </div>
    );
}

export default TicketPurchaseMenu;