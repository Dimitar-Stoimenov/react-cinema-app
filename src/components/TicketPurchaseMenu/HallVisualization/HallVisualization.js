import "./HallVisualization.css";

const HallVisualization = ({ projection, totalTickets, activeTicketState }) => {
    let projectionType = null;

    if (projection.hallId.hallName === "IMAX 3D") {
        projectionType = "3D";
    } else if (projection.hallId.hallName === "4DX HALL") {
        projectionType = "4D";
    } else {
        projectionType = "2D";
    }

    function visualizeSeats() {
        let row1 = [];
        let row2 = [];
        let row3 = [];
        let row4 = [];
        let row5 = [];
        let row6 = [];
        let row7 = [];
        let row8 = [];
        let row9 = [];
        let row10 = [];

        let row1start = 0;
        let row2start = 0;
        let row3start = 0;
        let row4start = 0;
        let row5start = 0;
        let row6start = 0;
        let row7start = 0;
        let row8start = 0;
        let row9start = 0;
        let row10start = 0;

        if (projectionType === "2D") {
            row1start = 10;
            row2start = 35;
            row3start = 60;
            row4start = 85;
            row5start = 110;
            row6start = 135;
            row7start = 161;
            row8start = 186;
        } else if (projectionType === "3D") {
            row1start = 7;
            row2start = 33;
            row3start = 58;
            row4start = 83;
            row5start = 108;
            row6start = 133;
            row7start = 158;
            row8start = 183;
            row9start = 209;
            row10start = 235;
        } else if (projectionType === "4D") {
            row1start = 9;
            row2start = 35;
            row3start = 61;
            row4start = 87;
            row5start = 113;
            row6start = 139;
            row7start = 165;
            row8start = 191;
            row9start = 217;
        }

        for (let index = 0; index < projection.hallId.seats.row1; index++) {
            row1.push(<div onClick={clickedSeat} data-row="1" data-seat={index + 1} className={"div" + Number(row1start + index)} key={"div" + Number(row1start + index)}>{index + 1}</div>);
        }

        for (let index = 0; index < projection.hallId.seats.row2; index++) {
            row2.push(<div onClick={clickedSeat} data-row="2" data-seat={index + 1} className={"div" + Number(row2start + index)} key={"div" + Number(row2start + index)}>{index + 1}</div>);
        }

        for (let index = 0; index < projection.hallId.seats.row3; index++) {
            row3.push(<div onClick={clickedSeat} data-row="3" data-seat={index + 1} className={"div" + Number(row3start + index)} key={"div" + Number(row3start + index)}>{index + 1}</div>);
        }

        for (let index = 0; index < projection.hallId.seats.row4; index++) {
            row4.push(<div onClick={clickedSeat} data-row="4" data-seat={index + 1} className={"div" + Number(row4start + index)} key={"div" + Number(row4start + index)}>{index + 1}</div>);
        }

        for (let index = 0; index < projection.hallId.seats.row5; index++) {
            row5.push(<div onClick={clickedSeat} data-row="5" data-seat={index + 1} className={"div" + Number(row5start + index)} key={"div" + Number(row5start + index)}>{index + 1}</div>);
        }

        for (let index = 0; index < projection.hallId.seats.row6; index++) {
            row6.push(<div onClick={clickedSeat} data-row="6" data-seat={index + 1} className={"div" + Number(row6start + index)} key={"div" + Number(row6start + index)}>{index + 1}</div>);
        }

        for (let index = 0; index < projection.hallId.seats.row7; index++) {
            row7.push(<div onClick={activeTicketState === "reserve" && projectionType=== "2D" ? null : clickedSeat} data-row="7" data-seat={index + 1} className={activeTicketState === "reserve" && projectionType === "2D" ? ("div" + Number(row7start + index) + " " + "only-buy") : "div" + Number(row7start + index)} key={"div" + Number(row7start + index)}>{index + 1}</div>);
        }

        for (let index = 0; index < projection.hallId.seats.row8; index++) {
            row8.push(<div onClick={activeTicketState !== "reserve" ? clickedSeat : null} data-row="8" data-seat={index + 1} className={activeTicketState === "reserve" ? ("div" + Number(row8start + index) + " " + "only-buy") : "div" + Number(row8start + index)} key={"div" + Number(row8start + index)}>{index + 1}</div>);
        }

        if (projectionType !== "2D") {
            for (let index = 0; index < projection.hallId.seats.row9; index++) {
                row9.push(<div onClick={activeTicketState !== "reserve" ? clickedSeat : null} data-row="9" data-seat={index + 1} className={activeTicketState === "reserve" ? ("div" + Number(row9start + index) + " " + "only-buy") : "div" + Number(row9start + index)} key={"div" + Number(row9start + index)}>{index + 1}</div>);
            }
        }

        if (projectionType === "3D") {
            for (let index = 0; index < projection.hallId.seats.row10; index++) {
                row10.push(<div onClick={activeTicketState !== "reserve" ? clickedSeat : null} data-row="10" data-seat={index + 1} className={activeTicketState === "reserve" ? ("div" + Number(row10start + index) + " " + "only-buy") : "div" + Number(row10start + index)} key={"div" + Number(row10start + index)}>{index + 1}</div>);
            }
        }

        return (
            <>
                {row1}
                {row2}
                {row3}
                {row4}
                {row5}
                {row6}
                {row7}
                {row8}
                {row9.length > 0 ? row9 : null}
                {row10.length > 0 ? row10 : null}
            </>
        )
    }

    function clickedSeat(e) {
        console.log(e.target);
    }

    return (
        <div className="hall-visualization-container">
            <section className="screen-visualization">SCREEN</section>
            <section className="row1">1</section>
            <section className="row2">2</section>
            <section className="row3">3</section>
            <section className="row4">4</section>
            <section className="row5">5</section>
            <section className="row6">6</section>
            <section className="row7">7</section>
            <section className="row8">8</section>
            {projectionType !== "2D" ? <section className="row9">9</section> : ""}
            {projectionType === "3D" ? <section className="row10">10</section> : ""}
            {visualizeSeats()}
        </div>
    );
}

export default HallVisualization;