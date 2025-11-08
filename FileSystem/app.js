const fs = require("fs");

const user = {
  name: "Shubham",
  Class: "K23EC",
  Registration: "12317981"
};

fs.writeFile("data.json", JSON.stringify(user, null, 2), "utf-8", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Data Added Successfully");
  }
});