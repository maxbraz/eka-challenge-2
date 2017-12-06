import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 12,
};

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      street: '',
      city: '',
      state: '',
      zip: '',
      profileComplete: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
    }

    axios.post('/signup', params)
    .then((response) => {
      console.log('successful post');
      this.setState({signupComplete: true})
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  render () {
    return (
      !this.state.profileComplete ?
        <div>
          <TextField
            fullWidth
            floatingLabelText="street"
            required
            id="street"
            type="text"
            name="street"
            onChange={this.handleChange}
            floatingLabelFocusStyle={{ color: 'rgb(255, 64, 129)' }}
            underlineFocusStyle={{ borderBottomColor: 'rgb(255, 64, 129)' }}
          />
          <TextField
            fullWidth
            floatingLabelText="city"
            required
            id="city"
            type="text"
            name="city"
            onChange={this.handleChange}
            floatingLabelFocusStyle={{ color: 'rgb(255, 64, 129)' }}
            underlineFocusStyle={{ borderBottomColor: 'rgb(255, 64, 129)' }}
          />
          <TextField
            fullWidth
            floatingLabelText="state"
            required
            id="state"
            type="text"
            name="state"
            onChange={this.handleChange}
            floatingLabelFocusStyle={{ color: 'rgb(255, 64, 129)' }}
            underlineFocusStyle={{ borderBottomColor: 'rgb(255, 64, 129)' }}
          />
          <TextField
            fullWidth
            floatingLabelText="zip"
            required
            id="zip"
            type="text"
            name="zip"
            onChange={this.handleChange}
            floatingLabelFocusStyle={{ color: 'rgb(255, 64, 129)' }}
            underlineFocusStyle={{ borderBottomColor: 'rgb(255, 64, 129)' }}
          />
          <RaisedButton label="Save" primary={true} style={style} onClick={this.handleClick}/>
        </div>
      : <Redirect to='Profile' />
    )
  }
}

export default Address;