import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';
import { LogRepository } from '../../domain/repository/log.repository';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

interface SendMailOptions{
    to: string|string[];
    subject:string;
    htmlBody:string;
    attachments?:Attachment[];
}
interface Attachment{
    filename:string;
    path:string;
}


export class EmailService{
    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth:{
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY,
        }
    });

    constructor(){}

    async sendEmail(options:SendMailOptions):Promise<boolean>{
        const {to, subject, htmlBody,attachments = [] } = options;
        try {
            const senInformation = await this.transporter.sendMail({
                to:to,
                subject:subject,
                html: htmlBody,
                attachments:attachments,
            });
          //  console.log(senInformation);
         
            return true;
        } catch (error) {
            //console.log(error);
           
              
            return false
        }
    }

    async sendEmailWithFileSystemLogs(to:string|string[]){
        const subject = 'Log del Servidor';
        const htmlBody= `
                <h3>Logs de Sistema Noc</h3>
                <p>Ex ea est do labore irure Lorem pariatur nostrud esse aliqua. Officia eiusmod officia duis tempor commodo do pariatur aliquip aliqua esse reprehenderit. Nostrud magna anim velit dolor ea irure laborum. Velit sint ea sint consequat et labore dolore excepteur excepteur pariatur ullamco.</p>
                <p>Ver logs</p>
            `;
        const attachments:Attachment[]=[
            {filename:'logs-all.log',path:'logs/logs-all.log'},
            {filename:'logs-high.log',path:'logs/logs-high.log'},
            {filename:'logs-medium.log',path:'logs/logs-medium.log'}
        ];

        return this.sendEmail({
            to, subject, attachments, htmlBody
        });
    }
}