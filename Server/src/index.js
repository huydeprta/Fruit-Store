const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db/connectDB');
const app = express();


// Middleware
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(cors());

// Connect to the database
connectDB();


// Routes
const RouterUser = require('./routers/UserRouter/User')

app.use('/api/v1/user',RouterUser)

// Default route
app.get('/', (req, res) => {
    res.send("Welcome To Api");
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
