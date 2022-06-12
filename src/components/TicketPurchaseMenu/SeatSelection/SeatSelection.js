import { useLocation } from "react-router-dom";

import TicketPurchaseStage from "../TicketPurchaseStage/TicketPurchaseStage";
import HallVisualization from "../HallVisualization/HallVisualization";

import "./SeatSelection.css";

const SeatSelection = () => {
    const stage = 2;
    const location = useLocation();
    const projection = location.state.projection;

    return (
        <div className="seat-selection-container">
            <TicketPurchaseStage stage={stage} />
            <HallVisualization projection={projection} totalTickets={location.state.totalTickets} activeTicketState={location.state.activeTicketState} totalPrice={location.state.totalPrice}/>
        </div>
    )
}

export default SeatSelection;