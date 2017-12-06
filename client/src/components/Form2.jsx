import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
    };
  }

  render () {
    return (
      <div>
        <RaisedButton label="Next" primary={true} style={style} />
      </div>
    )
  }
}

export default Form2;
