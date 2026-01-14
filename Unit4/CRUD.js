import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const app = express();
app.use(express.json());

const client = new MongoClient("mongodb://localhost:27017");
await client.connect();

const db = client.db("ALOK");
const users = db.collection("k23pb");

// CREATE
app.post("/users", async (req, res) => {
  const result = await users.insertOne(req.body);
  res.json(result);
});

// READ all
app.get("/users", async (req, res) => {
  const data = await users.find().toArray();
  res.json(data);
});

// READ by id
app.get("/users/:id", async (req, res) => {
  const user = await users.findOne({ _id: new ObjectId(req.params.id) });
  res.json(user);
});

// UPDATE
app.put("/users/:id", async (req, res) => {
  const result = await users.updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json(result);
});

// DELETE
app.delete("/users/:id", async (req, res) => {
  const result = await users.deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result);
});

app.listen(3000, () => console.log("Server running on 3000"));
