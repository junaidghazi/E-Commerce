const mongoose = require('mongoose')

// MongoDB connection
const dbConnection = async () => {
    await mongoose.connect('mongodb://localhost:27017/ecom', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));
}

module.exports = dbConnection;