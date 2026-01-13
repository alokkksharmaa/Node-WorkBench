import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/alok")
  .then(() => console.log("MongoDb Connected"))
  .catch(() => console.log("Error connecting Db"));

const BookSchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    unique: true,
    required: true
  },
  serialNumber: {
    type: Number,
    required: true,
    unique: true
  },
});

// create model 
const Library = mongoose.model('Library', BookSchema);

// insert books
async function insertBooks() {
  try {
    await Library.insertMany([
      {bookname: "ZeroToOne", author:"xyz", serialNumber: 2134},
      {bookname: "AtomicHabits", author:"abc", serialNumber: 2972},
      {bookname: "Rich" , author: "sdj", serialNumber: 29387},
    ]);
    console.log("Books Inserted");
  }
  catch(err){
    console.log("Error inserting Boooks", err);
  }
  finally{
    mongoose.connection.close();
  }
}

insertBooks();