
require("./database/connect");
const User = require("./database/schema/User");
const Photo = require("./database/schema/Photo");
const viewEngine = require("./viewEngine");

module.exports = {
        User,
        Photo,
        viewEngine
}