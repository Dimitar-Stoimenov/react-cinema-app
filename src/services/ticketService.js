import { errorCheck } from '../utils/utils';
const url = "http://localhost:3030/tickets";


export async function create(occupiedSeats, projectionId) {
    //TODO: add userId
    let res = await fetch(`${url}/create`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            // 'X-Authorization': token,
        },
        body: JSON.stringify({ occupiedSeats, projectionId }),
    });

    return await errorCheck(res);
}