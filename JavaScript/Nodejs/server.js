const express = require("express");
const app = express();
const ConnectDb = require("./connectdb");

app.use(express.json());
const port = process.env.PORT || 5000;
ConnectDb();

app.get("/", (req, res) => {
  res.status(200).send("<h5>This is home page</h5>");
});

app.get("/about", (req, res) => {
  res.status(201).send("<h3>This is about page</h3>");
});

app.post("/", (req, res) => {
  // const name = req.body.name;
  // const address = req.body.address;
  // const number = req.body.number;

  const { name, address, number } = req.body;
  const username = `${name.split(" ")[0]}${number}`;

  const response = {
    success: true,
    welcome_message: `welcome ${name}, your username is ${username}`,
  };
  res.status(205).json(response);
});

app.post("/about", (req, res) => {
  const { dob, username, name } = req.body;
  const registration = `${dob.split("-")[0]}${dob.split("-")[1]}${
    dob.split("-")[2]
  }${username}`;
  const response = {
    success: true,
    welcome_meessage: `welcome to about page ${name}, your registration number is ${registration}`,
  };
  res.status(201).json(response);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
