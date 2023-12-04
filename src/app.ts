import { envs } from "./config/plugins/envs.plugin";
import { MongoDatabase,LogModel } from "./data/mongo/";
import Server from "./presentation/server";

console.log("hello world");

(async()=>{
    main();
})();


async function main(){
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    });
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