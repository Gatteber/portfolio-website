require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const projectList = require('./api/components/projectList');
const sendEmail = require('./controllers/emailController');

//Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get('/api/project_list', (req, res) => {
  res.send(projectList);
});

app.post('/api/send_email', async (req, res) => {
  const {email} = req.body;

  //TODO: fix email controller function with email information. decide how to handle the post request and update in server.js
  //this means you need to pass the params to the function
  //Add axios to frontend and have it make a post request in the handlesubmit function

  try {
    const send_to = '';
    const send_from = '';
    const reply_to = '';
    const subject = '';
    const message = '';

    await sendEmail();
    res
      .status(200)
      .json({success: true, message: 'Email sent. Thanks for reaching out!'});
  } catch (err) {
    res.status(400).json(err.message);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
