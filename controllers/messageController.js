const db = require("../db/queries");
const { format } = require("date-fns");

async function get(req, res) {
  const id = req.query.id;

  const message = await db.getMessage(id);
  console.log(message);

  res.render("message", {
    title: "Message details",
    message: message[0],
    format: format,
  });
}

module.exports = { get };
