import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import screens from './screensArray';
import Home from './screens/Home/Home';
import Header from './screens/GlobalComponents/Header';
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#E33E7F'
    },
    primary: {
      main: '#1976d2'
    },

  }
});
function App() {


  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Switch>



            {screens.map((screen, i) => (
              <Route key={i} path={screen.path}>
                {screen.header}
                {screen.component}
              </Route>
            ))}

            <Route path='/'>
              <Header backButton={0} title='Home' />
              <Home />
            </Route>
          </Switch>
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;



// npm run-script build
// firebase deploy