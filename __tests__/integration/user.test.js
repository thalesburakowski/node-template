const request = require("supertest");

const app = require("../../src/app");
const truncate = require("../utils/truncate");
const factory = require("../factories");

describe("User", () => {
	beforeEach(async () => {
		await truncate();
	});

	it("should create user", async () => {
		const user = await factory.build("User");

		const response = await request(app)
			.post("/user")
			.send({
				name: user.name,
				email: user.email,
				password: user.password,
			});

		expect(response.status).toBe(201);
	});

	it("should not create user", async () => {
		const user = await factory.create("User", {
			name: "thales",
			email: "thalesburakowski@gmail.com",
			password: "123456",
		});

		const response = await request(app)
			.post("/user")
			.send({
				name: user.name,
				email: user.email,
				password: user.password,
			});

		expect(response.status).toBe(400);
	});

	it("should not create user and return 500", async () => {
		const user = await factory.build("User", {
			name: "thales",
			email: null,
			password: "123456",
		});

		const response = await request(app)
			.post("/user")
			.send({
				name: user.name,
				email: user.email,
				password: user.password,
			});

		expect(response.status).toBe(500);
	});
});
