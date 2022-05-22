import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProjections } from "../../services/projectionService";
import { parseDate } from '../../utils/utils';
import "./Program.css";

const Program = () => {
    const { date: dateString } = useParams();
    const [projections, setProjections] = useState([]);

    const activeDayTab = 0;
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

    function incrementDays(days) {
        let dateCopy = new Date(today.getTime());
        return new Date(dateCopy.setDate(dateCopy.getDate() + days));
    }

    useEffect(() => {
        getProjections(dateString)
            .then(res => {
                setProjections(res);
            })
    }, []);

    return (
        <div className="program-container">
            <div className="program-header">
                PROGRAM
            </div>
            <ul className="day-tabs-container">
                <button className={activeDayTab === 0 ? 'day-tab active' : 'day-tab'}
                    key={0}
                >
                    <div className="tab-day">Today</div>
                    <div className="tab-date">{parsedDays.day0.parsedDate}</div>
                </button>
                <button className={activeDayTab === 1 ? 'day-tab active' : 'day-tab'}
                    key={1}
                >
                    <div className="tab-day">{parsedDays.day1.dayOfWeek}</div>
                    <div className="tab-date">{parsedDays.day1.parsedDate}</div>
                </button>
                <button className={activeDayTab === 2 ? 'day-tab active' : 'day-tab'}
                    key={2}
                >
                    <div className="tab-day">{parsedDays.day2.dayOfWeek}</div>
                    <div className="tab-date">{parsedDays.day2.parsedDate}</div>
                </button>
                <button className={activeDayTab === 3 ? 'day-tab active' : 'day-tab'}
                    key={3}
                >
                    <div className="tab-day">{parsedDays.day3.dayOfWeek}</div>
                    <div className="tab-date">{parsedDays.day3.parsedDate}</div>
                </button>
                <button className={activeDayTab === 4 ? 'day-tab active' : 'day-tab'}
                    key={4}
                >
                    <div className="tab-day">{parsedDays.day4.dayOfWeek}</div>
                    <div className="tab-date">{parsedDays.day4.parsedDate}</div>
                </button>
                <button className={activeDayTab === 5 ? 'day-tab active' : 'day-tab'}
                    key={5}
                >
                    <div className="tab-day">{parsedDays.day5.dayOfWeek}</div>
                    <div className="tab-date">{parsedDays.day5.parsedDate}</div>
                </button>
                <button className={activeDayTab === 6 ? 'day-tab active' : 'day-tab'}
                    key={6}
                >
                    <div className="tab-day">{parsedDays.day6.dayOfWeek}</div>
                    <div className="tab-date">{parsedDays.day6.parsedDate}</div>
                </button>
            </ul>
            <div className="program-content">
                <div className="program-movie-card">
                    {/* {projections.map(x => {
                        return <div>hi</div>
                        // sort by halls?
                    })} */}
                </div>
            </div>
        </div>
    );
};

export default Program;