const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

//The associated Arrow function will be executed when the tutorial event is emitted
eventEmitter.on("tutorial", (num1,num2)=>{
    console.log("Tutorial event has occured to calculate the sum ",num1+num2)
})

//Emitting tutorial event
eventEmitter.emit("tutorial",-1,2)

class Person extends EventEmitter {
    constructor(name){
        super();
        this._name=name
    }
    get name(){
        return this._name
    }
}

let random = new Person("Kamal");
random.on("name",()=>{           //random is also an instance of EventEmitter and we are attaching event name to it
    console.log("Name is ",random.name)
})        
random.emit("name")     //Emitting name event 