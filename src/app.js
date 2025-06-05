const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");
require("dotenv").config();


// Import my routes
const userRoutes = require("./routes/user.routes");


// Connect to my database




// start my server