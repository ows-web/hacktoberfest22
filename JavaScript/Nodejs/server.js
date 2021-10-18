const express = require("express");
const app = express();

app.use(express.json());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send("<h5>This is home page</h5>");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
