import * as express from "express";
import IController from "./controller.interface";
import HealthDTO, { HealthStatus } from "../dto/health.dto";

export default class HealthController implements IController {
    
    public path = "/health";
    public router = express.Router();
    
    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes(): void {
        this.router.get(this.path, this.getHealth);
    }
    
    private getHealth(req: express.Request, res: express.Response) {
        const healthDTO = new HealthDTO("Music service is healthy", HealthStatus.HEALTHY); 
        res.send(healthDTO);
    }
}