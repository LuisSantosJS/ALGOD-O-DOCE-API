const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const URI = 'mongodb+srv://admin:algodao@123456@cluster0.jzclr.mongodb.net/test?retryWrites=true&w=majority';

const connectDB = async () => {
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'website' });
    console.log('db connected')


}

module.exports = connectDB;