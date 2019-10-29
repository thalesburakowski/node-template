const bcrypt = require("bcryptjs");
const User = require("../../src/app/models/User");
const truncate = require("../utils/truncate");

describe("User", () => {
	beforeEach(async () => {
		await truncate();
	});

	it("shold encrypt user password", async () => {
		const user = await User.create({
			name: "Thales",
			email: "thalesburakowski@gmail.com",
			password: "123123",
		});

		const compareHash = await bcrypt.compareSync("123123", user.password);
		expect(compareHash).toBe(true);
	});
});
