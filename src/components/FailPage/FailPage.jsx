import React, { useContext } from "react";
import { QuizContext } from "../../helpers/contexts";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaPhone,
} from "react-icons/fa";
import "./FailPage.css";

export default function FailPage(props) {
  const { setGameState } = useContext(QuizContext);

  function setQuizState() {
    setGameState("start");
  }

  let howMuchMoney = (s) => {
    s = props.score;
    if (s >= 5 && s < 10) {
      return "1 000";
    } else if (s >= 10 && s < 15) {
      return "32 000";
    }
  };
  return (
    <div className="failPage">
      <div className="failBg"></div>
      <div className="container">
        <div className="finalInner">
          <div className="finalTitle">
            на жаль, в цей раз ви десь прогледіли правильну відповідь
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
              {props.score}/{Object.keys(props.questions).length}
            </div>
            <div className="result money">- В грошах : {props.score < 5 ? "0" : howMuchMoney()} грн</div>
          </div>
          <div className="restartButton">
            <button className="restButton" onClick={setQuizState}>
              почати знову!
            </button>
          </div>
          <div className="failContacts">
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
