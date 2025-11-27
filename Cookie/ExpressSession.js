import session  from "express-session";

let ex = session;

ex.use(session({
  secret:"mysecret",
  resave: true,
  saveUninitialized:true,
  cookie:{
    maxAge: 100*60
  }
}));

ex.get("/delete ")