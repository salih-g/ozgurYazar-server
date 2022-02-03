require('dotenv').config();

exports.MONGO_URL = process.env.MONGO_URL;
exports.SECRET = process.env.SECRET;
exports.PORT = process.env.PORT || 8081;
