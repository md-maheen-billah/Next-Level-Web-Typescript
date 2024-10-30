{//////////////////////////////////////////////
// type Alias
type Student ={
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
}
const student1: Student={
    name:'Maheen',
    age:27,
    gender: 'male',
    contactNo: '01700000000',
    address: 'Dhaka'
}
const student2: Student={
    name:'Shaheen',
    age:28,
    gender: 'male',
    address: 'Chittagong'
}

type UserName = string
type IsAdmin = boolean

const userName:UserName = 'Persian'
const isAdmin:IsAdmin = true

type Add = (num1:number,num2:number)=>number;
const add:Add = (num1,num2)=> num1+num2;
}//////////////////////////////////////////////