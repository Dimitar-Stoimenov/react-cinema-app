import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjections } from "../../services/projectionService";
import "./Program.css";

const Program = () => {
    const { date: dateString } = useParams();
    const [projections, setProjections] = useState([]);

    useEffect(() => {
        getProjections(dateString)
            .then(res => {
                setProjections(res);
            })
    }, []);

    return (
        <div className="program-container">
            <div className="program-content">
            </div>
        </div>
    );
};

export default Program;