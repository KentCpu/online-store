const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: { type: String, require: false },
    email: { type: String, unique: true, require: true },
    nickname: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    role: { type: String, default: "USER" },
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String },
});

module.exports = model("Users", userSchema);