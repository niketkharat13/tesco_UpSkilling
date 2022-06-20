import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [bgColor, setBgColo] = useState('red');
  const [isDisabled, setIsDisabled] = useState(false)
  return (
    <>
      <button disabled={isDisabled} style={{backgroundColor: !isDisabled ? bgColor: 'grey'}} onClick={() => setBgColo(c => c === "red" ? "blue" : "red")}>change color to {bgColor === "red" ? "blue": "red"}</button>
      <input type={'checkbox'} onChange={() => setIsDisabled(d => !d)} />
    </>
  );
}

export default App;
