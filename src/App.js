import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddUserForm from './components/puppeteer/AddUserForm';
import { Counter } from './components/enzyme-counterApp/Counter';

function App() {
  return (
    <div className="App">
      <AddUserForm />
      {/* <Counter /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
