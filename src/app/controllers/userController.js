const User = require("../models/User");

const create = async (req, res) => {
	const { name, email, password } = req.body;

	try {
		const userExists = await User.findOne({ where: { email } });
		if (userExists) {
			return res.status(400).send({ message: "Este email já foi cadastrado!" });
		}
		const user = await User.create({ name, email, password });
		return res.status(201).send(user);
	} catch (error) {
		console.log(error);
		return res.status(500).send({
			message: "Ocorreu um erro, contate o administrador do sistema!",
		});
	}
};

module.exports = {
	create,
};
