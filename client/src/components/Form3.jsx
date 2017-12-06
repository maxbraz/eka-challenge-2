import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      street: '',
      city: '',
      state: '',
      zip: '',
    }
  }

  render() {
    return (
    <div>
      <h4>form 3</h4>
      <RaisedButton label="Next" primary={true} style={style} />
    </div>
    )
  }
}

export default Form3;