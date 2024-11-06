{//////////////////////////////////////////////
//oop- Type guard using instanceof operator

class Animal {
    name: string;
    species: string;

    constructor(name: string, species:string){
        this.name= name;
        this.species= species;
    }

    makeSound(){
        console.log(`I can make sound`);
    }
}

class Dog extends Animal {

    constructor(name:string,species:string){
        super(name,species)
    }

    makeBark(){
        console.log(`I am barking`);
    }
}

class Cat extends Animal {

    constructor(name:string,species:string){
        super(name,species)
    }

    makeMeow(){
        console.log(`I am mewing`);
    }
}

// smart way of handling is to use a function

const isDog =(animal:Animal):animal is Dog=>{
    return animal instanceof Dog;
}
const isCat =(animal:Animal):animal is Cat=>{
    return animal instanceof Cat;
}

const getAnimal = (animal: Animal) => {
    if(isDog(animal)){
        animal.makeBark()
    }
    else if(isCat(animal)){
        animal.makeMeow()
    }
    else {
        animal.makeSound()
    }
}

const dog = new Dog("Dog Bhai","dog")
const cat = new Cat("Cat Bhai","cat")

getAnimal(cat);

}//////////////////////////////////////////////