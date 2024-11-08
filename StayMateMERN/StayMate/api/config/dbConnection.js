const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionString = "mongodb://127.0.0.1:27017"; // Replace with your actual connection string
    const connect = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    const host = connect.connection.host;
    const name = connect.connection.name;
    console.log("Database connected:", host, name);
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
