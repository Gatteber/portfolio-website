require('dotenv').config();
const express = require('express');
const app = express();
const projectList = require('./api/components/projectList');

// app.get('/api/v1', (req, res) => {
//   res.send({name: 'up and running!'});
// });

app.get('/api/project_list', (req, res) => {
  res.send(projectList);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
