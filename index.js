const http = require("http");
const fs = require("fs").promises;
const statik = require("node-static");

const host = "localhost";
const port = 8000;

const file = new statik.Server("./public");

http
  .createServer((req, res) => {
    req
      .addListener("end", () => {
        file.serve(req, res);
      })
      .resume();
  })
  .listen(port);

// let indexFile;

// const requestListener = function (req, res) {
//   res.setHeader("Content-Type", "text/html");
//   res.writeHead(200);
//   res.end(indexFile);
// };

// const server = http.createServer(requestListener);

// fs.readFile(__dirname + "/src/index.html")
//   .then((content) => {
//     indexFile = content;
//     server.listen(port, host, () => {
//       console.log(`Server is running on http://${host}:${port}`);
//     });
//   })
//   .catch((err) => {
//     indexFile = err;
//   });
