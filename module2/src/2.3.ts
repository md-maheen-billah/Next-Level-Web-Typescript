{//////////////////////////////////////////////
// generic type
type GenericArray<T> = Array<T> //to receive type dynamically set by developer where param can be number/string etc etc
// const rollNumber: number[] = [3,6,8]
// const rollNumber: Array<number> = [3,6,8]
const rollNumber: GenericArray<number> = [3,6,8]
// const mentors: string[]=['Mr. X, Mr. Y, Mr. Z']
// const mentors: Array<string>=['Mr. X, Mr. Y, Mr. Z']
const mentors: GenericArray<string>=['Mr. X, Mr. Y, Mr. Z']
// const boolArray: boolean[]=[true,false,true]
// const boolArray: Array<boolean>=[true,false,true]
const boolArray: GenericArray<boolean>=[true,false,true]


// generic object
const user:GenericArray<{name:string,age:number}> = [
    {
        name: 'Maheen',
        age: 27,
    },
    {
        name: 'John',
        age: 29
    }
]
// generic tuple
type GenericTuple<X,Y>=[X,Y]
const manush: GenericTuple<string,string> = ['Mr.X','Mr.Y']
const userWithId: GenericTuple<number,{name:string,email:string}> = [1234,{name:'Monu',email:'xyz@gmail.com'}]
}//////////////////////////////////////////////