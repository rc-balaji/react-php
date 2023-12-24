// src/main.jsx
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    axios.post('https://php-server.000.pe/api/add', { num1, num2 })
      .then(response => setResult(response.data.result))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <h1>React PHP Addition</h1>
      <div>
        <label>Number 1:</label>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      </div>
      <div>
        <label>Number 2:</label>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      </div>
      <button onClick={handleAddition}>Add</button>
      <div>
        <label>Result:</label>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default App;
