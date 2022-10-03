public class Wizard : Human
{
    public Wizard(string name) : base(name, 3, 25, 3, 50) {} 

    public override int Attack(Human target) 
    {
        int damage = Intelligence * 3; 
        target.Health -= damage; 
        Health += damage; 
        Console.WriteLine($"{Name} attacked {target.Name} for {damage} damage!"); 
        return target.Health;
    }

    public int Heal(Human target) 
    {
        int newHealth = Intelligence * 3;
        target.Health += newHealth;
        Console.WriteLine($"{Name} healed {target.Name} by {newHealth}!");
        return target.Health;
    }
}