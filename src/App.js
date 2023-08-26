import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [cTime, setCtime] = useState(new Date().toLocaleTimeString());
  const [cDate, setcDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setCtime(currentTime);
    }, 1000);
  }, []);

  const date = new Date().toLocaleDateString();

  console.log(date);

  return (
    <>
      <h1 style={{ fontSize: '230px', color: '#815854', textAlign: 'center', marginTop: '30vh' }}>{cTime}</h1>
      <h1 style={{ fontSize: '100px', color: '#815854', textAlign: 'center' }}>{cDate}</h1>
    </>
  );
}

export default App;
