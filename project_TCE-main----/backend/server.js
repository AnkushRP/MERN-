// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// backend/server.js
app.get('/api/menu', (req, res) => {
  res.json([
    { id: 1, name: 'Paneer Butter Masala', price: 200 },
    { id: 2, name: 'Dosa', price: 100 },
    { id: 3, name: 'Idli', price: 50 },
  ]);
});


const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
