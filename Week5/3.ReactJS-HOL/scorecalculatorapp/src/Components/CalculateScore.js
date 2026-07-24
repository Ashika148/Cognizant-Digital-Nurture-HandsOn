import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
    const score = (props.total / props.goal * 100).toFixed(2);
    
    return (
        <div className="container">
            <h2>Student Details:</h2>
            <p><span className="label">Name:</span> <span className="name">{props.name}</span></p>
            <p><span className="label">School:</span> <span className="school">{props.school}</span></p>
            <p><span className="label">Total:</span> <span className="total">{props.total}Marks</span></p>
            <p><span className="label">Score:</span><span className="score">{score}%</span></p>
        </div>
    );
}

export default CalculateScore;