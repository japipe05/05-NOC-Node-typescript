export enum LogSeverityLevel{
    low='low',
    medium='medium',
    high='high',
}
export class LogEntity {
    public level:LogSeverityLevel;//Enum
    public message:string;
    public createdAt: Date;

    constructor(message:string, level:LogSeverityLevel){
        this.message = message;
        this.level = level;
        this.createdAt = new Date();
    }
    //{"level:"hight", "message":"Hhola mundo", "createdAt":"2132132156465413"}
    static fromJson = (json:string):LogEntity=>{
        const{level,message,createdAt}=JSON.parse(json);
        if(!message) throw new Error('Mensaje requerido');
        if(!level) throw new Error('Mensaje requerido');

        const log = new LogEntity(message,level);
        log.createdAt = new Date(createdAt);

        return log;
    }
}