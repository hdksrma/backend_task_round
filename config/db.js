const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://hardik190103:0ihZ7XCzfY8gTO61@cluster0.fgwpe2a.mongodb.net/backend_task');
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
