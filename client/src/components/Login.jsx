import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 12,
};

const Login = withRouter(({ history }) => (
  <div>
    <TextField
      fullWidth
      floatingLabelText="username"
      required
      id="username"
      type="text"
      name="username"
      floatingLabelFocusStyle={{ color: 'rgb(255, 64, 129)' }}
      underlineFocusStyle={{ borderBottomColor: 'rgb(255, 64, 129)' }}
    />
    <TextField
      fullWidth
      floatingLabelText="password"
      required
      id="password"
      type="text"
      name="password"
      floatingLabelFocusStyle={{ color: 'rgb(255, 64, 129)' }}
      underlineFocusStyle={{ borderBottomColor: 'rgb(255, 64, 129)' }}
    />
    <RaisedButton label="Login" primary={true} style={style} onClick={() => {history.push('landingPage')}}/>
  </div>
));

export default Login;