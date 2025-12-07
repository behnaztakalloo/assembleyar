import React , { useState } from 'react';
import CompatibilityChecker from './components/CompatibilityChecker';

function App() {
    const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const defaultValue = "50000000"; // مقدار پیش‌فرض فقط برای مقایسه

  const handleCheck = () => {
    if (inputValue.trim() === defaultValue) {
      setResult(":white_check_mark: مقدار درست است");
    } else {
      setResult(":x: مقدار اشتباه است");
    }
  };
  return (
    <div className="App">
       <div className="App">
      <div className="white-box">
        <input 
          type="text" 
          placeholder=" "  // فقط متن راهنما
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="white-input"
        />
        <button onClick={handleCheck} className="check-button">
          Check Compatibility
        </button>
        <p className="check-result">{result}</p>
      </div>
      </div>
      <header className="header">
        <img src="/user.webp" alt="logo" className="user"/>
        <div className="text">
          <span>LOGIN</span>
          <span>Registration</span>
          </div>
          <div className="profile-pic">
          <img src="/assemble.jpg" alt="profile"/>
          </div>
      </header>
      <div className="new-text">
        <p>
          𝔞𝔰𝔰𝔢𝔪𝔟𝔩𝔢𝔶𝔞𝔯
        </p>
      </div>
      <div className="new-text1">
        <p>
          CASE BENCHMARK
        </p>
      </div>
      <div className="new-text2">
        <p>
          LAPTOP BENCHMARK
        </p>
      </div>
      <div className="new-text3">
        <p>
          CPU BENCHMARK
        </p>
      </div>
      <div className="new-text4">
        <p>
          GPU BENCHMARK
        </p>
      </div>
      <div className="new-text5">
        <p>
          TEST MY PC
        </p>
      </div>
      <hr className="blue-line"/>
      <div className="picture1>">
        <img src="/icon2.png" alt="" className="picture1"/>
      </div>
      <div className="pic3">
        <img src="/like.png" alt="" className="pic3"/>
      </div>
      <div className="pic4">
        <img src="/dislike.png" alt="" className="pic4"/>
      </div>
      <div className="text6">
        <p>
          YOUR RESULT IS REDY TO USE.
        </p>
      </div>
      <div className="text7">
        <p>
          Your amount is less than the allowed list.
        </p>
      </div>
      <div className="text8">
        <p>
          تمامی حقوق مادی این وبسایت متعلق به وبسایت اسمبل یار می باشد
        </p>
      </div>
       <div className="text9">
        <p>
          Your payble amount?
        </p>
      </div>
      <button className="download">
        DOWNLOAD RESULT
      </button>
    </div>
  );
}

export default App;