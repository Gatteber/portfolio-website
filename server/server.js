require('dotenv').config();
const express = require('express');
const app = express();

app.get('/api/v1', (req, res) => {
  res.send({name: 'up and running!'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
