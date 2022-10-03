// // Fundamentals 

// void PrintNumbers() 
// { 
//     for (int i = 1; i <= 255; i++)
//     {
//         Console.WriteLine(i);
//     }
// }
// PrintNumbers(); 


// void PrintNumbers3div5() 
// { 
//     for (int i = 1; i <= 100; i++)
//     {
//         bool isDivby3 = i % 3 == 0;
//         bool isDivby5 = i % 5 == 0;
//         if ((isDivby3 && isDivby5) == false
//             && (isDivby3 || isDivby5))
//         {
//             Console.WriteLine(i);
//         }
//         // Console.WriteLine($"is {i} divisible by 3? {isDivby3}");
//         // Console.WriteLine($"is {i} divisible by 5? {isDivby5}");
//     }
// }
// PrintNumbers3div5(); 

// void PrintNumbersbuzzfizz() 
// { 
//     for (int i = 1; i <= 100; i++)
//     {
//         bool isDivby3 = i % 3 == 0;
//         bool isDivby5 = i % 5 == 0;
//         if (isDivby3 == true)
//         {
//             Console.WriteLine($"{i} = Fizz");
//         } 
//         if (isDivby5 == true)
//         {
//             Console.WriteLine($"{i} = Buzz");
//         } 
//         if (isDivby3 && isDivby5 == true)
//         {
//             Console.WriteLine($"{i} = FizzBuzz");
//         } 
//         // Console.WriteLine($"is {i} divisible by 3? {isDivby3}");
//         // Console.WriteLine($"is {i} divisible by 5? {isDivby5}");
//     }
// }
// PrintNumbersbuzzfizz(); 

// Three Basic Arrays

// 1-9
int[] arr1to9 = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
// arr of names
String[] name_arr = new string[4] { "Tim", "Martin", "Nikki", "Sara" };
// True false alt
bool[] bool_array = new bool[10] { true, false, true, false, true, false, true, false, true, false };

// Create a list of Ice Cream flavors that holds at least 5 different flavors
// Output the length of this list after building it
// Output the third flavor in the list, then remove this value.Output the new length of the list (Note it should just be one less~)
List<string> icecream_flavors = new List<string>();
icecream_flavors.Add("MintChoco");
icecream_flavors.Add("Mango");
icecream_flavors.Add("WhiteChoco");
icecream_flavors.Add("Pineapple");
icecream_flavors.Add("AppleCream");
Console.WriteLine(icecream_flavors[2]);
icecream_flavors.RemoveAt(2);
Console.WriteLine(icecream_flavors.Count);

// Create a Dictionary that will store both string keys as well as string values
// For each name in the array of names you made previously, add it as a new key in this dictionary with value null
// For each name key, select a random flavor from the flavor list above and store it as the value
// Loop through the Dictionary and print out each user's name and their associated ice cream flavor.
Dictionary<string, string> NameandIcecreamFlavor = new Dictionary<string, string>();
NameandIcecreamFlavor.Add("Tim", "Mango");
NameandIcecreamFlavor.Add("Martin", "Pineapple");
NameandIcecreamFlavor.Add("Nikki", "MintChoco");
NameandIcecreamFlavor.Add("Sara", "AppleCream");
foreach (var pair in NameandIcecreamFlavor)
{
    Console.WriteLine("Name: " + pair.Key + " Favorite flavor: " + pair.Value);
}
