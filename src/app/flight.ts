export class Flight {

    constructor(public id:Number,
        public logo:string,
        public name:string,
        public destination:string,
        public destinationCode :string,
        public boarding: string,
        public boardingCode:string,
        public arrivalTime:string,
        public duration: string,
        public emi:Number,
        public price:Number,
        public departure:string){

    }
}
