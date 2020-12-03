/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

let connection ;

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  connection = conn;
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  };
  if (key === "w") {
    connection.write('Move: up');
  }
  if (key === "a") {
    connection.write('Move: left');
  }
  if (key === "s") {
    connection.write('Move: down');
  }
  if (key === "d") {
    connection.write('Move: right');
  }
  if (key === "z") {
    connection.write('Say: Hey');
  }
  if (key === "x")
  connection.write('Say: Wow');
};

module.exports = {setupInput}