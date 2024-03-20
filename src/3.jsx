import React, { useState } from 'react';

function App() {
  const [initialValue, setInitialValue] = useState('');
  const [counter, setCounter] = useState(0);

  const handleInputChange = (e) => {
    setInitialValue(e.target.value);
    setCounter(parseInt(e.target.value) || 0);
  };

  const handleIncrement = () => setCounter(counter + 1);
  const handleDouble = () => setCounter(counter * 2);
  const handleDecrement = () => setCounter(counter - 1);
  const handleHalve = () => setCounter(Math.floor(counter / 2));
  const handleReset = () => setCounter(parseInt(initialValue) || 0);

  return (
    <div>
      <input
        type="number"
        value={initialValue}
        onChange={handleInputChange}
        placeholder="Enter initial value"
      />
      <div>
        <button onClick={handleIncrement}>เพิ่มทีละ 1</button>
        <button onClick={handleDouble}>เพิ่มเท่าตัว</button>
        <button onClick={handleDecrement}>ลดทีละ 1</button>
        <button onClick={handleHalve}>หาร 2</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default App;
