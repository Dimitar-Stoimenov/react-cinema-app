import { useLocation } from "react-router-dom";

import TicketPurchaseStage from "../TicketPurchaseStage/TicketPurchaseStage";
import HallVisualization from "../HallVisualization/HallVisualization";

import "./SeatSelection.css";

const SeatSelection = () => {
    const stage = 2;
    const location = useLocation();

    return (
        <div className="purchase-container">
            <TicketPurchaseStage stage={stage} />
            <HallVisualization projection={location.state.projection} totalTickets={location.state.totalTickets} regularTickets={location.state.regularTickets} studentTickets={location.state.studentTickets} activeTicketState={location.state.activeTicketState} totalPrice={location.state.totalPrice}/>
        </div>
    )
}

export default SeatSelection;