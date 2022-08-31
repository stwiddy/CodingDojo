// Assignment Super_Ninja 


class Ninja{
    constructor(name, health = 1000, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.name);
            return this
    }

    showStats(){
        console.log(`Name: ${this.name} Strength: ${this.strength} Speed: ${this.speed} Health: ${this.health}`);
            return this
    }

    drinkSake(){
        this.health += 10;
        return this
    }
}

// Running Function 

class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log('What on programmer can do in one month, two programmers can do in two months.')
        return this
    }
}


const ninja = new Ninja("Hyabusa");
const superSensei = new Sensei("Master Splinter");

ninja.sayName().drinkSake().showStats();
superSensei.speakWisdom().showStats();
