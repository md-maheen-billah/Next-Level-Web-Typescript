{//////////////////////////////////////////////
//oop- class
// class Animal {
//     public name: string;
//     public species: string;
//     public sound: string;

//     constructor(name:string,species: string,sound: string){
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }

//     makeSound(){
//         console.log(`The ${this.name} says ${this.sound}`);
//     }
// }

// can also be written like above

class Animal {
    constructor(public name: string,public species: string,public sound: string){
    }

    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
    }
}

const dog = new Animal("German Shephard","dog","Ghew Ghew");
const cat = new Animal("Persian","cat","Meow Meow");
dog.makeSound();
}//////////////////////////////////////////////