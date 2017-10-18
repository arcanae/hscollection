export class User {
    constructor(public name:string,
                public balance:number,
                public password:string,
                public avatar:string,
                public inventory:number[],
                public id?:number){}
}