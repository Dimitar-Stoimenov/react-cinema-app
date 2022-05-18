const url = "http://localhost:3030/halls";

export async function create(hallName, row1, row2, row3, row4, row5, row6, row7, row8, row9, row10) {
    let res = await fetch(`${url}/create`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            // 'X-Authorization': token,
        },
        body: JSON.stringify({ hallName, row1, row2, row3, row4, row5, row6, row7, row8, row9, row10 }),
    });

    return res;
}