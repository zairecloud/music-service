import App from "./app";
import config from "./config/default";

import HealthController from "./controller/health.controller";
import VersionController from "./controller/version.controller";

const app = new App(
	[
		new HealthController(),
		new VersionController()
	],
	config
);

app.listen();