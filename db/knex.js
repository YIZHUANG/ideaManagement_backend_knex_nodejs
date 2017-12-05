var enviroment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[enviroment];
module.exports = require('knex')(config);
