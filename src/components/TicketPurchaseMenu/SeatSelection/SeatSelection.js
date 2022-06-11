import { useLocation, useNavigate } from "react-router-dom";

import TicketPurchaseStage from "../TicketPurchaseStage/TicketPurchaseStage";
import HallVisualization from "../HallVisualization/HallVisualization";

import "./SeatSelection.css";

const SeatSelection = () => {
    const stage = 2;
    const location = useLocation();
    const navigate = useNavigate();
    const projection = location.state.projection;

    if ((location.state.regularTickets + location.state.studentTickets <= 0) || (location.state.regularTickets + location.state.studentTickets > location.state.maxTicketCount) || !projection || !location.state.activeTicketState) {
        navigate('/');
    }

    return (
        <div className="seat-selection-container">
            <TicketPurchaseStage stage={stage} />
            <HallVisualization projection={projection} totalTickets={location.state.regularTickets + location.state.studentTickets} activeTicketState={location.state.activeTicketState}/>
        </div>
    )
}

export default SeatSelection;