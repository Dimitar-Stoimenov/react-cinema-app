export async function errorCheck(response) {
    try {
        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            const data = await response.json();
            return data;
        } catch (err) {
            return response;
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export function standartizeDate(dateString) {
    let splitDate;

    if (dateString[[1] === "/"] || dateString[[1] === "-"] || dateString[[1] === "."]) {
        dateString = "0" + dateString;
    }

    if (dateString[[4] === "/"] || dateString[[4] === "-"] || dateString[[4] === "."]) {
        dateString = dateString.split("").splice(3, 0, "0").join('');
    }

    if (dateString[[2] === "/"]) {
        splitDate = dateString.split('/');
    } else if (dateString[2] === "-") {
        splitDate = dateString.split('-');
    } else if (dateString[2] === ".") {
        splitDate = dateString.split('.');
    } else {
        return new Date();
    }

    return [splitDate[2], splitDate[1], splitDate[0]].join('/');
}

export function standartizeHour(hourString) {
    let splitHour = hourString.split(':');
    let result = Number(splitHour[0] + splitHour[1]);

    return result;
}

export function parseDate(date) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");

    return `${day}-${month}-${year}`;
}