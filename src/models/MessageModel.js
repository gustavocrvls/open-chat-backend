const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    content: String,
    userId: String,
    userUsername: String
  },
  { timestamps: { currentTime: () => Math.floor(Date.now()) } }
);

module.exports = mongoose.model("message", MessageSchema, 'message');
