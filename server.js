const express = require("express");
const app = express();

// middleware
app.use(express.json(), express.urlencoded({ extended: true }));

// load .env vars
require("dotenv").config();
const port = process.env.PORT;

// Require / import the file
// this file doesn't need to export anything
require("./server/config/mongoose.config");

// require the routes here to run
require("./server/routes/jokes.routes")(app);

// require('./server/routes/product.routes')(app);
app.listen(port, () => console.log(`Listening on port: ${port}`));
