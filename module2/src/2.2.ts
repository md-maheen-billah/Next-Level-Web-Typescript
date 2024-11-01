{//////////////////////////////////////////////
// interface vs type
type User1 = { //using type
    name: string;
    age: number
}

type UserWithRole1= User1 & {role: string}

const user1:UserWithRole1={ //using type
    name: 'Maheen',
    age: 27,
    role: 'admin'
}


interface User2 { //using interface
    name: string;
    age: number;
}

interface UserWithRole2 extends User2 {
    role: string
}

const user2:UserWithRole2={ //using interface
    name: 'Maheen',
    age: 27,
    role: 'admin'
}

// we can also mix and match type with interface for example User1 is type while UserWithRole3 is interface

interface UserWithRole3 extends User1 {
    role: string
}

// and vice versa where user 2 is interface and UserWithRole4 is type
type UserWithRole4= User2 & {role: string}


// In javascript array is a type of object, the same can be said for function
// js--> object, array-->object, function-->object
type Roll1=number[];
interface Roll2 {
    [index:number]:number
}
const rollNumber1:Roll1 = [1,2,3,4,5]
const rollNumber2:Roll2 = [1,2,3,4,5]

type Add = (num1:number,num2:number)=>number
interface Add2{
    (num1:number,num2:number): number
}

const add:Add = (num1,num2) => num1+num2
const add2:Add2 = (num1,num2) => num1+num2
}//////////////////////////////////////////////