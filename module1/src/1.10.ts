{//////////////////////////////////////////////
// union type
type FrontendDev = 'fakibazDeveloper' | 'juniorDeveloper'
type FullStackDev = 'frontendDeveloper' | 'expertDeveloper'

type Developer = FrontendDev | FullStackDev

const newDeveloper:FrontendDev = "fakibazDeveloper";

type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+"|"O-"|"A+"|"B+"|"AB+"|"AB-"|"A-"|"B-"
}

const user1: User ={
    name: "Maheen",
    email: 'xy@gmail.com',
    gender: "male",
    bloodGroup: "O+"
}


// intersection type
type FrontDeveloper = {
    skills: string[];
    designation1: 'Frontend Developer'
}
type BackendDeveloper = {
    skills: string[];
    designation2: 'Backend Developer'
}

type FullSDev = FrontDeveloper & BackendDeveloper

const fullStackDev:FullSDev = {
    skills: ['HTML, Javascript, Python, Node, Mongodb, SQL, Next'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
}
}//////////////////////////////////////////////