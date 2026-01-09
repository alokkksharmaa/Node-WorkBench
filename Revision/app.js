import express from 'express';

const app = express();
app.use(express.json());

let books = [
  { id: 1, title: 'Book One' },
  { id: 2, title: 'Book Two' }
];
let nextId = 3;


app.get("/", (req, res)  => {
  res.send("Home");
})

// Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Get book by ID
app.get('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
});

// Create a book
app.post('/books', (req, res) => {
  const { title } = req.body;

  if (!title?.trim()) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const book = { id: nextId++, title: title.trim() };
  books.push(book);

  res.status(201).json(book);
});

// Delete a book
app.delete('/books/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) return res.status(404).json({ error: 'Book not found' });

  books.splice(index, 1);
  res.json({ message: 'Book deleted' });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
