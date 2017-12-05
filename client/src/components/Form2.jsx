import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const Form2 = () => (
  <div>
    <h3>form 2</h3>
    <RaisedButton label="Next" primary={true} style={style} />
  </div>
)

export default Form2;
