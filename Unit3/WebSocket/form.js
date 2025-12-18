import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const app = express();
const server = createServer(app);

// recreate __dirname for ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));

// serve static files from public/
app.use(express.static(join(__dirname, 'public')));

// optional explicit route (not required, but clear)
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
