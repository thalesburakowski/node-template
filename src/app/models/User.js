const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

class User extends Model {
	static init(sequelize) {
		super.init(
			{
				name: DataTypes.STRING,
				email: DataTypes.STRING,
				password: DataTypes.STRING,
			},
			{
				sequelize,
				hooks: {
					beforeSave: async user => {
						user.password = await bcrypt.hash(user.password, 8);
					},
				},
			}
		);
	}
}

module.exports = User;
