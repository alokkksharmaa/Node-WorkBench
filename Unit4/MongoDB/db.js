import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const dbName = "ALOK";

const client = new MongoClient(url);

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);

    const student = db.collection("studentdetails");

    const result = await student.insertOne({
      name: "Rahul",
      age: 22,
      rollno: 45
    });

    console.log("Document Inserted:", result.insertedId);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();
