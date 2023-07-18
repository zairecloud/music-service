import ResponseDTO from "./response.dto";

export default class VersionDTO extends ResponseDTO {
    
    version: string;

    constructor() {
        const version = process.env.npm_package_version as string;
        super(`Current music service version: ${version}`);
        this.version = version;
    }
}