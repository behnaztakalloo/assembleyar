import React, { useState } from 'react';
import './CompatibilityChecker.css';

const CompatibilityChecker = () => {
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    const allowedAmount = 1000;
    const numeric = parseInt(amount, 10);

    if (!isNaN(numeric) && numeric >= allowedAmount) {
      setResult('success');
    } else {
      setResult('error');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Compatibility Checker</h1>

      <p className="subtitle">
        Enter an amount and click <strong>CHECK</strong> to see if it is compatible.
      </p>

      <div className="input-row">
        <label htmlFor="amount" className="input-label">
          AMOUNT
        </label>
        <input
          id="amount"
          type="number"
          className="amount-input"
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <button className="check-button" onClick={handleCheck}>
        CHECK
      </button>

      {result === 'success' && (
        <div className="result success">
          ✅ Amount is compatible (greater than or equal to 1000)
        </div>
      )}

      {result === 'error' && (
        <div className="result error">
          ❌ Amount is NOT compatible (must be at least 1000)
        </div>
      )}

      {result && (
        <button className="download-button">
          DOWNLOAD RESULT
        </button>
      )}
    </div>
  );
};

export default CompatibilityChecker;
