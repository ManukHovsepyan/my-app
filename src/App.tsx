import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes";
import Wrapper from './components/Layout/Wrapper';

function App() {
  return (
    <Router>
      <div className="app">
      <Wrapper>
          <Routes />
      </Wrapper>
      </div>
    </Router>
  );
}

export default App;
