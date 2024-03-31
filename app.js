const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
const {handleAdminSignup} = require('./router')
const port = 8900;
const {user}=require('./router')
const {admin}=require('./router')

app.use(cors());
app.use(bodyParser.json());
// GET request
app.get('/', (req,res) => res.json({message:"express backend is setup and running successfully"}))
app.post('/admin', handleAdminSignup);
app.post('/Query-data', user );
app.post('/admin-data',admin)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
