public class Samurai : Human
{
    public Samurai(string name) : base(name, 3, 3, 3, 200) {} 

    public override int Attack(Human target) 
    {
        if (target.Health < 50)
        {
            target.Health -= target.Health;
            return target.Health;
        } 
        else
        {
            return base.Attack(target);
        }
    }

    public void Meditate()
    {
        Health = 200;
    }
}