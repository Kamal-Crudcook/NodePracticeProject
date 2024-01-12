//Http module -> Allows us to create a web server with node.js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Heelo world from node.js"); //Writing the response body
    res.end(); //Sends the response back to the client
  }else{
    res.write("Using some other domain")
    res.end()
  }
});

server.listen("3000"); //Which port to listen to, or where we will get this response
