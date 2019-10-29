require("dotenv").config({
	path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const express = require("express");
require("./database");

const routes = require("./routes");

const app = express();
const PORT = 3000;
const HOST = "0.0.0.0";

app.use(express.json());
app.use(routes);

app.listen(PORT, HOST, () => {
	console.log(`Running at ${HOST}:${PORT}`);
});
