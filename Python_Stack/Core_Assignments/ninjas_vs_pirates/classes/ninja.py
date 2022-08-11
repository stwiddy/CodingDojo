class Ninja:

    def __init__( self , name ):
        self.name = name
        self.strength = 10
        self.speed = 5
        self.health = 100
    
    def show_stats( self ):
        print(f"Name: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n")

    def attack( self , pirate ):
        pirate.health -= self.strength
        print (f"{self.name} wacks pirate")
    
    def heal( self ):
        heal_val = (self.health/20) 
        self.health += heal_val
        print(f"{self.name} heals for{heal_val}")
    
    def crit( self , pirate ):
        pirate.health -= self.strength*2
        print (f"{self.name} stabs pirate")
    
    def ninja_star(self , pirate):
        pirate.health -= self.strength*50
        print(f"Ninja used shuriken")
        print("Instant K.O.")