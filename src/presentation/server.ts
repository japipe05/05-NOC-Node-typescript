import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";


export default class Server{
    public static start(){
        console.log('Server started...');
        


        CronService.createJob(
            '*/60 * * * * *',
                ()=> {
                    const url = 'http://localhost:3000';
                //  new CheckService().execute('https://google.com');
                 new CheckService(
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