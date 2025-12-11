const express = require('express');

app.get("/users",(req, res) => res.send("List of Users"));
app.post("/users", (req,res) => res.send("User added"));
app.put("/users/id", (req,res) => res.send("Updated user ${req.params.id"));