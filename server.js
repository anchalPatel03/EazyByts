const express = require('express');
const app = express();
const port = 5000;

// Step 1: Middleware to parse JSON data
app.use(express.json()); // This must be before your routes

// Dummy data (you can replace this with a database later)
const items = [
  { id: 1, name: 'Item 1', description: 'Description of Item 1' },
  { id: 2, name: 'Item 2', description: 'Description of Item 2' }
];

// Step 2: GET request for fetching all items
app.get('/api/items', (req, res) => {
  res.json(items); // Send the items as a response
});

// Step 3: POST request for creating a new item
app.post('/api/items', (req, res) => {
  const newItem = req.body; // Get data sent in the request body
  console.log(newItem); // Log the received body to see it
  
  if (newItem && newItem.id && newItem.name && newItem.description) {
    items.push(newItem); // Add it to the items array
    res.status(201).json(newItem); // Send back the newly created item
  } else {
    res.status(400).json({ error: 'Invalid item data' });
  }
});

// Step 4: Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
