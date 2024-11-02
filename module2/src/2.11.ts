{//////////////////////////////////////////////
// Utility types

type Person = {
    name: string;
    age:number;
    email?:string;
    contactNo: string;
}

type NameAge = Pick<Person,"name"|"age">

// Omit
type ContactInfo = Omit<Person,"name"|"age"|"email">

// Required
type PersonRequired = Required<Person> //this makes everything or selected required

// Partial
type PersonPartial = Partial<Person> //this makes everything or selected optional

// Readonly
type PersonReadOnly = Readonly<Person> //makes things inside person readonly thus they cannot be changed

// Record
type MyObj = Record<string,string>

const EmptyObj: Record<string,unknown> ={}

const obj1: MyObj ={
    a:"a",
    b: "b",
    c:"c"
}
}//////////////////////////////////////////////