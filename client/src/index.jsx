import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import Signup from './components/Signup.jsx';
import Address from './components/Address.jsx';
import NameAndPhone from './components/NameAndPhone.jsx';
import Profile from './components/Profile.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store/index.js';

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
  <Router>
    <div>
      <LandingPage />
      <Route path='/signup' component={Signup} />
      <Route path='/address' component={Address} />
      <Route path='/nameAndPhone' component={NameAndPhone} />
      <Route path='/profile' component={Profile} />
    </div>
  </Router>
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));