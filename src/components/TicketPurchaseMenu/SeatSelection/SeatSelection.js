import { useLocation, useNavigate } from "react-router-dom";
import "./SeatSelection.css";

const SeatSelection = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const projection = location.state.projection;

    if ((location.state.regularTickets + location.state.studentTickets <= 0) || (location.state.regularTickets + location.state.studentTickets > location.state.maxTicketCount) || !projection || !location.state.activeTicketState) {
        navigate('/');
    }

    return (
        <div>
           hello moto
        </div>
    )
}

export default SeatSelection;