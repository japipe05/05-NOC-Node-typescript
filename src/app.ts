import { Prisma, PrismaClient } from "@prisma/client";
import { envs } from "./config/plugins/envs.plugin";
import { MongoDatabase,LogModel } from "./data/mongo/";
import Server from "./presentation/server";

//console.log("hello world");

(async()=>{
    main();
})();


async function main(){
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });
    const prisma = new PrismaClient();
    // crea un registro dumis en la base de datos
    // const newLog= await prisma.logModel.create({
    //     data:{
    //         level:'HIGH',
    //         message:'Test Mesage',
    //         origin:'App.ts'
    //     }
    // });
    //console.log(newLog);

    //traer los datos de base de datos
    // const logs = await prisma.logModel.findMany({
    //     where:{
    //         level:'MEDIUM'
    //     }
    // });
    // console.log(logs)


    //Crear un registro
  /*  const newLog = await LogModel.create({
        message: "Test Message desdeMongo...",
        origin: 'App.ts',
        level: 'low',
    });

    await newLog.save();
    console.log(newLog);

    const logs = await LogModel.find();
    console.log(logs[0].message);
    */
    Server.start();
    //console.log(envs)
}