import { CronJob } from 'cron';
type CronTime = string|Date;
type OnTick = ()=>void;
export class CronService{
    static createJob(cronTime:CronTime,onTick:OnTick):CronJob{
        const job = new CronJob(cronTime,onTick,);

        // const job = new CronJob(
        //    '*/60 * * * * *', // cronTime
            // ()=> {
            //     const date = new Date();
            //     console.log('2 second',date);
            // },
        //);

        job.start();
        return job;
    }
}