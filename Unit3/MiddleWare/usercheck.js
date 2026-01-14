function auth(req, res, next) {
  if(!req.user) return res.status(401).json({ error: "Unauthorized" });
  next();
};

function roleccheck(req, res, next){
  if(req.user !== "super-admin"){
    return res.status(401).json({ error: "AAccess Denied" });
  }
  next();
}

function log(req, res, next) {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
}

app.get(
  "/admin",
  auth,
  roleCheck,
  log,
  (req, res) => {
    res.json({ message: "Welcome, Super Admin" });
  }
);