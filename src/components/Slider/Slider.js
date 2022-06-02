import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import { SliderData } from './SliderData';

import './Slider.css';

function Slider() {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const length = SliderData.length;
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 10000);
        return () => {
            clearInterval(timer);
        };
    }, [currentImgIndex])

    function prevSlide(e) {
        e.stopPropagation();
        setCurrentImgIndex(currentImgIndex === 0 ? length - 1 : currentImgIndex - 1);
    }

    function nextSlide(e) {
        if (e) {
            e.stopPropagation();
        }

        setCurrentImgIndex(currentImgIndex === length - 1 ? 0 : currentImgIndex + 1)
    }

    function bannerOnClickHandler(id) {
        navigate(`/movies/${id}`);
    };

    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }

    return (
        <div className="main-page-banner-wrapper">

            <FaArrowAltCircleLeft className='left-arrow arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow arrow' onClick={nextSlide} />

            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === currentImgIndex ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === currentImgIndex && (
                            <img
                                className="main-page-banner-image"
                                src={slide.image}
                                alt="banner"
                                onClick={() => bannerOnClickHandler(slide._id)}>
                            </img>
                        )}
                    </div>
                )
            })}
        </div>
    );
}

export default Slider;