import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Hello BINK team. This is the automated test where the following tech are involved:
          <li>Github repo, where I oushed all the app code</li>
          <li>A docker file</li>
          <li>Travis CI - there is a RUN script to run the script</li>
          <li>And a deploy instruction in travis.yml to deploy in AWS Beanstalk</li>
        </p>
        <a
          className="App-link"
          href="https://www.gchq.gov.uk/section/careers/working-for-gchq"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn About this
        </a>
      </header>
    </div>
  );
}

export default App;
