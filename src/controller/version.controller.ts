import * as express from "express";
import IController from "./controller.interface";
import VersionDTO from "../dto/version.dto";

export default class VersionController implements IController {

    public path = "/version";
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes(): void {
        this.router.get(this.path, this.getVersion);
    }

    private getVersion(req: express.Request, res: express.Response) {
        res.send(new VersionDTO());
    }
}