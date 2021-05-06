import React, { useState } from "react";
import "./App.css";
import { QuizContext } from "./helpers/contexts";
import StartPage from "./components/StartPage/StartPage";
import QuizMain from "./components/QuizMain";

function App() {
  const [gameState, setGameState] = useState("start");
  return (
    <div className="app">
      <QuizContext.Provider value={{ gameState, setGameState }}>
        {gameState === "start" && <StartPage />}
        {gameState === "quiz" && <QuizMain />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
