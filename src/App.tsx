import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes";
import Wrapper from './components/Layout/Wrapper';
import Loading from 'components/Loading';

function App() {
  return (
    <Router>
      <div className="app">
      <Wrapper>
        {/* <Suspense fallback={<Loading />}> */}
          <Routes />
        {/* </Suspense> */}
      </Wrapper>
      </div>
    </Router>
  );
}

export default App;
