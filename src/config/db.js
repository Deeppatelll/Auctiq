const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected on port ${conn.connection.port}`);
  } catch (error) {
    console.error("DB connection error:", error.message);
    process.exit(1); // stop server if DB fails
  }
};

module.exports = connectDB;