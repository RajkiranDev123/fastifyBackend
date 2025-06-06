require("dotenv").config();

const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");

// Import my routes
const userRoutes = require("./routes/user.routes");

// Connect to my database
console.log(process.env.DATABASE_URL)
mongoose
    .connect("mongodb+srv://raje:rajdb@rajcluster.ypsslv5.mongodb.net/fastify1?retryWrites=true&w=majority&appName=rajcluster")
    .then(() => console.log("Connected to the database"))
    .catch((e) => console.log("Error connecting to database", e.message));



// start my server
//mount routes
//http://localhost:5000/api/v1/users/
fastify.register(userRoutes, { prefix: "/api/v1/users" });

const start = async () => {
    try {
        console.log(8)

        fastify.listen({ port: process.env.PORT || 5000 });
        fastify.log.info(`Server listening on ${fastify.server.address().port}`);
    } catch (error) {

    }
};

start();