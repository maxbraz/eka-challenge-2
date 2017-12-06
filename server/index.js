const Promise = require('bluebird');
const Profile = require('../db/models/profiles.js');
const config = require('config');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './../client/public')));

app.post('/signup', (req, res) => {
  Profile.forge({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  })
  .save()
  .then(result => {
    res.status(201).send(result.omit('password'));
  })
  .catch(err => {
    if (err.constraint === 'users_username_unique') {
      return res.status(403);
    }
    res.status(500).send(err);
  });
});

app.post('/address', (req, res) => {
  const currentProfile = Profile.where({email: req.body.email}).fetch()
    .then((profile) => {
      if (!profile) {
        throw profile;
      }

      profile.forge({
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
      })
      .save()
      .then(result => {
        res.status(201).send(result.omit('password'));
      })
      .catch(err => {
        if (err.constraint === 'users_username_unique') {
          return res.status(403);
        }
        res.status(500).send(err);
      });
    });
});

app.post('/nameAndPhone', (req, res) => {
  const currentProfile = Profile.where({email: req.body.email}).fetch()
    .then((profile) => {
      if (!profile) {
        throw profile;
      }

      profile.forge({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber
      })
      .save()
      .then(result => {
        res.status(201).send(result.omit('password'));
      })
      .catch(err => {
        if (err.constraint === 'users_username_unique') {
          return res.status(403);
        }
        res.status(500).send(err);
      });
    });
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`EKA Challenge listening on ${port}`);
});