const Profile = require('../../models/profiles.js');
const knex = require('knex');

const profiles = [
  {
    username: 'johnlennon',
    password: 'yoko',
    email: 'john@lennon.com',
    firstName: 'John',
    lastName: 'Lennon',
    phoneNumber: '415-969-1540',
    street: '1 Abbey Road',
    city: 'Liverpool',
    state: 'UK',
    zip: '54433',
  },
  {
    username: 'treyanastasio',
    password: 'gamehenge4life',
    email: 'trey@phish.com',
    firstName: 'Trey',
    lastName: 'Anastasio',
    phoneNumber: '802-444-1234',
    street: '1 Wilson Road',
    city: 'Burlington',
    state: 'VT',
    zip: '004200',
  },
  {
    username: 'Jake Cinninger',
    password: 'alwaysmeltingface',
    email: 'jake@cinninger.com',
    firstName: 'Jake',
    lastName: 'Cinninger',
    phoneNumber: '505-555-5555',
    street: '1 Heady Way',
    city: 'Chicago',
    state: 'IL',
    zip: '66332',
  },
  {
    username: 'Miles Davis',
    password: 'coolcat',
    email: 'miles@davis.com',
    firstName: 'Miles',
    lastName: 'Davis',
    phoneNumber: '212-333-3333',
    street: '1 Houston St',
    city: 'New York',
    state: 'NY',
    zip: '12345',
  },
  {
    username: 'Herbie Hancock',
    password: 'fatalbert',
    email: 'herbie@hancock.com',
    firstName: 'Herbie',
    lastName: 'Hancock',
    phoneNumber: '805-468-6666',
    street: '1 Funk Plaza',
    city: 'New Orleans',
    state: 'LA',
    zip: '33664',
  },
  {
    username: 'Stewart Copeland',
    password: 'keepingtime',
    email: 'stewart@copeland.com',
    firstName: 'Stewart',
    lastName: 'Copeland',
    phoneNumber: '666-444-1234',
    street: '1 Oysterhead Ave',
    city: 'London',
    state: 'UK',
    zip: '66998',
  },
];

module.exports = () => Promise.all(profiles.map(profile => Profile.forge(profile).save()));
