interface CheckServicesUseCase{
    execute(url:string):Promise<boolean>;
}

type SuccessCallback=()=>void;
type ErrorCallback=(error:string)=>void;

export class CheckService implements CheckServicesUseCase{
constructor(
    private readonly successCallback:SuccessCallback,
    private readonly errorCallback:ErrorCallback
){}

    public async execute(url:string):Promise<boolean>{
        try {
            const req = await fetch(url);
            if(!req.ok) {
                throw new Error(`Error fetching ${url}`);
            } 
            this.successCallback();
             //console.log(`${url} is ok`);
            return true;
        } catch (error) {
            this.errorCallback(`${error}`);
            //console.log({error})
            return false;
        }

    }
}