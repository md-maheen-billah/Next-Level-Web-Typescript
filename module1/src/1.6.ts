{//////////////////////////////////////////////
function add(num1:number,num2:number):number{
    return num1+num2;
}

const addArrow = (num1:number,num2:number):number => num1+num2

// object er moddhe kono function thakle shetake method bole
// object --> function -->method

const poorUser = {
    name: 'Mezba',
    balance: 0,
    addBalance(balance:number):number{ //for return type number
        return this.balance+balance
    }
}

const poorUser2 = {
    name: 'Mezba',
    balance: 0,
    addBalance(balance:number):string{  //for return type string
        return `My new balance is : ${this.balance+balance}`
    }
}

const arr: number[]=[1,4,10]

const newArray: number[] = arr.map((element:number):number=>element*element)
}//////////////////////////////////////////////