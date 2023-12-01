import express from "express";
const app = express();
const port = 7100;

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(port, () => {
  console.log("Server is Running on port http://localhost:" + port);
});
