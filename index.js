//* ========== Week3 Day2 Homework ======================
// creating classes
/*
    give the class at least 3 properties
give the class at least 3 methods
create two instances of the class (two cats)
log both instances to see their properties
invoke each method from both instances
*/
class Cat {
    constructor(name, age, gender){
        this.name = name
        this.age = age
        this.gender = gender
        this.hasKids = false
    }
    bio(){
        
        console.log(
            `${this.name} is ${this.age} years old, ${this.gender} cute cat`
        )
    }
    jump(){
        console.log(`${this.name} is jumping...`)
    }
    groom(){
        console.log(`${this.name} is getting grooming service. `)
    }
    
}
const tiger = new Cat('tiger', 2, 'boy')
const milo = new Cat('milo', 3, 'girl')
console.log(tiger)
tiger.bio()
tiger.jump()
tiger.groom()
console.log("============================")
console.log(milo)
milo.bio()
milo.jump()
milo.groom()

// create 3 properties that are set by the constructor
// create 3 methods
// instantiate 2 arrays of 3 pirates, 
// name the arrays after your favorite pirate ships, 
// jollyRoger and blackPearl
// loop over each array and print 3 properties of each pirate
console.log('==========================================')
class Pirate {
    constructor(name, capacity, motor){
        this.name = name
        this.capacity = capacity
        this.motor = motor
        this.sailing = false
    }
    info(){
        console.log(`A pirate ship ${this.name} with ${this.capacity} people on board is sailing on the atlantic ocean. `)
    }
    sail(){
        this.sailing = true
       console.log(`${this.name} is sailing.`) 
    }
    stopSailing(){
        this.sailing = false
        console.log(`${this.name} stops sailing.`)
    }
}

const pirateOne  = new Pirate('jollyRoger', 1000, '2 engines')
const pirateTwo = new Pirate('blackPearl', 600, '1 engine' )
const pirateThree = new Pirate('Liberty', 2000, '4 engines' )
const pirateArray = [pirateOne, pirateTwo, pirateThree]

for(let i = 0; i < arr1.length; i++){
    console.log(pirateArray[i].name)
    console.log(pirateArray[i].sail)
    console.log(pirateArray[i].motor)
}