const messages = require("../models/messageModel");

function get(req, res) {
  res.render("index", { title: "Message Board", messages: messages });
}

module.exports = { get };
