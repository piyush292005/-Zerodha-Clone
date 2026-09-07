const { model } = require("mongoose");
const { UserSchema } = require("../schemas/UserSchemas");

const UserModel = new model("user", UserSchema);

module.exports = { UserModel };