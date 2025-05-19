import express from "express";

const app = express();

// your routes will go here...

app.listen(8080, function () {
  console.log("Server is listening on port 8080...");
});

app.get("/messages", function (request, response) {
  response.json({ message: "Hello, World!" });
});
