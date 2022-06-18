import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";

const MovieRating = ({ rating }) => {
    rating = round(rating, 0.5);

    function round(value, step) {
        step || (step = 1.0);
        let inv = 1.0 / step;
        return Math.round(value * inv) / inv;
    }

    let resultArray = [];

    for (let index = 1; index <= 5; index++) {
        if (rating >= index) {
            resultArray.push(<MdStar key={index} />);
        } else if (rating >= (index - 0.5)) {
            resultArray.push(<MdStarHalf key={index} />);
        } else if (rating < index) {
            resultArray.push(<MdStarBorder key={index} />);
        }
    }

    return resultArray;
}

export default MovieRating;