// Week 2 Day 3
// EVENS AND ODDS!
 
// Create a function that accepts an array of numbers. Every time that array
// has 3 odd values in a row, print "That's odd!" Every time the array has 3 even values in a row, print "Even more so!"
 
// Only print the messages when it's 3 in a row. If there are 5 consecutive odd
// values, for example, it should only print the message one time. If there are 7 consecutive even values, it should print the message two times.
 
// EXAMPLES:
// ------------------------------------
// [1,3,5,8,8,8]
// OUTPUT:
// That's Odd
// Even more so!
 
// ------------------------------------
// [1,2,3,4,5,6,7,8]
// OUTPUT:
 
// ------------------------------------
// [2,2,1,1,6,6,5,5,5]
// OUTPUT:
// That's odd!
 
// ------------------------------------
// [1,1,1,3,3]
// OUTPUT:
// That's odd!



function EvenAndOdds(arr) {
    for(i=0; i < arr.length - 2; i++) {

        if(arr[i]%2==0 && arr[i+1]%2==0 &&arr[i+2]%2==0) {
        
        console.log("even more so"); 
        }
        else if(arr[i]%2!==0 && arr[i+1]%2!==0 && arr[i+2]%2!==0){
        console.log("That's odd")
        }
    }
}
EvenAndOdds([3, 3, 3, 3, 3, 3])
EvenAndOdds([2,2,1,1,6,6,5,5,5])
EvenAndOdds([1,3,5,8,8,8])
EvenAndOdds([1,2,3,4,5,6,7,8])