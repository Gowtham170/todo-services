const mongoose = require('mongoose');

module.exports = () => {

const connectionString = process.env.MONGODB_URL;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    console.log("MongoDB Connected");
});

}