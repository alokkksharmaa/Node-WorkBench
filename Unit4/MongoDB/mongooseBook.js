import mongoose from "mongoose";

// 1. Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/bookDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// 2. Create Book Schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  tags: [String]
});

// 3. Create Book Model
const Book = mongoose.model("Book", bookSchema);

// 4. Insert one book
async function insertBook() {
  const newBook = new Book({
    title: "Atomic Habits",
    author: "James Clear",
    price: 399,
    tags: ["self-help", "habits", "growth"]
  });

  await newBook.save();
  console.log("Book inserted");
}

// 5. Fetch and display all books
async function fetchBooks() {
  const books = await Book.find();
  console.log("All Books:");
  console.log(books);
}

// Run functions
async function run() {
  await insertBook();
  await fetchBooks();
  mongoose.connection.close();
}

run();
