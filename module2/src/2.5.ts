{//////////////////////////////////////////////
// Function with generics
const createArray = (param:string):string[]=>{
    return [param]
}
const res1 = createArray('Bangladesh')

const createArrayWithGeneric = <T>(param:T):T[]=>{
    return [param]
}
const resGeneric = createArrayWithGeneric<string>('Bangladesh')

type User = {
    id: number;
    name:string
}
const resGenericObject = createArrayWithGeneric<User>({
    id: 222,
    name: 'Maheen'
})


// for tuples
const createArrayWithTuple = <T,Q>(param1:T,param2:Q):[T,Q]=>{
    return [param1,param2]
}

interface Country {
    name: string;
}

const resGeneric2 = createArrayWithTuple<string,number>('Bangladesh',22)
const resGeneric3 = createArrayWithTuple<string,Country>('Bangladesh',{
    name: 'Asia',
})



const addCourseToStudent = <T>(student:T)=>{
    const course = 'Next Level Web Development'
    return {
        ...student,
        course
    }
}

const student1 = addCourseToStudent({
    name: 'Maheen',
    email: 'xyz@gmail.com',
    devType: 'NLWD'
})
const student2 = addCourseToStudent({
    name: 'John',
    email: 'xyz@gmail.com',
    hasWatch: 'Apple Watch'
})


}//////////////////////////////////////////////