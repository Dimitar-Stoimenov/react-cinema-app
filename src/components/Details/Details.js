import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

import * as movieService from "../../services/movieService";

const Details = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        movieService.getOne(movieId)
            .then(movieResult => {
                setMovie(movieResult);
            });
    }, [movieId]);

    return (
        <div className='details-container'>
            <div className="details-inner">
                <div className="details-movie-header">
                    <div className="details-movie-name">{movie.movieName}</div>
                    <button className='details-tickets-button'>BUY TICKETS</button>
                </div>
                <div className="details-movie-wrapper">
                    <div className="details-movie-report">
                        <div className="report">
                            <div className="item">
                                <div className="name">Времетраене</div>
                                <div className="value">94 минути</div>
                            </div>
                            <div className="item">
                                <div className="name">Премиера</div>
                                <div className="value">13 май 2022 г.</div>
                            </div>
                            <div className="item">
                                <div className="name">Режисьор</div>
                                <div className="value">Keith Thomas</div>
                            </div>
                            <div className="item">
                                <div className="name">Жанр</div>
                                <div className="value">Трилър, Фентъзи, Хорър</div>
                            </div>
                            <div className="item">
                                <div className="name">Актьори</div>
                                <div className="value">Ryan Kiera Armstrong, Zac Efron, Sydney Lemmon, Kurtwood Smith, Michael Greyeyes, Gloria Reuben</div>
                            </div>
                            <div className="item">
                                <div className="name">RATING</div>
                                <div className="value">4.8</div>
                            </div>
                            <div className="item">
                                <div className="name">Category</div>
                                <div className="value">C+</div>
                            </div>                            
                        </div>
                    </div>
                    <div className="details-movie-description">
                        Повече от десетилетие младите родители Анди (Зак Ефрон, Най-великият шоумен) и Вики (Сидни Лемън, Наследници) се укриват в отчаян опит да опазят дъщеря им Чарли (Райън Кийра Армстронг, Черната вдовица) от това да бъде заловена и подложена на безкрайни тестове, а безпрецедентните ѝ пирокинетични способности, да бъдат използвани за създаване на оръжие за масово унищожение. Анди е научил Чарли да потиска силата си, която се активира от гняв или болка, но когато момичето навършва 11 години, огънят става все по-труден и по-труден за контролиране. След инцидент, който разкрива локацията на семейството, мистериозен оперативен агент е изпратен по петите им, за да залови Чарли и да я сложи под контрол веднъж завинаги. Ще има ли Чарли силата да овладее огъня и да спаси семейство си?
                    </div>
                    <div className="details-movie-poster-wrapper">
                        <img className="details-movie-poster" src={movie.posterLink} alt="poster" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;