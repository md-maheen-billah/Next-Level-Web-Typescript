{//////////////////////////////////////////////
const age:number=18

if(age>=18){
    console.log('Adult');
}
else {
    console.log('Not Adult');
}
// ternary operator
const isAdult = age >= 18 ? 'Adult':'Not Adult'
console.log({isAdult});
// { isAdult: 'Adult' }

// nullish coalescing operator
// used when decision making is done based on null/undefined
const isAuthenticated = undefined
const result1 = isAuthenticated ?? 'Guest'
const result2 = isAuthenticated ? isAuthenticated : 'Guest'
console.log({result1},{result2});
// { result1: 'Guest' } { result2: 'Guest' }


//  optional chaining
type User = {
    name: string;
    address: {
        city: string;
        road: string;
        presentAddress: string;
        permanentAddress?: string;
    }

}
const user:User ={
    name: "Maheen",
    address: {
        city: 'Dhaka',
        road: 'Mollabari',
        presentAddress: '169/13/4',
        // permanentAddress: '169/13/4'
    }
}

const permanentAddress = user?.address?.permanentAddress ?? 'No Permanent Address'
console.log({permanentAddress});
}//////////////////////////////////////////////