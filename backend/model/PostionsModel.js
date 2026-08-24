const {model} = require("mongoose");
const {PositionsSchema} = require("../schemas/PostionsSchema");
const PostionsModel = new model("positions" , PositionsSchema);
module.exports = {PostionsModel};