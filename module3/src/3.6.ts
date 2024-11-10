{//////////////////////////////////////////////
//oop- Getter and Setter
class BankAccount{
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id:number,name:string,balance:number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    // getter
    get balance(){
        return this._balance;
    }

    //setter
    set deposit(amount:number){
        this._balance = this._balance+amount;
    }
 }


 const poorPeople = new BankAccount(111,"Mr. Poor",20);
 poorPeople.deposit = 200;
 const myBalance =  poorPeople.balance; //property er moto kore
 console.log(myBalance);

}//////////////////////////////////////////////