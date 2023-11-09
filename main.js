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
    makeSound(){
        console.log('sound...');
    }
}

class Cat extends Animal{
    
    makeSound(){
        console.log('mew...');
    }
}
class Fox extends Animal{
    makesound(){
        return 'bark...'
    }
}

const cat = new Cat('snowy', 'white')
cat.makeSound()