import React, { useState } from "react";
import Answer from "../answer/Answer";
import Question from "../question/Question";
import "../cssReady/QuizPage.css";
import ModalWindow from "../ModalWindow/ModalWindow";

function QuizPage(props) {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="quizPage">
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <div className="modalContentInner">
          <div
            className="modalContentClose"
            onClick={() => setModalActive(false)}
          >
            &#215;
          </div>
          <div className="modalContentTitle">
            Ви обрали підказку "Допомога зали"
          </div>
          <div className="modalContentText">
            І ми бачимо, що зал обирає варіант :
          </div>
          <div className="modalContentAnswer">
            № {props.correctAnswers[props.step]}
          </div>
        </div>
      </ModalWindow>
      <div className="numberOfQuestion">
        {props.step} / {Object.keys(props.questions).length}
      </div>
      <div className="container">
        <div className="quizInner">
          <button
            onClick={() => {
              setModalActive(true);
            }}
            className="hint peoplesChoice"
          >
            допомога зали
          </button>
          <button className="hint takeMoney" onClick={props.tK}>
            забрати гроші
          </button>
          <div className="quizLogo"></div>
          <Question question={props.question} />
          <Answer
            answer={props.answer}
            step={props.step}
            checkAnswer={props.checkAnswer}
            correctAnswer={props.correctAnswer}
            clickedAnswer={props.clickedAnswer}
            answers={props.answers}
          />

          <button
            className="nextStep"
            disabled={
              props.clickedAnswer &&
              Object.keys(props.question).length >= props.step
                ? false
                : true
            }
            onClick={() => props.nextStep(props.step)}
          >
            Далі
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
