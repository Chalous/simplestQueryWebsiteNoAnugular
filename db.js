var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/lalala");

var db = mongoose.connection;
db.on("error", function callback() {
    console.log("Connection failed...");
});

db.once("open", function callback() {
    console.log("Connection opened");
});

var boardSchema = new mongoose.Schema({
    boardInfo: String,
    cpuInfo: String
});

mongoose.model('board', boardSchema);
module.exports = mongoose;