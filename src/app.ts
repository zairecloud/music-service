import express from "express";

import "reflect-metadata";

import IController from "./controller/controller.interface";
import {IConfig} from "./config/config.interface";

export default class App {
    
    public app: express.Application;
    public config: IConfig;
    
    constructor(controllers: Array<IController>, config: IConfig) {
        this.app = express();
        this.config = config;
        
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }
    
    private initializeMiddlewares() {
        this.app.use(express.json());
    }
    
    private initializeControllers(controllers: Array<IController>) {
        controllers.forEach((controller) => {
            if(controller.router) {
                this.app.use("/", controller.router);
            }
        });
    }
    
    public listen() {
        this.app.listen(this.config.port, this.config.host, () => {
            console.log(`Server listening on ${this.config.host}:${this.config.port}`);
        });
    }
}