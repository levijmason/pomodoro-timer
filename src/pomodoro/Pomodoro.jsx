import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import ChangeTime from "./ChangeTime";
import RunTime from "./RunTime";
import Session from "./Session";
function Pomodoro() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerState, setTimerState] = useState("Stop");
  const [focusTimer, setFocusTimer] = useState(25 * 60);
  const [elapsedFocus, setElapsedFocus] = useState(0);
  const [breakTimer, setBreakTimer] = useState(5 * 60);
  const [elaspedBreak, setElapsedBreak] = useState(0);

  useInterval(
    () => {
      if (timerState === "Focus") {
        setElapsedFocus((timer) => timer + 1);
        const timeRemaining = focusTimer - elapsedFocus;
        if (timeRemaining === 0) {
          new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
          setTimerState("Break");
          setElapsedFocus(0);
        }
      } else if (timerState === "Break") {
        setElapsedBreak((timer) => timer + 1);
        const timeRemaining = breakTimer - elaspedBreak;
        if (timeRemaining === 0) {
          new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
          setTimerState("Focus");
          setElapsedBreak(0);
        }
      }
    },
    isTimerRunning ? 1000 : null
  );

  return (
    <div className="pomodoro">
      <ChangeTime
        focusTimer={focusTimer}
        setFocusTimer={setFocusTimer}
        breakTimer={breakTimer}
        setBreakTimer={setBreakTimer}
        timerState={timerState}
      />
      <RunTime
        setIsTimerRunning={setIsTimerRunning}
        setTimerState={setTimerState}
        isTimerRunning={isTimerRunning}
        timerState={timerState}
        setElapsedBreak={setElapsedBreak}
        setElapsedFocus={setElapsedFocus}
      />
      <Session
        focusTimer={focusTimer}
        elapsedFocus={elapsedFocus}
        breakTimer={breakTimer}
        elaspedBreak={elaspedBreak}
        timerState={timerState}
      />
    </div>
  );
}

export default Pomodoro;
