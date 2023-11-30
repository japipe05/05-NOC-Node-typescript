import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository";

export class LogRepositoryImpl implements LogRepository{
    
    constructor(
        private readonly logDatasource: LogDatasource,// cambiarlo por otro datasource
    ){}
    async saveLog(log: LogEntity): Promise<void> {
        //throw new Error("Method not implemented.");
        return this.logDatasource.saveLog(log);
    }
    async getlogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        //throw new Error("Method not implemented.");
        return this.logDatasource.getLogs(severityLevel);
    }

}