import cookieParser from "cookie-parser";

const ex = cookieParser();

ex.get("/setcookie", (req, res) => {
  res.cookie();
  res.send("Cookie Set");
});

ex.get("/getck", (req, res) => {
  res.send(`username`);
});

ex.get("/sets", (req, res) => {
  req.session.username = "Alok";
  res.sed("Session Created");
});

ex.use(cookieSession(
  {
    name: "sesssion",
    keys: ["key1", "key2"],
    maxAge: 60 * 100  //1min
  }
))


ex.get("/session", (req, res) => {
  req.session.user = "Alok";
  res.send("Session Set");
})

ex.get("/deletesession", (req, res) => {
  req.session = null
}
)