import express from "express";

const app = express();
const port: number = parseInt(process.env.PORT) || 2000;

app.get("/health", (req, res) => {
	console.log("Health check requested");
	res.json({
		status: "Healthy"
	});
});

app.get("/version", (req, res) => {
	console.log("Version requested");
	res.json({
		version: process.env.npm_package_version
	});
});

app.listen(port, () => {
	return console.log(`Running on port ${port}`);
});