import { LogModel } from "../../data/mongo";
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export class MongoLogDataSource implements LogDatasource{
    async saveLog(log: LogEntity): Promise<void> {
        const newlog = await LogModel.create(log);
        //await newlog.save();  por si no graba
        //console.log('Mongo log Created', newlog);
        console.log('Creado Mongo');
    }
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        //throw new Error("Method not implemented.");
        const logs = await LogModel.find({
            level: severityLevel
        });
        //return logs.map(mongoLog => LogEntity.fromObject(mongoLog));
        return logs.map(LogEntity.fromObject);
    }


}