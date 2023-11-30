import Server from "./presentation/server";

console.log("hello world");

(async()=>{
    main();
})();


function main(){
    Server.start();
}