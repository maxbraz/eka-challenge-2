import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = () => (
  <Router>
    <MuiThemeProvider>
      <LandingPage />
    </MuiThemeProvider>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));