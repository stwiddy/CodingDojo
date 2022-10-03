public class Ninja : Human
{
    public Ninja(string name) : base(name, 3, 3, 75, 100) {} 

    public override int Attack(Human target) 
    {
        int damage = Dexterity; 
        Random rand = new Random(); 
        int i = 0;
        if (i == rand.Next(5))
        {
            damage += 10;
        }
        target.Health -= damage; 
        Console.WriteLine($"{Name} attacked {target.Name} for {damage} damage!"); 
        return target.Health;
    }

    public void Steal(Human target)
    {
        target.Health -= 5; 
        Health += 5; 
        Console.WriteLine($"{Name} drained 5 health from {target.Name}!");
    }
}