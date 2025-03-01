function get(req, res) {
  const user = req.query.user;
  const text = req.query.text;
  const added = req.query.added;

  res.render("message", {
    title: "Message details",
    message: { user, text, added },
  });
}

module.exports = { get };
