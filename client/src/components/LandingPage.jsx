import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  button: {
    margin: 12,
  },
  paper: {
    height: '645px',
    textAlign: 'center',
    display: 'inline-block'
  }
};

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wasClicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({wasClicked: true});
  }

  render () {
    return (
      !this.state.wasClicked ?
        <div>
          <h1> Welcome to EKA </h1>
          <RaisedButton label="Create Your Profile" primary={true} style={style.button} onClick={this.handleClick} />
        </div>
      : <Redirect to='Signup' />
    )
  }
}

export default LandingPage;