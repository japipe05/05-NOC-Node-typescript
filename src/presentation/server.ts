import { envs } from "../config/plugins/envs.plugin";
import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDataSource } from "../infrastructure/datasources/mongo-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";
import { PostgresLogDatasource } from '../infrastructure/datasources/postgres-log.datasource';
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";

const logRepository = new LogRepositoryImpl(
    new FileSystemDatasource(), // Guardar en archivos del sistema   
    //new MongoLogDataSource(), //guardar en mongo
    //new PostgresLogDatasource(),
);


const fslogRepository = new LogRepositoryImpl(
    new FileSystemDatasource(), // Guardar en archivos del sistema   
);

const mglogRepository = new LogRepositoryImpl(
    new MongoLogDataSource(), //guardar en mongo
);

const pglogRepository = new LogRepositoryImpl(
    new PostgresLogDatasource(),
);



const emaiService = new EmailService();

export default class Server{
    public static async start(){
        console.log('Server started...');
        //console.log(envs,envs.MAILER_EMAIL,envs.MAILER_SECRET_KEY)
        //Mandar email
        
        new SendEmailLogs(
            emaiService,
            logRepository,
        ).execute(
            ['felipehuchija@gmail.com','feliperodriguez96@hotmail.com']
            //['feliperodriguez96@hotmail.com']
        )

        //old
        // emaiService.sendEmail({
        //     to:'feliperodriguez96@hotmail.com',
        //     subject: 'Logs de Sistema',
        //     htmlBody: `
        //         <h3>Logs de Sistema Noc</h3>
        //         <p>Ex ea est do labore irure Lorem pariatur nostrud esse aliqua. Officia eiusmod officia duis tempor commodo do pariatur aliquip aliqua esse reprehenderit. Nostrud magna anim velit dolor ea irure laborum. Velit sint ea sint consequat et labore dolore excepteur excepteur pariatur ullamco.</p>
        //         <p>Ver logs</p>
        //     `, 
        // });

        //const logs = await logRepository.getlogs(LogSeverityLevel.low);
        //console.log(logs);

        //cuando solo loenvia por mongo o postgres o file sisten
        // CronService.createJob(
        //     '*/10 * * * * *',
        //         ()=> {
        //             const url = 'https://google.com';
        //             //const url ='http://localhost:3000';
        //         //  new CheckService().execute('https://google.com');
        //          new CheckService(
        //             logRepository,
        //             ()=> console.log(`${url} is ok`),
        //             (error)=> console.log(error),
        //          ).execute(url);
        //      });
        
        //si envia los tres al tiempo o mas de un no file sistem, mongo y postgres 
             CronService.createJob(
                '*/10 * * * * *',
                    ()=> {
                        const url = 'https://google.com';
                        //const url ='http://localhost:3000';
                    //  new CheckService().execute('https://google.com');
                     new CheckServiceMultiple(
                        [fslogRepository,mglogRepository,pglogRepository],
                        ()=> console.log(`${url} is ok`),
                        (error)=> console.log(error),
                     ).execute(url);
                 });

    
            //  CronService.createJob(
            //     '*/60 * * * * *',
            //         ()=> {
            //          const date = new Date();
            //          console.log('60 second',date);
            //      });
            
    }
}