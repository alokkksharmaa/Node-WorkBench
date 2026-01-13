const express = require('express');
const ex = express();
ex.use(express.json());

ex.get("/", (req, res) => {
  const user = {
    name: "Alok",
    age: "22",
    section: "K23EC"
  };

  res.json({
    message: `user name is ${user.name}, having age: ${user.age}, of section ${user.section}`,
    user
  });
});

function errhandling(error, req, res, next) {
  res.status(500).send("Try After Sometimes");
}

ex.get("/error", (req, res) => {
  const err = new error();
  next(err);
});
ex.use(errhandling);

ex.listen(4000, () => console.log("Server running on 4000"));
