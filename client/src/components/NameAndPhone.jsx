import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 12,
};

class NameAndPhone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      nameAndPhoneComplete: false,
    };

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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
    }

    axios.post('/nameAndPhone', params)
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
      !this.state.nameAndPhoneComplete ?
        <div>
          <TextField
            fullWidth
            floatingLabelText="firstName"
            required
            id="firstName"
            type="text"
            name="firstName"
            onChange={this.handleChange}
            floatingLabelFocusStyle={{ color: 'rgb(255, 64, 129)' }}
            underlineFocusStyle={{ borderBottomColor: 'rgb(255, 64, 129)' }}
          />
          <TextField
            fullWidth
            floatingLabelText="lastName"
            required
            id="lastName"
            type="text"
            name="lastName"
            onChange={this.handleChange}
            floatingLabelFocusStyle={{ color: 'rgb(255, 64, 129)' }}
            underlineFocusStyle={{ borderBottomColor: 'rgb(255, 64, 129)' }}
          />
          <TextField
            fullWidth
            floatingLabelText="phoneNumber"
            required
            id="phoneNumber"
            type="text"
            name="phoneNumber"
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

export default NameAndPhone;
