import { LogDatasource } from '../../domain/datasources/log.datasource';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';
import { PrismaClient, SeverityLevel } from '@prisma/client';

const prismaClient = new PrismaClient();
const severityEnum={
    low: SeverityLevel.LOW,
    medium: SeverityLevel.MEDIUM,
    high: SeverityLevel.HIGH,
}
export class PostgresLogDatasource implements LogDatasource{
    async saveLog(log: LogEntity): Promise<void> {
        //throw new Error('Method not implemented.');
        const level = severityEnum[log.level];
        const newLog = await prismaClient.logModel.create({
            data:{
                ...log,
                level:level,
            }
        });
        //console.log(newLog);
        console.log("Creado Postgres");

    }
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        //throw new Error('Method not implemented.');

        const level = severityEnum[severityLevel];

        const logs = await prismaClient.logModel.findMany({
                where:{
                    level:level
                }
            });
        console.log(logs);
        return logs.map(dblog => LogEntity.fromObject(dblog));
    }

}