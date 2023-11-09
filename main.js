const car = {
    name: 'camry',
    color: 'white',
    currentSpeed: 0,
    move: function(speed){},
    stop: function(){
        console.log('stop method');
    }
}

console.log(car.name)
car.stop()