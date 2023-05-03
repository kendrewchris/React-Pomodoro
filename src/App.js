import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(25 * 60); // set initial time to 25 minutes
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isActive && time > 0) {
      intervalId = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handlePomodoro = () => {
    setTime(25 * 60);
    setIsActive(false);
  };

  const handleShortBreak = () => {
    setTime(5 * 60);
    setIsActive(false);
  };

  const handleLongBreak = () => {
    setTime(15 * 60);
    setIsActive(false);
  };

  return (
    <div className="timer-container">
      <div className="timer">
        <h1>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h1>
        <div className="buttons">
          <button onClick={handlePomodoro}>Pomodoro</button>
          <button onClick={handleShortBreak}>Short Break</button>
          <button onClick={handleLongBreak}>Long Break</button>
        </div>
        <button className="start-button" onClick={() => setIsActive(!isActive)}>
          {isActive ? 'Pause' : 'Start'}
        </button>
      </div>
    </div>
  );
}

export default Timer;





