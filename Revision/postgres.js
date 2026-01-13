import pkg from 'pg';
import { Client } from 'pkg';


const client = new Client({
  user: "postgres",
  host: "postgres",
  database: "college",
  password: "your_password",
  port: "5432",
});

async function run() {
  await client.connect();
  console.log("Client connected");


  await client.query(
    "INSERT INTO student(name , age) values($1, $2)",
    ["Ravi", 23]);
  console.log("Student inserted");
  
  const all = await client.query("SELECT * from students");
  console.log("All students");
  console.log(all.rows);
  
}