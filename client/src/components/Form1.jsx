import React from 'react';
import ReactDOM from 'react-dom';
import Form2 from './Form2.jsx';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const Form1 = () => (
  <div>
    <h2>Form 1</h2>
    <RaisedButton label="Next" primary={true} style={style} />
  </div>
)

export default Form1;