{//////////////////////////////////////////////
//oop- access modifiers
 class BankAccount{
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id:number,name:string,balance:number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    public addDeposit(amount:number){
        this._balance = this._balance + amount;
    }

    public getBalance(){
        return this._balance
    }
 }


 const poorPeople = new BankAccount(111,"Mr. Poor",20);
 poorPeople.addDeposit(200);
 const myBalance =  poorPeople.getBalance();
 console.log(myBalance);

}//////////////////////////////////////////////