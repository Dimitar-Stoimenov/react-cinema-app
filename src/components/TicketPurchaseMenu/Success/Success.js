import "./Success.css";
import { FaCheckCircle } from "react-icons/fa";

const Success = () => {

    return (
        <div className="purchase-container">
            <div className="show-loader"></div>
            <div className="finish-wrapper">
                <div className="spanner-loader show-loader">
                    <div className="success-icon"><FaCheckCircle /></div>
                    <p className="success-p">Payment was successful.</p>
                </div>
            </div>
            <div className="success-text">
                <p >We have sent you an email with your tickets.</p>
                <p >You can also find them in your profile.</p>
            </div>
        </div>
    );
}

export default Success;