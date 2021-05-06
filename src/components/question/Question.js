import React from 'react';
import './Question.css';

const Question = (props) => {
    return (
        <div className="questionTitle">{props.question}</div>
    );
}

export default Question;