
static int[] RandomArray()
{
    int[] returnArray = new int[10]; 
    Random rand = new Random();
    int max = 5;
    int min = 25;
    int sum = 0;
    for (int i = 0; i < 10; i++) 
    {
        returnArray[i] = rand.Next(5,26); 
        bool isMax = returnArray[i] > max;
        bool isMin = returnArray[i] < min;
        if (isMax) 
        {
            max = returnArray[i];
        }
        if (isMin) 
        {
            min = returnArray[i];
        }
        sum += returnArray[i]; 
        Console.Write($"{returnArray[i]} ");
    }
    Console.WriteLine("");
    Console.WriteLine($"Max: {max}");
    Console.WriteLine($"Min: {min}");
    Console.WriteLine($"Sum: {sum}");
    return returnArray;
}
RandomArray();

static string TossCoin()
{
    Random rand = new Random();
    int i = rand.Next(2); 
    bool Heads = i == 0;
    bool Tails = i == 1;
    string result = "";
    if (Heads)
    {
        result = "Heads";
    }
    if (Tails)
    {
        result = "Tails";
    }
    Console.WriteLine($"And the winner in the coinflip is..... {result}");
    return result;
}
TossCoin();

// // Toss multiple coins
// static double TossMultipleCoins(int num)
// {
//     double headsRatio = 0;
//     // Initialize dictionary of coin tosses
//     Dictionary<string, double> tosses = new Dictionary<string, double>();
//     tosses.Add("Tosses", 0);
//     tosses.Add("Heads", 0);
//     tosses.Add("Tails", 0);
//     // Loop and call TossCoin()
//     for (int i = 0; i < num; i++)
//     {
//         string result = TossCoin();
//         Console.WriteLine(result);

//         bool isHeads = result == "Heads";
//         bool isTails = result == "Tails";
//         // Update dictionary
//         if (isHeads)
//         {
//             tosses["Heads"]++;
//         }
//         if (isTails)
//         {
//             tosses["Tails"]++;
//         }
//         tosses["Tosses"]++;
//     }
//     // Console.WriteLine($"Heads Tossed: {tosses["Heads"]} Tails Tossed: {tosses["Tails"]} Total Tosses: {tosses["Tosses"]}"); // Check values
//     // Calculate ratio of head/tail to total tosses
//     headsRatio = tosses["Heads"] / tosses["Tosses"];
//     Console.WriteLine($"Ratio of Heads to Total Tosses: {headsRatio}");
//     return headsRatio;
// }

// TossMultipleCoins(4);

// // Names
// string[] names = {"Todd", "Tiffany", "Charlie", "Geneva", "Sydney"};
// static List<string> Names(string[] array)
// {
//     List<string> names = new List<string>();
//     foreach (var i in array) // Add names to list
//     {
//         names.Add(i);
//     }
//     Console.Write("Names (Original Order): ");
//     Console.WriteLine(String.Join(", ", names));
//     Random rand = new Random(); // Shuffle list
//     var shuffled = names.OrderBy(_ => rand.Next()).ToList();
//     Console.Write("Names (Shuffled Order: ");
//     Console.WriteLine(String.Join(", ", shuffled));
//     foreach (var i in array) // Check if name is more than 5 letters long
//     {
//         bool isTooLong = i.Length > 5; 
//         if (isTooLong)
//         {
//             names.Remove(i);
//         }
//     }
//     Console.Write("Names (Under 5 Letters): ");
//     Console.WriteLine(String.Join(", ", names));
//     return names;
// }
// Names(names);