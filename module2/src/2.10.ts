{//////////////////////////////////////////////
// mapped types

const arrayOfNumbers : number[]=[1,4,5]

// const arrOfStrings : string[]=['1','4','5']
const arrOfStrings: string[] = arrayOfNumbers.map(number=>number.toString())
console.log(arrOfStrings);


type AreaNumber = {
    height: number;
    width: number
}

type Height = AreaNumber["height"] //look up type

type AreaString<T> = { //coverting to string from number
    [key in keyof T]: T[key]
}

const area1: AreaString<{height:string;width:number}>={
    height: "5",
    width: 10
}
}//////////////////////////////////////////////