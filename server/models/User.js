const { Schema, model } = require("mongoose");

const schemaUser = new Schema({
    name: { type: String },
    nickname: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: String, default: "USER" },
});