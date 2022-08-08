// Part 1


function greetings(Starwars) {
    if (Starwars == "Anakin!") {
    }
    console.log ("Good Day, " + Starwars)
}

greetings("Anakin!")

//Part 2 (Level 2)

var TimeOfDay = "Morning"
function greetings(Starwars) {
    if (Starwars == "Anakin!") {
    }
    console.log ("Good Day, " + Starwars + " it is " + TimeOfDay) 
}

greetings("Anakin!")

//Part 3 (Level 3)

var TimeOfDay = "Morning"

function greetings(starwars) {
    if (starwars == "Count Dooku") {
    console.log ("I'm coming for you, Dooku")
    }
    else {
    console.log ("Good Day, " + starwars + " it is " + TimeOfDay); 
}
}
greetings("Count Dooku")
greetings("Anakin!")
