const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', (data) => {
    console.log('successfully connected to the game server');
    conn.write('Name: AMM');
  }) 
  

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  return conn;
}

module.exports = {connect};