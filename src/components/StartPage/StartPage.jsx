import React, { useContext } from "react";
import { QuizContext } from "../../helpers/contexts";
import "../cssReady/StartPage.css";

export default function StartPage() {
  const { setGameState } = useContext(QuizContext);

  let setQuizState = () => {
    setGameState("quiz");
  };
  return (
    <div className="startPage">
      <div className="bg"></div>
      <div className="container">
        <div className="inner">
          <div className="title">Онлайн-Гра "Хто хоче стати мільйонером?"</div>
          <div className="subtitle">
            <p className="subtitleAni">
              <p className="sub1">Щоб приступити до гри - натисність кнопку нижче</p>
              <p className="sub2">Натискай кнопку - гайда грати</p>
            </p>
          </div>
          <p className="arrowDown">&#8615;</p>
          <div className="buttonToStart">
            <button onClick={setQuizState}>почати игру</button>
          </div>
        </div>
      </div>
    </div>
  );
}
