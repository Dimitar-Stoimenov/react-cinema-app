import { errorCheck } from '../utils/utils';
const url = "http://localhost:3030/projections";


export async function create(movieId, hallId, date, hour) {
    date = standartizeDate(date);
    hour = standartizeHour(hour);
    
    let res = await fetch(`${url}/create`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            // 'X-Authorization': token,
        },
        body: JSON.stringify({ movieId, hallId, date, hour }),
    });

    function standartizeDate(dateString) {
        let splitDate = dateString.split('/');
        let result = [splitDate[2], splitDate[1], splitDate[0]].join('/');

        return result;
    }

    function standartizeHour(hourString) {
        let splitHour = hourString.split(':');
        let result = Number(splitHour[0] + splitHour[1]);

        return result;
    }

    return res;
}