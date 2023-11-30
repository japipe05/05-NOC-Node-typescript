import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
const fileSystemlogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
)

export default class Server{
    public static start(){
        console.log('Server started...');
        


        CronService.createJob(
            '*/5 * * * * *',
                ()=> {
                    //const url = 'https://google.com';
                    const url ='http://localhost:3000';
                //  new CheckService().execute('https://google.com');
                 new CheckService(
                    fileSystemlogRepository,
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