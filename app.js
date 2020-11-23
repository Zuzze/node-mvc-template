// import global packages with require()
const http = require("http");

// BARE NODE TEMPLATE
// This sample does not include express to understand better what is actually happening behind the scenes
// this is not for production

// ========================= CREATING A SERVER ==========================
// createServer callback called by nodejs everytime request reaches server
// returns server, needed to do only once
// nodejs will listen "event loop" as long as there are event listeners registered (and they are not unregistered), e.g. createServer
// you can unregister with process.exit() inside createServer
const server = http.createServer((req, res) => {
  console.log(req.url);

  // check url
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Barebone node example</title></head>");
    res.write("<body>");
    res.write("<h1>Home</h1>");
    res.write("<form method='POST' action='/create-user'>");
    res.write(
      "<input type='text' name='username'/><button type='submit'>Send</button>"
    );
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Barebone node example</title></head>");
    res.write("<body>");
    res.write("<h1>Users</h1>");
    res.write("<ul><li>User 1</li><li>User 2</li></ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/create-user") {
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });
    req.on("end", () => {
      // translate buffered data into string
      const parsedBody = Buffer.concat(body).toString();
      // this will return form input in format username=your-name
      console.log(parsedBody.split("=")[1]);
      res.statusCode = 302;
      // redirect
      res.setHeader("Location", "/");
      res.end();
    });
  } else {
    console.error("this route is unknown");
    // send 404 page not found response
  }
});

server.listen(3000);
