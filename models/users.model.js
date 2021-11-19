const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  userId: { type: String, required: true },
});
