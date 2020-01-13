export class Qoutes {
    public showAuthor: boolean;
    constructor(public id:number, public name:string, public author:string, public written:string, public completeDate: Date){
        this.showAuthor=false;
    }
}
