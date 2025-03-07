const db = require("../db/queries");

async function get(req, res) {
  const messages = await db.getAllMessages();
  
  res.render("index", {
    title: "Message Board",
    messages: messages,
  });
}

module.exports = { get };
