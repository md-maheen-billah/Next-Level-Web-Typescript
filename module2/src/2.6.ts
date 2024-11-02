{//////////////////////////////////////////////
// Constraints in Typescript

interface Student {
    id: number;
    name: string;
    email: string;
}
const addCourseToStudent = <T extends Student>(student:T)=>{
    const course = 'Next Level Web Development'
    return {
        ...student,
        course
    }
}

const student1 = addCourseToStudent({
    id: 222,
    name: 'X',
    email: 'x@gmail.com',
    devType: 'NLWD'
})

const student2 = addCourseToStudent({
    id: 444,
    name: 'Y',
    email: 'y@gmail.com',
    hasWatch: 'Apple Watch'
})



}//////////////////////////////////////////////