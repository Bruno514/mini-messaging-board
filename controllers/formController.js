const { format } = require("date-fns");
const messages = require("../models/messageModel");

function get(req, res) {
  res.render("form", { title: "New message" });
}

function post(req, res) {
  const text = req.body.messageText;
  const user = req.body.messageUser;

  messages.push({ text: text, user: user, added: format(Date(), "dd-MM-yyyy")});

  res.redirect("/");
}

module.exports = { get, post };
