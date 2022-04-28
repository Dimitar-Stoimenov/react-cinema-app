import './Slider.css';
import { SliderData } from './SliderData';

function Slider() {

    return (
        <div id="main-page-banner-wrapper">
            <img className="main-page-banner-image" src={SliderData[0].image}></img>
        </div>
    );
}

export default Slider;