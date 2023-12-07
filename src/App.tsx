// App.tsx
// import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirstPage from './pages/FirstPage/FirstPage';
import SecondPage from './pages/SecondPage/SecondPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FirstPage} />
        <Route path="/second" component={SecondPage} />
      </Switch>
    </Router>
  );
}

export default App;
