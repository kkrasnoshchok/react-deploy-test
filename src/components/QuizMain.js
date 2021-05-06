import React, { Component } from "react";
import "./QuizMain.css";
import FinalPage from "./FinalPage/FinalPage";
import FailPage from "./FailPage/FailPage";
import QuizPage from "./QuizPage/QuizPage";
import CashPage from "./CashPage/CashPage";

export default class QuizMain extends Component {
  state = {
    questions: {
      1: "Скільки днів у православних триває Різдвяний піст?",
      2: "До якої події продовжується Різдвяний піст?",
      3: "До кого першого звернулись за допомогою дід та бабка, не впоравшись з ріпкою?",
      4: "Кого нема серед 'смішариків'?",
      5: "Як називається найближча до Землі зірка?",
      6: "Яку площу має клітинка стандартного шкільного зошита?",
      7: "Що обертається навколо Землі?",
      8: "Який вид бігу в помірній кількості вважається корисним для укріплення здоров'я?",
      9: "В якому місті була створена група 'Бітлз' ?",
      10: "Як заводив свій мотор Карлсон?",
      11: "Хто побудував найбільшу піраміду?",
      12: "Для чого потрібен секатор?",
      13: "Що таке Босфор?",
      14: "Вивчення з'єднань якого елемента є основою органічної хімії?",
      15: "Скільком каратам відповідає чисте золото?",
    },
    answers: {
      1: {
        1: "10",
        2: "20",
        3: "30",
        4: "40",
      },
      2: {
        1: "До першої зірки",
        2: "До другої зірки",
        3: "До третьої зірки",
        4: "До четвертої зірки",
      },
      3: {
        1: "До Жучки",
        2: "До дочки",
        3: "До внучки",
        4: "До залу",
      },
      4: {
        1: "Барана",
        2: "Свині",
        3: "Коня",
        4: "Лося",
      },
      5: {
        1: "Проксіома Центавра",
        2: "Сонце",
        3: "Полярна",
        4: "Сіріус",
      },
      6: {
        1: "0,25 кв.см",
        2: "1 кв.см",
        3: "0,5 кв.см",
        4: "1,25 кв.см",
      },
      7: {
        1: "Місяць",
        2: "Сонце",
        3: "Марс",
        4: "Венера",
      },
      8: {
        1: "Підтюпцем (трусцою)",
        2: "Галопом",
        3: "Риссю",
        4: "Гуськом",
      },
      9: {
        1: "Манчестер",
        2: "Глазго",
        3: "Ліверпуль",
        4: "Лондон",
      },
      10: {
        1: "Кнопкою",
        2: "Рукояткою",
        3: "З толкача",
        4: "Стартером",
      },
      11: {
        1: "Хефрен",
        2: "Рамсес",
        3: "Мавроді",
        4: "Хеопс",
      },
      12: {
        1: "Для зрізання кущів",
        2: "Для знищення шкідників",
        3: "Для доїння корови",
        4: "Для прополки грядок",
      },
      13: {
        1: "Залив",
        2: "Пролив",
        3: "Острів",
        4: "Місто",
      },
      14: {
        1: "Гелій",
        2: "Водень",
        3: "Вуглець",
        4: "Цинк",
      },
      15: {
        1: "750",
        2: "999",
        3: "12",
        4: "24",
      },
    },
    correctAnswers: {
      1: "4",
      2: "1",
      3: "3",
      4: "3",
      5: "2",
      6: "1",
      7: "1",
      8: "1",
      9: "3",
      10: "1",
      11: "4",
      12: "1",
      13: "2",
      14: "3",
      15: "4",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    incorrect: 0,
    takeCash: 0,
    step: 1,
    score: 0,
  };
  checkAnswer = (answer) => {
    const { correctAnswers, step, score, incorrect } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer,
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer,
        incorrect: incorrect + 1,
      });
    }
  };
  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  };
  tK = () => {
    const { takeCash } = this.state;
    this.setState({
      takeCash: takeCash + 1,
    });
  };

  render() {
    let {
      questions,
      answers,
      correctAnswer,
      correctAnswers,
      clickedAnswer,
      step,
      score,
      incorrect,
      takeCash,
    } = this.state;

    return (
      <div className="content">
        {step <= Object.keys(questions).length ? (
          incorrect === 0 ? (
            takeCash === 0 ? (
              <QuizPage
                answer={answers[step]}
                step={step}
                checkAnswer={this.checkAnswer}
                correctAnswer={correctAnswer}
                clickedAnswer={clickedAnswer}
                correctAnswers={correctAnswers}
                questions={questions}
                question={questions[step]}
                nextStep={this.nextStep}
                takeCash={this.takeCash}
                tK={this.tK}
                answers={answers}
              />
            ) : (
              <CashPage score={score} questions={questions} />
            )
          ) : (
            <FailPage score={score} questions={questions} />
          )
        ) : (
          <FinalPage score={score} questions={questions} />
        )}
      </div>
    );
  }
}
