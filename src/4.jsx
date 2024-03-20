import React, { useState, useEffect } from 'react';

function App() {
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerActive && timeInSeconds > 0) {
      interval = setInterval(() => {
        setTimeInSeconds((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timerActive && timeInSeconds === 0) {
      clearInterval(interval);
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeInSeconds]);

  const handleMinutesChange = (e) => {
    setMinutes(e.target.value);
  };

  const handleSecondsChange = (e) => {
    setSeconds(e.target.value);
  };

  const handleStart = () => {
    setTimeInSeconds(parseInt(minutes) * 60 + parseInt(seconds));
    setTimerActive(true);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Minutes"
        value={minutes}
        onChange={handleMinutesChange}
      />
      <input
        type="number"
        placeholder="Seconds"
        value={seconds}
        onChange={handleSecondsChange}
      />
      <button onClick={handleStart}>Start</button>
      {timerActive ? (
        timeInSeconds > 0 ? (
          <p>
            Time left: {Math.floor(timeInSeconds / 60)}:{String(timeInSeconds % 60).padStart(2, '0')}
          </p>
        ) : (
          <p>Time out</p>
        )
      ) : timeInSeconds === 0 && !timerActive ? (
        <p>Time</p>
      ) : null}
    </div>
  );
}

export default App;
