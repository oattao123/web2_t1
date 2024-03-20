import React, { useState } from 'react';

function App() {
  const [diceCount, setDiceCount] = useState('');
  const [diceResults, setDiceResults] = useState([]);
  const [total, setTotal] = useState(0);

  const handleInputChange = (e) => {
    setDiceCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = [];
    let sum = 0;
    for (let i = 0; i < diceCount; i++) {
      const roll = Math.floor(Math.random() * 6) + 1;
      results.push(roll);
      sum += roll;
    }
    setDiceResults(results);
    setTotal(sum);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
        รับจํานวนเต็มของลูกเต๋า:
          <input type="number" value={diceCount} onChange={handleInputChange} min="1" />
        </label>
        <button type="submit">submit</button>
      </form>
      {diceResults.length > 0 && (
        <div>
          <ul>
            {diceResults.map((result, index) => (
              <li key={index}>ลูกเต๋าลูกที่ {index + 1} ได้ {result}</li>
            ))}
          </ul>
          <p> ผลรวม ของแต้มลูกเต๋า {total}</p>
        </div>
      )}
    </div>
  );
}

export default App;