import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { updateProfile } from '../actions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 12,
};

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      id: '',
      signupComplete: false,
    };

    this.send = this.send.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  send() {
    const { dispatch } = this.props;
    const id = this.state.id;

    this.setState({
      username: '',
      password: '',
      email: '',
      id: '',
    });

    dispatch(updateProfile(id));
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    let params = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
    }

    axios.post('/signup', params)
    .then((response) => {
      console.log('successful post: ', response);
      this.setState({id: response.data.id});
      this.send();
    }).then((sent) => {
      this.setState({signupComplete: true});
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  render () {
    return (
      !this.state.signupComplete ?
        <div>
          <TextField
            fullWidth
            floatingLabelText="username"
            required
            id="username"
            type="text"
            name="username"
            onChange={this.handleChange}
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
            onChange={this.handleChange}
            floatingLabelFocusStyle={{ color: 'rgb(255, 64, 129)' }}
            underlineFocusStyle={{ borderBottomColor: 'rgb(255, 64, 129)' }}
          />
          <TextField
            fullWidth
            floatingLabelText="email"
            required
            id="email"
            type="text"
            name="email"
            onChange={this.handleChange}
            floatingLabelFocusStyle={{ color: 'rgb(255, 64, 129)' }}
            underlineFocusStyle={{ borderBottomColor: 'rgb(255, 64, 129)' }}
          />
          <RaisedButton label="Save" primary={true} style={style} onClick={this.handleClick}/>
        </div>
      : <Redirect to='NameAndPhone' />
    )
  }
}

const mapStateToProps = state => ({
  id: state.id,
});

export default withRouter(connect(mapStateToProps)(Signup));