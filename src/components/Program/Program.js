import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getProjections } from "../../services/projectionService";
import { parseDate, standartizeDate } from '../../utils/utils';
import ProgramSortByMovie from "./ProgramSortByMovie/ProgramSortByMovie";

import "./Program.css";

const Program = () => {
    const { date: dateString } = useParams();
    const [projections, setProjections] = useState([]);
    const [activeDayTab, setActiveDayTab] = useState(0);
    const [selectedDate, setSelectedDate] = useState(false);

    const today = new Date();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const parsedDays = {
        day0: {
            date: today,
            parsedDate: parseDate(today, "no-year"),
            dayOfWeek: weekday[today.getDay()],
        },
        day1: {
            date: incrementDays(1),
            parsedDate: parseDate(incrementDays(1), "no-year"),
            dayOfWeek: weekday[incrementDays(1).getDay()],
        },
        day2: {
            date: incrementDays(2),
            parsedDate: parseDate(incrementDays(2), "no-year"),
            dayOfWeek: weekday[incrementDays(2).getDay()],
        },
        day3: {
            date: incrementDays(3),
            parsedDate: parseDate(incrementDays(3), "no-year"),
            dayOfWeek: weekday[incrementDays(3).getDay()],
        },
        day4: {
            date: incrementDays(4),
            parsedDate: parseDate(incrementDays(4), "no-year"),
            dayOfWeek: weekday[incrementDays(4).getDay()],
        },
        day5: {
            date: incrementDays(5),
            parsedDate: parseDate(incrementDays(5), "no-year"),
            dayOfWeek: weekday[incrementDays(5).getDay()],
        },

        day6: {
            date: incrementDays(6),
            parsedDate: parseDate(incrementDays(6), "no-year"),
            dayOfWeek: weekday[incrementDays(6).getDay()],
        },
    }

    useEffect(() => {
        const date = new Date(standartizeDate(dateString));

        setSelectedDate(date);
        clickDay(date);
    }, [dateString]);

    function incrementDays(days) {
        let dateCopy = new Date(today.getTime());
        return new Date(dateCopy.setDate(dateCopy.getDate() + days));
    }

    function clickDay(date) {
        const newurl = window.location.protocol + "//" + window.location.host + "/projections/program/" + parseDate(date);
        window.history.pushState({ path: newurl }, '', newurl);

        let dateStr = newurl.slice(-10);

        getProjections(dateStr)
            .then(res => {
                setProjections(res);
            })
    }

    return (
        <div className="program-container">
            <div className="program-header">
                <div className="program-title">
                    PROGRAM FOR {dateString.slice(0, 5).replace("-", "/")}
                </div>
            </div>
            <ul className="day-tabs-container">
                <Link to={"/projections/program/" + parseDate(parsedDays.day0.date)} className={activeDayTab === 0 ? 'day-tab active' : 'day-tab'}
                    onClick={() => {
                        clickDay(parsedDays.day0.date);
                        setActiveDayTab(0);
                    }}
                    key={0}
                >
                    <div className="tab-day">Today</div>
                    <div className="tab-date">{parsedDays.day0.parsedDate}</div>
                </Link>
                <Link to={"/projections/program/" + parseDate(parsedDays.day1.date)} className={activeDayTab === 1 ? 'day-tab active' : 'day-tab'}
                    key={1}
                    onClick={() => {
                        clickDay(parsedDays.day1.date);
                        setActiveDayTab(1);
                    }}
                >
                    <div className="tab-day">{parsedDays.day1.dayOfWeek}</div>
                    <div className="tab-date">{parsedDays.day1.parsedDate}</div>
                </Link>
                <Link to={"/projections/program/" + parseDate(parsedDays.day2.date)} className={activeDayTab === 2 ? 'day-tab active' : 'day-tab'}
                    onClick={() => {
                        clickDay(parsedDays.day2.date);
                        setActiveDayTab(2);
                    }}
                    key={2}
                >
                    <div className="tab-day">{parsedDays.day2.dayOfWeek}</div>
                    <div className="tab-date">{parsedDays.day2.parsedDate}</div>
                </Link>
                <Link to={"/projections/program/" + parseDate(parsedDays.day3.date)} className={activeDayTab === 3 ? 'day-tab active' : 'day-tab'}
                    onClick={() => {
                        clickDay(parsedDays.day3.date);
                        setActiveDayTab(3);
                    }}
                    key={3}
                >
                    <div className="tab-day">{parsedDays.day3.dayOfWeek}</div>
                    <div className="tab-date">{parsedDays.day3.parsedDate}</div>
                </Link>
                <Link to={"/projections/program/" + parseDate(parsedDays.day4.date)} className={activeDayTab === 4 ? 'day-tab active' : 'day-tab'}
                    onClick={() => {
                        clickDay(parsedDays.day4.date);
                        setActiveDayTab(4);
                    }}
                    key={4}
                >
                    <div className="tab-day">{parsedDays.day4.dayOfWeek}</div>
                    <div className="tab-date">{parsedDays.day4.parsedDate}</div>
                </Link>
                {/* <Link to={"/projections/program/" + parseDate(parsedDays.day5.date)} className={activeDayTab === 5 ? 'day-tab active' : 'day-tab'}
                    onClick={() => {
                        clickDay(parsedDays.day5.date);
                        setActiveDayTab(5);
                    }}
                    key={5}
                >
                    <div className="tab-day">{parsedDays.day5.dayOfWeek}</div>
                    <div className="tab-date">{parsedDays.day5.parsedDate}</div>
                </Link>
                <Link to={"/projections/program/" + parseDate(parsedDays.day6.date)} className={activeDayTab === 6 ? 'day-tab active' : 'day-tab'}
                    onClick={() => {
                        clickDay(parsedDays.day6.date);
                        setActiveDayTab(6);
                    }}
                    key={6}
                >
                    <div className="tab-day">{parsedDays.day6.dayOfWeek}</div>
                    <div className="tab-date">{parsedDays.day6.parsedDate}</div>
                </Link> */}
            </ul>
            <div className="program-content">
                <div className="program-movie-card-wrapper">
                    <ProgramSortByMovie projections={projections} date={selectedDate} />
                </div>
            </div>
        </div>
    );
};

export default Program;