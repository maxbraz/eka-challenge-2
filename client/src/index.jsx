import React from 'react';
import ReactDOM from 'react-dom';
import Form1 from './components/Form1.jsx';
import Form2 from './components/Form2.jsx';
import Form3 from './components/Form3.jsx';
import testData from '../../data.json';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin();

const style = {
  margin: 12,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: testData
    }
  }

  render () {
    return (
      <MuiThemeProvider>
        <h1> EKA Challenge </h1>
        <RaisedButton label="Create Profile" primary={true} style={style} fullWidth />
        <Form1 />
        <Form2 />
        <Form3 />
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));