const express = require("express");
const app = express();

app.use(express.json());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send("<h5>This is home page</h5>");
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
