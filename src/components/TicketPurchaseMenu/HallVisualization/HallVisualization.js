import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./HallVisualization.css";

const HallVisualization = ({ projection, totalTickets, activeTicketState, totalPrice, regularTickets, studentTickets }) => {
    const navigate = useNavigate();
    const elementRef = useRef({});
    const { projectionId } = useParams();
    const [selectedSeatsObj, setSelectedSeatsObj] = useState({
        row1: [],
        row2: [],
        row3: [],
        row4: [],
        row5: [],
        row6: [],
        row7: [],
        row8: [],
        row9: [],
        row10: [],
    });
    const [selectedSeatsCount, setSelectedSeatsCount] = useState(0);

    let projectionType = null;

    if (projection.hallId.hallName === "IMAX 3D") {
        projectionType = "3D";
    } else if (projection.hallId.hallName === "4DX HALL") {
        projectionType = "4D";
    } else {
        projectionType = "2D";
    }

    useEffect(() => {
        function populateSeats() {
            projection.occupiedSeats.row1?.map(x => elementRef.current[`row1-seat${x}`].classList.add('taken'));
            projection.occupiedSeats.row2?.map(x => elementRef.current[`row2-seat${x}`].classList.add('taken'));
            projection.occupiedSeats.row3?.map(x => elementRef.current[`row3-seat${x}`].classList.add('taken'));
            projection.occupiedSeats.row4?.map(x => elementRef.current[`row4-seat${x}`].classList.add('taken'));
            projection.occupiedSeats.row5?.map(x => elementRef.current[`row5-seat${x}`].classList.add('taken'));
            projection.occupiedSeats.row6?.map(x => elementRef.current[`row6-seat${x}`].classList.add('taken'));
            projection.occupiedSeats.row7?.map(x => elementRef.current[`row7-seat${x}`].classList.add('taken'));
            projection.occupiedSeats.row8?.map(x => elementRef.current[`row8-seat${x}`].classList.add('taken'));
            projection.occupiedSeats.row9?.map(x => elementRef.current[`row9-seat${x}`].classList.add('taken'));
            projection.occupiedSeats.row10?.map(x => elementRef.current[`row10-seat${x}`].classList.add('taken'));
        }
        populateSeats();
    }, [projection])

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
            row1.push(<div ref={el => elementRef.current["row1-seat" + Number(index + 1)] = el} onClick={clickedSeat} id={"row1-seat" + Number(index + 1)} data-row="1" data-seat={index + 1} className={"div" + Number(row1start + index)} key={"div" + Number(row1start + index)}>{index + 1}</div>);
        }

        for (let index = 0; index < projection.hallId.seats.row2; index++) {
            row2.push(<div ref={el => elementRef.current["row2-seat" + Number(index + 1)] = el} onClick={clickedSeat} id={"row2-seat" + Number(index + 1)} data-row="2" data-seat={index + 1} className={"div" + Number(row2start + index)} key={"div" + Number(row2start + index)}>{index + 1}</div>);
        }

        for (let index = 0; index < projection.hallId.seats.row3; index++) {
            row3.push(<div ref={el => elementRef.current["row3-seat" + Number(index + 1)] = el} onClick={clickedSeat} id={"row3-seat" + Number(index + 1)} data-row="3" data-seat={index + 1} className={"div" + Number(row3start + index)} key={"div" + Number(row3start + index)}>{index + 1}</div>);
        }

        for (let index = 0; index < projection.hallId.seats.row4; index++) {
            row4.push(<div ref={el => elementRef.current["row4-seat" + Number(index + 1)] = el} onClick={clickedSeat} id={"row4-seat" + Number(index + 1)} data-row="4" data-seat={index + 1} className={"div" + Number(row4start + index)} key={"div" + Number(row4start + index)}>{index + 1}</div>);
        }

        for (let index = 0; index < projection.hallId.seats.row5; index++) {
            row5.push(<div ref={el => elementRef.current["row5-seat" + Number(index + 1)] = el} onClick={clickedSeat} id={"row5-seat" + Number(index + 1)} data-row="5" data-seat={index + 1} className={"div" + Number(row5start + index)} key={"div" + Number(row5start + index)}>{index + 1}</div>);
        }

        for (let index = 0; index < projection.hallId.seats.row6; index++) {
            row6.push(<div ref={el => elementRef.current["row6-seat" + Number(index + 1)] = el} onClick={clickedSeat} id={"row6-seat" + Number(index + 1)} data-row="6" data-seat={index + 1} className={"div" + Number(row6start + index)} key={"div" + Number(row6start + index)}>{index + 1}</div>);
        }

        for (let index = 0; index < projection.hallId.seats.row7; index++) {
            row7.push(<div ref={el => elementRef.current["row7-seat" + Number(index + 1)] = el} onClick={activeTicketState === "reserve" && projectionType === "2D" ? null : clickedSeat} id={"row7-seat" + Number(index + 1)} data-row="7" data-seat={index + 1} className={activeTicketState === "reserve" && projectionType === "2D" ? ("div" + Number(row7start + index) + " only-buy") : "div" + Number(row7start + index)} key={"div" + Number(row7start + index)}>{index + 1}</div>);
        }

        for (let index = 0; index < projection.hallId.seats.row8; index++) {
            row8.push(<div ref={el => elementRef.current["row8-seat" + Number(index + 1)] = el} onClick={activeTicketState !== "reserve" ? clickedSeat : null} id={"row8-seat" + Number(index + 1)} data-row="8" data-seat={index + 1} className={activeTicketState === "reserve" ? ("div" + Number(row8start + index) + " only-buy") : "div" + Number(row8start + index)} key={"div" + Number(row8start + index)}>{index + 1}</div>);
        }

        if (projectionType !== "2D") {
            for (let index = 0; index < projection.hallId.seats.row9; index++) {
                row9.push(<div ref={el => elementRef.current["row9-seat" + Number(index + 1)] = el} onClick={activeTicketState !== "reserve" ? clickedSeat : null} id={"row9-seat" + Number(index + 1)} data-row="9" data-seat={index + 1} className={activeTicketState === "reserve" ? ("div" + Number(row9start + index) + " only-buy") : "div" + Number(row9start + index)} key={"div" + Number(row9start + index)}>{index + 1}</div>);
            }
        }

        if (projectionType === "3D") {
            for (let index = 0; index < projection.hallId.seats.row10; index++) {
                row10.push(<div ref={el => elementRef.current["row10-seat" + Number(index + 1)] = el} onClick={activeTicketState !== "reserve" ? clickedSeat : null} id={"row10-seat" + Number(index + 1)} data-row="10" data-seat={index + 1} className={activeTicketState === "reserve" ? ("div" + Number(row10start + index) + " only-buy") : "div" + Number(row10start + index)} key={"div" + Number(row10start + index)}>{index + 1}</div>);
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
        if (e.target.classList.contains('taken')) return;

        let rowString = e.target.id.split('-')[0];
        let seat = Number(e.target.id.split('-')[1].replace('seat', ""));

        if (e.target.classList.contains('selected')) {
            e.target.classList.remove('selected');
            setSelectedSeatsCount(x => x - 1);
            return modifySelectedSeatState(rowString, seat, "remove");
        }

        if (selectedSeatsCount >= totalTickets) {
            return alert(`You have already selected ${totalTickets} seats.`)
        }

        e.target.classList.add('selected');
        setSelectedSeatsCount(x => x + 1);
        return modifySelectedSeatState(rowString, seat, "add");
    }

    function modifySelectedSeatState(row, seat, action) {
        let stateObj = JSON.parse(JSON.stringify(selectedSeatsObj)); //cloning object...

        if (action === "add") {
            stateObj[row].push(seat);
            setSelectedSeatsObj(stateObj);
        } else if (action === "remove") {
            stateObj[row] = stateObj[row].filter(x => x !== seat);
            setSelectedSeatsObj(stateObj);
        }
    }

    function continueToPayment() {
        if (selectedSeatsCount !== totalTickets) {
            return alert('You have not selected enough seats.');
        };

        navigate(`/projections/id/${projectionId}/payment`, { state: { projection, totalTickets, activeTicketState, totalPrice, regularTickets, studentTickets, selectedSeatsObj } });
    }

    return (
        <div className="hall-visualization-container">
            <section className="screen-visualization"></section>
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
            <div className="visualization-continue-btn" onClick={continueToPayment}>Continue</div>
        </div>
    );
}

export default HallVisualization;