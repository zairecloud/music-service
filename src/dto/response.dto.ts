export default class ResponseDTO {
    message: string;
    date: Date;
    
    constructor(message: string) {
        this.message = message;
        this.date = new Date();
    }
}