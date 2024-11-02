{//////////////////////////////////////////////
// Generic Constraint with keyof operator

type Vehicle = {
    bike: string;
    car: string;
    ship:string
}

type Owner = "bike" | "car" | "ship"; //manually

type Owner2 = keyof Vehicle  //same as above but done using keyof

const person1: Owner2 = "car"

const  getPropertyValue = <X,Y extends keyof X>(obj:X,key:Y) =>{
return obj[key];
}


const user = {
    name: 'Mr. X',
    age: 27,
    address: 'dhk'
}

const result1 = getPropertyValue(user,'address')



}//////////////////////////////////////////////