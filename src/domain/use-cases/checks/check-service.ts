import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServicesUseCase{
    execute(url:string):Promise<boolean>;
}

type SuccessCallback=(()=>void)|undefined;
type ErrorCallback=((error:string)=>void)|undefined;

export class CheckService implements CheckServicesUseCase{
constructor(
    private readonly logRepository: LogRepository,
    private readonly successCallback:SuccessCallback,
    private readonly errorCallback:ErrorCallback
){}

    public async execute(url:string):Promise<boolean>{
        try {
            const req = await fetch(url);
            if(!req.ok) {
                throw new Error(`Error fetching ${url}`);
            } 
            const log = new LogEntity({
                message:`Service${url} Working`,
                level:LogSeverityLevel.low,
                origin: 'check-services'
            });
            this.logRepository.saveLog(log);
            this.successCallback && this.successCallback();
             //console.log(`${url} is ok`);
            return true;
        } catch (error) {
            const errorMessage =`${url} is not ok ${error}`; 
            const log = new LogEntity({
                message:errorMessage,
                level:LogSeverityLevel.high,
                origin: 'check-services'
            });
            this.logRepository.saveLog(log);
            this.errorCallback && this.errorCallback(errorMessage);
            //console.log({error})
            return false;
        }

    }
}