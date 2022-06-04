const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //The one that Kyran doesn't keep --ooh and Anshi

const db = {};
db.mongoose = mongoose;
db.user = require("./user.model")
db.role = require("./role.model");
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
