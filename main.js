class Animal{
    constructor(name, color){
        this.name = name
        this.color = color
        this.speed = 0
    }
    run(speed){
    this.speed = speed
    return `${this.speed} runs with speed ${this.speed}`
    }
}

class Cat extends Animal{
    
    makeSound(){
        return 'Meww...'
    }
}
class Fox extends Animal{
    makesound(){
        return 'bark...'
    }
}

const cat = new Cat('snowy', 'white')
console.log(cat);