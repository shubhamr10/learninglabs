const mongoose = require("mongoose");

const connectionString = process.env.MONGO_URI;
(async () => {
    const conn = await mongoose.connect(connectionString);

    conn.connection.on("connected", () => {
        console.log("Connected to MongoDB");
    });
})();
