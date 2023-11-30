import { envs } from "./config/plugins/envs.plugin";
import Server from "./presentation/server";

console.log("hello world");

(async()=>{
    main();
})();


function main(){
    Server.start();
    //console.log(envs)
}