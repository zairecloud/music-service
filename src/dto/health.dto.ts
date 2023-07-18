import ResponseDTO from "./response.dto";

export enum HealthStatus {
    HEALTHY = "Healthy",
    UNHEALTHY = "Unhealthy",
    DEAD = "Dead"
}

export default class HealthDTO extends ResponseDTO {
    
    status: HealthStatus;
    
    constructor(message: string, status: HealthStatus) {
        super(message);
        this.status = status;
    }
}