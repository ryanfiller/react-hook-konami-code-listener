import React from 'react';
import logo from './logo.svg';
import './App.css';

import useKonamiListener from './konami-hook';

const App = (props) => {

  const match = useKonamiListener();

  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Enter the <a
            className="App-link"
            href="https://en.wikipedia.org/wiki/Konami_Code"
            target="_blank"
            rel="noopener noreferrer"
          >
            Konami Code
          </a>
        </p>
        <p>
          <kbd>↑</kbd>
          <kbd>↑</kbd>
          <kbd>↓</kbd>
          <kbd>↓</kbd>
          <kbd>←</kbd>
          <kbd>→</kbd>
          <kbd>←</kbd>
          <kbd>→</kbd>
          <kbd>B</kbd>
          <kbd>A</kbd>
        </p>
      </header>

      {match === true ? <div className="popup"><h2>You did it!</h2><p>Refresh the page.</p></div> : null}
    </div>
  )
}

export default App;
