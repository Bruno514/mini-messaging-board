const messages = require("../models/messageModel");

function get(req, res) {
  res.render("index", { title: "Mini Messaging Board", messages: messages });
}

module.exports = { get };
