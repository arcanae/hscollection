export class Card {
    constructor(public name:string,
                public cardClass:string,
                public rarity:string,
                public pvalue:number,
                public svalue:number,
                public image:string,
                public id?:number){}
}