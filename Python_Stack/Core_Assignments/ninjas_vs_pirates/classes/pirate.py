class Pirate:

    def __init__( self , name ):
        self.name = name
        self.strength = 15
        self.speed = 3
        self.health = 100

    def show_stats( self ):
        print(f"Name: {self.name}\nStrength: {self.strength}\nSpeed: {self.speed}\nHealth: {self.health}\n")

    def attack ( self , ninja ):
        ninja.health -= self.strength
        print(f"{self.name} slaps the ninja")
    
    def crit( self , ninja ):
        ninja.health -= self.strength*2
        print(f"{self.name} punches ninja!")

    def heal ( self ):
        heal_val = (self.health/20) 
        self.health += heal_val
        print(f"{self.name} heals for{heal_val}")
    
    def shield (self):
        self.health += 1000 
        print(f"Activated God Mode")
    
    def fatality(self , ninja):
        ninja.health -= self.strength*50
        print(f"Pirate used blunderbuss")
        print("Instant K.O.")