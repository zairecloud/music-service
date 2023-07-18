import {IConfig} from "./config.interface";

const config: IConfig = {
    port: parseInt(process.env.PORT as string) || 2000,
    host: "0.0.0.0"
};

export default config;