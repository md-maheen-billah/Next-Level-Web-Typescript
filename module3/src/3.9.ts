{//////////////////////////////////////////////
//oop- Abstraction in OOP

// interface
// idea
interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}
// real implementation 
class Car1 implements Vehicle1 {
 startEngine(): void {
     console.log(`I am starting the car engine`);
 }
 stopEngine(): void {
     console.log(`I am stopping the car engine`);
 }
 move(): void {
     console.log(`I am moving the car`);
 }
 test(){
    console.log(`I am just testing`);
 }
}

const toyota = new Car1();
toyota.startEngine();







// abstract class
// idea
abstract class Car2 {
    abstract startEngine(): void 
    abstract stopEngine(): void 
    abstract move(): void 
    test(){
       console.log(`I am just testing`);
    }
}
// real implementation 
class ToyotaCar extends Car2  {
    startEngine(): void {
        console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
        console.log(`I am stopping the car engine`);
    }
    move(): void {
        console.log(`I am moving the car`);
    }
}



}//////////////////////////////////////////////