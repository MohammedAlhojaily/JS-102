class Car {
    static numberOfCars = 0
    constructor(name, color, currentSpeed){
        this.name = name
        this.color = color
        this.currentSpeed = currentSpeed
        Car.incrementNumberOfCars()
    }
    move(speed){
        this.currentSpeed = speed
        return `The ${this.name} is moving at speed of ${this.currentSpeed}km per hour`
    }
    stop(){
        this.currentSpeed = 0
        return `The ${this.name} stopped`
    }
    static incrementNumberOfCars(){
        Car.numberOfCars++
    }
}

const car1 = new Car('camry', 'white', 0)
const car2 = new Car('corella', 'black',  0) 
console.log(Car.numberOfCars);