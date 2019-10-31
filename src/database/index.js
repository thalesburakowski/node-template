const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const connection = new Sequelize(dbConfig);

initAllModels();

module.exports = connection;

function initAllModels() {
	// Equivaliente a importar e inicializar individualmente todos os models:
	// const User = require("../app/models/User");
	// User.init(connection);
	const normalizedPath = require("path").resolve("src", "app", "models");
	require("fs")
		.readdirSync(normalizedPath)
		.forEach(file => {
			const model = require(`${normalizedPath}/${file}`);
			model.init(connection);
		});
}
