const http = require('http');

// Creating a server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Send the response body "Hello, World!"
  res.end('Hello, World!!!!!\n');
});

// Define the port the server will listen on
const PORT = 3001;

// Start the server and listen on the defined port
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});