const db = require("../db/queries");
const { body, validationResult } = require("express-validator");

function get(req, res) {
  res.render("form", { title: "New message" });
}

async function post(req, res) {
  const user = req.body.messageUser;
  const text = req.body.messageText;

  await db.insertMessage(user, text);

  res.redirect("/");
}

module.exports = { get, post };
