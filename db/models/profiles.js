const db = require('../');

const Profile = db.Model.extend({
  tableName: 'profiles',
});

module.exports = db.model('Profile', Profile);
