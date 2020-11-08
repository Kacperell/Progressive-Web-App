import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import screens from './screensArray';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {screens.map((screen, i) => (
            <Route key={i} path={screen.path}>
              {screen.header}
              {screen.component}
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
