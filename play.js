const { setupInput } = require('./input');

// play.js
const { connect } = require('./client');
console.log('Connecting ...');
connect();

setupInput();