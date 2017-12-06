import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom'
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
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

const Profile = withRouter(({ history }) => (
  <Card>
    <CardHeader
      title="Your Profile is Complete!"
    />
    <CardMedia>
      <img src="http://i0.kym-cdn.com/photos/images/facebook/000/011/296/success_baby.jpg" />
    </CardMedia>
    <CardActions>
      <RaisedButton label="Home" primary={true} style={style.button} onClick={() => {history.push('landingPage')}} />
    </CardActions>
  </Card>
));

export default Profile;