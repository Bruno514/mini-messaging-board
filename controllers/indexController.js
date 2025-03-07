const db = require("../db/queries");
const { format } = require("date-fns");

async function get(req, res) {
  const messages = await db.getAllMessages();

  res.render("index", {
    title: "Message Board",
    messages: messages,
    format: format,
  });
}

module.exports = { get };
