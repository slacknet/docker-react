import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={public/logo512.png} className="App-logo" alt="logo" />
        <p>
        Hello BINK team. This is the automated test where the following tech are involved:
        <hr></hr>
          <li>Github repo, where I pushed all the app code</li>
          <li>Inside there is a docker file to build the app</li>
          <li>Travis CI - there is a RUN script to run the script</li>
          <li>And a deploy instruction in travis.yml to deploy in Elastic Beanstalk</li>
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
