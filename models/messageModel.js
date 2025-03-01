const { format } = require("date-fns");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: format(Date(), "dd-MM-yyyy"),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: format(Date(), "dd-MM-yyyy"),
  },
];

module.exports = messages;
