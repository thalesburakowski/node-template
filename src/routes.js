const routes = require("express").Router();
const userController = require("./app/controllers/userController");

routes.post("/users", userController.create);

module.exports = routes;
