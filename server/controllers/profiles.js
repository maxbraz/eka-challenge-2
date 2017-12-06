const Promise = require('bluebird');
const models = require('../../db/models');
const config = require('config');
const db = require('../../db');
const axios = require('axios');

module.exports.createProfile = (req, res) => {
  models.Profile.forge({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
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
};