const { Router } = require("express");
const formController = require("../controllers/formController");
const formRouter = Router();

formRouter.get("/", formController.get);

formRouter.post("/", formController.post);

module.exports = formRouter;
