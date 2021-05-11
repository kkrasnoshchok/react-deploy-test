import React, { useContext } from "react";
import { QuizContext } from "../../helpers/contexts";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaPhone,
} from "react-icons/fa";
import "../cssReady/FinalPage.css";

export default function FinalPage(props) {
  const { setGameState } = useContext(QuizContext);

  let setQuizState = () => {
    setGameState("start");
  };

  let scoreMoney = () => {
    switch (props.score) {
      case 1:
        return "100";
      case 2:
        return "200";
      case 3:
        return "300";
      case 4:
        return "500";
      case 5:
        return "1 000";
      case 6:
        return "2 000";
      case 7:
        return "4 000";
      case 8:
        return "8 000";
      case 9:
        return "16 000";
      case 10:
        return "32 000";
      case 11:
        return "64 000";
      case 12:
        return "125 000";
      case 13:
        return "250 000";
      case 14:
        return "500 000";
      case 15:
        return "1 000 000";
      default:
        return "0";
    }
  };

  return (
    <div className="finalPage">
      <div className="container">
        <div className="finalInner">
          <div className="finalTitle">
            Вітаю, ви закінчили прохождення
            <span role="img" aria-label="">
              {/* &#127881; */}
            </span>{" "}
          </div>
          <div className="results">
            <div className="resultsTitle">
              Ось ваші результати{" "}
              <span role="img" aria-label="">
                {/* &#9989; */}
              </span>{" "}
              :
            </div>
            <div className="result numeric">
              - В цифрах : {props.score}/{Object.keys(props.questions).length}
            </div>
            <div className="result money">- В грошах : {scoreMoney()} грн</div>
          </div>
          <div className="restartButton">
            <button className="restButton" onClick={setQuizState}>
              почати знову!
            </button>
          </div>
          <div className="contacts">
            <ul className="social">
              <li className="social-item facebook">
                <a
                  href="https://www.facebook.com/Millionaire/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-item instagram">
                <a
                  href="https://www.instagram.com/millionairetv/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="social-item telegram">
                <a
                  href="https://t.me/GamesHDBot?game=Millionaire"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegramPlane />
                </a>
              </li>
              <li className="social-item phone">
                <a href="tel:+380999999999">
                  <FaPhone />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
