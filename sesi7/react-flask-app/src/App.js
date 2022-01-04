import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [placeholder, setPlaceholder] = useState('Hi')
  const [currentTime, setCurrentTime] = useState(0)

  function synchronizeTime () {
    fetch('/time')
    .then((res) => res.json())
    .then((data) => {
      setCurrentTime(data.time)
    }, 1000)
  }

  useEffect(() => {
    fetch('/hello')
      .then(res => res.json())
      .then(data => {
        setPlaceholder(data.result)
      })

      const timeInterval = setInterval(synchronizeTime, 1000)
      return() => {
        clearInterval(timeInterval)
      }
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Flask says {placeholder}</p>
        <p>The current time is {currentTime}</p>
        <p>The current time is <code>{currentTime && new Date(currentTime * 1000).toString()}</code></p>
        <p>The current time is <code>{currentTime && new Date(currentTime * 1000).toString()}</code></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;