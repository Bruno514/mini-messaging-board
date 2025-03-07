require("dotenv").config();

const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const formRouter = require("./routes/formRouter");
const messageRouter = require("./routes/messageRouter");

const app = express();
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.use("/", indexRouter);
app.use("/new", formRouter);
app.use("/message", messageRouter);

app.listen(8080, () => {
  console.log("App started!");
});
