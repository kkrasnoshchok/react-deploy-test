import React from "react";
import "./Answer.css";
import "../cssReady/Answer.css";

const Answer = (props) => {
  let answers = Object.keys(props.answer).map((qAnswer, i) => (
    <div
      className={
        props.correctAnswer === qAnswer
          ? "correct"
          : props.clickedAnswer === qAnswer
          ? "incorrect"
          : ""
      }
      onClick={() => props.checkAnswer(qAnswer)}
      key={qAnswer}
    >
      {props.answer[qAnswer]}
    </div>
  ));

  return (
    <div disabled={props.clickedAnswer ? true : false} className="answers">
      {answers}
    </div>
  );
};

export default Answer;
