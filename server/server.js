require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const projectList = require('./api/components/projectList');
const sendEmail = require('./controllers/emailController');
const path = require('path');

//Middleware
app.use(express.json());
app.use(bodyParser.json());
//cors is necessary to receive data from frontend, otherwise error.
app.use(cors());

app.get('/api/project_list', (req, res) => {
  res.status(200).send(projectList);
});

app.post('/api/send_email', async (req, res) => {
  //destructure request body from frontend
  const {firstName, lastName, email, subject, message} = req.body;
  try {
    await sendEmail(firstName, lastName, email, subject, message);
    res
      .status(200)
      .json({success: true, message: 'Email sent. Thanks for reaching out!'});
  } catch (err) {
    res.status(400).json(err.message);
  }
});

//Serve static assets if production
const pathName = path.join(__dirname, '/../../server/dist');
app.use(express.static(pathName));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
