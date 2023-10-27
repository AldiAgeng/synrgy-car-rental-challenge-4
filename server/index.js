const http = require("http");
const { PORT = 3000 } = process.env;
const hostName = "localhost";

const fs = require("fs");
const url = require("url");
const path = require("path");

// mime types
const mime = require("mime-types");

const PUBLIC_DIRECTORY = path.join(__dirname, "../public/");

const onRequest = (req, res) => {
  let parsedURL = url.parse(req.url, true);

  let path = parsedURL.path.replace(/^\/+|\/+$/g, "");

  switch (path) {
    case "":
      path = "index.html";
      break;
    case "car":
      path = "car.html";
      break;
  }

  console.log(`Requested path ${path} `);

  let file = PUBLIC_DIRECTORY + path;
  fs.readFile(file, function (err, content) {
    if (err) {
      console.log(`File Not Found ${file}`);
      res.writeHead(404);
      res.end();
    } else {
      // content response
      console.log(`Returning ${path}`);
      res.setHeader("X-Content-Type-Options", "nosniff");
      let type = mime.lookup(path);
      res.writeHead(200, { "Content-type": type });
      res.end(content);
    }
  });
};

http.createServer(onRequest).listen(PORT, () => {
  console.log(`server sudah berjalan, silahkan buka ${hostName}:${PORT}`);
});
