import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  if (req.url === "/") {
    res.end(`
      <h1>Home Page</h1>
      <a href="/product">Product</a>
      <a href="/contact">Contact Us</a>
    `);
  } else if (req.url === "/product") {
    createReadStream("prooduct.html", { encoding: "utf-8" }).pipe(res);
  } else if (req.url === "/contact") {
    createReadStream("contactUs.html", { encoding: "utf-8" }).pipe(res);
  } else {
    res.statusCode = 404;
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

server.listen(3000, () => console.log("prg6 is running..."));
