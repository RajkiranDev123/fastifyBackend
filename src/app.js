const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");
require("dotenv").config();


// Import my routes
const userRoutes = require("./routes/user.routes");




// Connect to my database


// start my server
//mount routes
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