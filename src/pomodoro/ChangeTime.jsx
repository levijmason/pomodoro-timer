import React from "react";
import {secondsToDuration} from "../utils/duration";


function ChangeTime({ focusTimer, setFocusTimer, breakTimer, setBreakTimer, timerState }) {
  function decreaseFocus() {
    setFocusTimer((focusTimer) => focusTimer - (5 * 60));
  }

  function increaseFocus() {
      setFocusTimer((focusTimer) => focusTimer + (5 * 60));
  }

  function displayFocus() {
    return focusTimer === 3600 ? "60:00" : secondsToDuration(focusTimer);
  }

  function decreaseBreak() {
    setBreakTimer((breakTimer) => breakTimer - 60);
  }
 
  function increaseBreak() {
    setBreakTimer((breakTimer) => breakTimer + 60);
  }

  function displayBreak() {
    return secondsToDuration(breakTimer);
  }
 
  function disableButtons() {
    return timerState !== "Stop";
  }

  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            Focus Duration: { displayFocus() }
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              disabled={disableButtons() || focusTimer <= (5 * 60)}
              onClick={decreaseFocus}
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              disabled={disableButtons() || focusTimer >= (60 * 60)}
              onClick={increaseFocus}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              Break Duration: {displayBreak()}
            </span>
            <div className="input-group-append">
              <button
                type="button" 
                className="btn btn-secondary"
                data-testid="decrease-break"
                disabled={disableButtons() || breakTimer <= 60}
                onClick={decreaseBreak}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                disabled={disableButtons() || breakTimer >= (15 * 60)}
                onClick={increaseBreak}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default ChangeTime;