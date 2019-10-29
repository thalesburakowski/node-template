const User = require("../models/User");

const create = async (req, res) => {
	const { name, email, password } = req.body;

	try {
		const userExists = await User.findAll({ where: { email } });
		if (userExists.length) {
			return res.send({ message: "Este email já foi cadastrado!" });
		}
		const user = await User.create({ name, email, password });
		return res.json(user);
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
