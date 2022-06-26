import "./Declined.css";
import { RiCloseCircleFill } from "react-icons/ri";

const Declined = () => {

    return (
        <div className="purchase-container">
            <div className="overlay-loader show-loader"></div>
            <div className="finish-wrapper">
                <div className="spanner-loader show-loader">
                    <div className="declined-icon"><RiCloseCircleFill /></div>
                    <p className="declined-p">Payment has been declined.</p>
                    <p className="declined-p">Try another credit card or call your bank.</p>
                </div>
            </div>
        </div>
    );
}

export default Declined;