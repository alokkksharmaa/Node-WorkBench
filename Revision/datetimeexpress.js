import express from 'express';
const app = express();

// Middleware WITHOUT separate function
app.use((req, res, next) => {
  // const method = req.method;
  // const url = req.originalUrl;
  const timestamp = new Date().toLocaleString();
  // console.log(`[${timestamp}] ${method} ${url}`);
  console.log(`[${timestamp}]`);
  next();
});

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});