import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/LandingPage.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <LandingPage />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));