const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    surname: { type: String, require: false },
    name: { type: String, require: false },
    patronymic: { type: String, require: false },
    email: { type: String, unique: true, require: true },
    nickname: { type: String, unique: true, require: true },
    avatar: { type: String, require: false },
    dateBirth: { type: Date, require: false },
    password: { type: String, require: true },
    role: { type: String, default: "USER" },
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String },
});

module.exports = model("Users", userSchema);