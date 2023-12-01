export enum LogSeverityLevel{
    low='low',
    medium='medium',
    high='high',
}
export interface LogEntityOptions{
    level:LogSeverityLevel;//Enum
    message:string;
    origin:string;
    createdAt?: Date;
}
export class LogEntity {
    public level:LogSeverityLevel;//Enum
    public message:string;
    public createdAt: Date;
    public origin: string;

    constructor(options:LogEntityOptions){
        const {message, level, origin, createdAt= new Date()} = options;
        this.message = message;
        this.level = level;
        this.createdAt = new Date();
        this.origin = origin;
    }
    //{"level:"hight", "message":"Hhola mundo", "createdAt":"2132132156465413"}
    static fromJson = (json:string):LogEntity=>{
        const{level,message,createdAt,origin}=JSON.parse(json);
        if(!message) throw new Error('Mensaje requerido');
        if(!level) throw new Error('Mensaje requerido');

        const log = new LogEntity({message,level,createdAt,origin});
        log.createdAt = new Date(createdAt);

        return log;
    }
}