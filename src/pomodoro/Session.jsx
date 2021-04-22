import React from "react";
import {secondsToDuration} from "../utils/duration";

function Session({focusTimer, elapsedFocus, breakTimer, elaspedBreak, timerState}) {
  if (timerState === "Stop") {
    return null;
  }

  function displayFocusTimer() {
    return focusTimer === 3600 ? "60:00" : secondsToDuration(focusTimer);
  }

  function displayElapsedFocus() {
    const timeRemaining = focusTimer - elapsedFocus;
    return timeRemaining === 3600 ? "60:00" : secondsToDuration(timeRemaining);
  }

  function displayBreakTimer() { 
    return secondsToDuration(breakTimer);
  }

  function displayElapsedBreak() {
    const timeRemaining = breakTimer - elaspedBreak;
    return secondsToDuration(timeRemaining);
  } 

  function displaySessionTitle() {
    if (timerState === "Focus") {
      return `Focusing for ${displayFocusTimer()} minutes`;
    } else if (timerState === "Break") {
      return `On Break for ${displayBreakTimer()} minutes`;
    }
  } 

  function displayRemainingTime() {
    if (timerState === "Focus") {
      return `${displayElapsedFocus()} remaining`;
    } else if (timerState === "Break") {
      return `${displayElapsedBreak()} remaining`;
    }
  }

  function loadingBarWidth() {
    let timeRemaining = 0;
    if (timerState === "Focus") {
      timeRemaining = ((elapsedFocus / focusTimer) * 100);
    } else if (timerState === "Break") {
      timeRemaining = ((elaspedBreak / breakTimer) * 100);
    }

    return timeRemaining;
  }


  return (
    <div>
      <div className="row mb-2">
        <div className="col">
          <h2 data-testid="session-title">{displaySessionTitle()}</h2>
          <p className="lead" data-testid="session-sub-title">
            {displayRemainingTime()}
          </p>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={loadingBarWidth()} 
              style={{ width: `${loadingBarWidth()}%` }} 
            />
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Session;
