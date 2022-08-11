from classes.ninja import Ninja
from classes.pirate import Pirate
import random

michelangelo = Ninja("Michelanglo")

jack_sparrow = Pirate("Jack Sparrow")


while michelangelo.health >0 and jack_sparrow.health>0:
    response = input("Will you 1) Attack or 2) Heal")
    if response == "1":
        roll = random.randint(1,6)
        if roll == 1 or roll ==2 or roll == 3:
            michelangelo.attack (jack_sparrow)
        if roll == 4 or roll == 5:
            michelangelo.crit(jack_sparrow)
        if roll == 6:
            michelangelo.ninja_star(jack_sparrow)
    if response == "2":
        michelangelo.heal()
    roll1 = random.randint(1,10)
    if roll1 == 1 or roll == 2 or roll == 3 or roll == 4 :
        jack_sparrow.attack(michelangelo)
    if roll1 == 5 or roll == 6:
        jack_sparrow.heal()
    if roll1 == 7:
        jack_sparrow.crit(michelangelo)
    if roll1 == 8 or roll == 9:
        jack_sparrow.shield()
    if roll1 ==10:
        jack_sparrow.fatality(michelangelo)


    print (f"Ninja's health is {michelangelo.health}")
    print (f"Pirate's health is {jack_sparrow.health}")
    
print("Game Over")