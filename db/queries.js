const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  console.log(rows );
  return rows;
}

async function insertMessage(username, text) {
  await pool.query(
    `INSERT INTO messages (username, text, added) VALUES ($1, $2, to_timestamp(${Date.now()} / 1000.0))`,
    [username, text]
  );
}

module.exports = {
  getAllMessages,
  getMessage,
  insertMessage,
};
