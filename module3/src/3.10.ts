{//////////////////////////////////////////////
//oop- Encapsulation in OOP
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

    private getBalance(){
        return this._balance
    }

    getHiddenMethod(){
        return this.getBalance()
    }
 }




 const poorPeople = new BankAccount(111,"Mr. Poor",20);
 poorPeople.addDeposit(200);
 const myBalance =  poorPeople.getBalance();
 console.log(myBalance);

}//////////////////////////////////////////////