import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><iframe src="https://giphy.com/embed/nTN6txKBBwm40" width="480" height="405" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/systems-nTN6txKBBwm40">via GIPHY</a></p></p>
        <p>
        Hello BINK team. This is the automated test where the following tech are involved:
          <li>Github repo, where I oushed all the app code</li>
          <li>A docker file</li>
          <li>Travis CI - there is a RUN script to run the script</li>
          <li>And a deploy instruction in travis.yml to deploy in AWS Beanstalk</li>
        </p>
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
