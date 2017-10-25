export class User {
    public name:string;
    public password:string;
    public balance:number;
    public avatar:string;
    public inventory:number[];
    public id?:number;
    public token:string;
    constructor(name:string,
                password:string,
    ){
        this.name = name;
        this.password = password;
    }
}