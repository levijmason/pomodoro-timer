import React from "react";
import classNames from "../utils/class-names";

function RunTime({setIsTimerRunning, setTimerState, isTimerRunning, timerState, setElapsedBreak, setElapsedFocus}) {
  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
    setTimerState((state) => state === "Stop" ? "Focus" : state);
  }

  function stop() {
    setIsTimerRunning(false);
    setTimerState("Stop");
    setElapsedFocus(0);
    setElapsedBreak(0);
  }

  function disableStopButton() {
    return timerState === "Stop";
  }
 
  return (
    <div className="row">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          <button
            type="button"
            className="btn btn-primary"
            data-testid="play-pause"
            title="Start or pause timer"
            onClick={playPause}
          > 
            <span  
              className={classNames({
                oi: true,
                "oi-media-play": !isTimerRunning,
                "oi-media-pause": isTimerRunning,
              })}
            />
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            title="Stop the session"
            disabled={disableStopButton()}
            onClick={stop}
          >
            <span className="oi oi-media-stop" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default RunTime;