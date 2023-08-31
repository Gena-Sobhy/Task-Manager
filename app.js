const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.static("./public"))
app.use(express.json());

// routes 
app.use("/api/v1/tasks", tasks);

const PORT = 5000 || PORT;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`server listening on localhost:${PORT}/api/v1/tasks`));
    } catch (error) {
        console.log(error)
    }
}
start();