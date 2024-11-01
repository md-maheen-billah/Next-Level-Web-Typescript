{//////////////////////////////////////////////
// type assertion
let anything:any;
anything="Next";
anything = 222;
(anything as number)

const kgToGm = (value: string| number): string|number|undefined => {
    if(typeof value ==='string'){
        const converted = parseFloat(value)*1000;
        return `The converted value is ${converted}`
    }
    if(typeof value ==='number'){
        return value*1000;
    }
}

const result1 = kgToGm(20) as number
const result2 = kgToGm("20") as string

type CustomError = {
    message: string
}
try{

}catch(error){
    console.log((error as CustomError).message);
}

}//////////////////////////////////////////////