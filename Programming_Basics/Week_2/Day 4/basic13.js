// ********* CODING DOJO BASIC 13 **********


// Number One: Print 1-255
// print1To255()
// Print all the integers from 1 to 255

function numbersPrint () {
    // cycle through numbers 1-255
    for(i=1; i <= 255; i++)
    // printing i each loop
    console.log(i)
}
numbersPrint()


// Number Two: Print Odds 1-255
// printOdds1To255()
// Print all odd integers from 1 to 255. 

function numbersPrint () {
    // adding by 2 so we can get odds
    for(i = 1; i <= 255; i = i + 2)
    // printing i each loop
    console.log(i)
}
numbersPrint()


// Number Three: Print Ints and Sum 0-255
// printIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far. 

function numbersPrint () {
    // setting a var we created to represent sum to 0 to start
    var sum = 0
    // still cycling through 0-255
    for(i = 0; i <= 255; i++) {
        // adding sum to i
        sum = i + sum
        // printing i and sum each loop
        console.log(i, sum)
    }
}

numbersPrint()


// Number Four: Iterate and Print Array
// printArrayVals(arr)
// Iterate through a given array, printing each value. 

var arr = [1, 724, 3, 4, 5]
// x will represent the position we are in the array, which is why we start at 0
x = 0

function printArrayVals() {
    // the for loop increases the position in the array each time
    for(x = 0; x <= arr.length - 1; x++) {
        // we want to print the array value for each increasing position of x
        console.log(arr[x])
    }
}

printArrayVals()


// Number Five: Find and Print Max
// printMaxOfArray(arr)
// Given an array, find and print its largest element.

// we create a parameter that can represent any array
function printMax(arr) {
    // we create a max variable to use for comparison to all values in the array
    var max = arr[0];
    // we want to loop through each position in the array represented by i
    for (var i = 0; i < arr.length; i++) {
        // this is the comparison statement. we only print max if it's equal to a position we found in the array
        // if max is less than the position we found in the array, we exit the function bc we have not found the mex yet.
        if (max < arr[i] ) {
            max = arr[i];
        }
    }
    console.log(max);
}

var arr1 = [3, 6, 2, 56, 32, 5, 89, 32];
// we want to pass through a specific array through the function (array 1)
printMax(arr1)


// Number Six: Get and Print Average
// printAverageOfArray(arr)
// Analyze an array’s values and print the average. 

function calcAvg(arr) {
    // set variable for sum
    var sum = 0;
    // iterate through the array
    for (var i = 0; i < arr.length; i++) {
        // set new value of sum with each iteration
        sum = arr[i] + sum;
        // to get avg, divide sum by length
        avg = sum / arr.length;
    }
    // we want to print the average
    console.log(avg);
}

// pass through a specific array through the function
var arr1 = [3, 6];
// call the function with specific array
calcAvg(arr1)


// Number 7: Array with Odds
// returnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).

function returnOddsArray1To255() {
    var arr = []; // created an empty array
    for(var i = 1; i <= 255; i++) { // run the for loop
        if(i % 2 != 0) { // if the number is odd
            arr.push(i); //add to the empty array
        }
    } 
    console.log(arr); // display the array
}
returnOddsArray1To255(); //activating fx


// Number 8: Square the Values
// squareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values. 

function squareArrayVals(arr) {
    // loop through the array
    for(var i = 0; i < arr.length; i++) {
        // square array value
        arr[i] = arr[i]**2;
    }
    // print new array with squared values
    console.log(arr)
}
var arr1 = [1,2,3,4]
squareArrayVals(arr1)


// Number 9: Greater than Y
// printArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y. 

function printArrayCountGreaterThanY(arr, y) {
    // loop through the array
    for(var i = 0; i < arr.length; i++){
        //only if array value > y, we will print it
        if(arr[i] > y) {
            console.log(arr[i])
        }
    }
    // we want to store the array values greater than y
    // we want to store changes, so we can use it outside of the function
    return arr;
}
arr2 = [1, 3, 5, 7]
printArrayCountGreaterThanY(arr2, 3)


// Number 10: Zero Out Negative Numbers
// zeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero. 

function zeroOutArrayNegativeVals(arr) {
    // loop through the array
    for(var i = 0; i < arr.length; i ++) {
        // only if array value is negative...
        if(arr[i] < 0) {
            //.... we will set it to 0
            arr[i] = 0;
        }    
    }
    console.log(arr);
    // we want to store the array with new replaced values
    // we want to store changes, so we can use it outside of the function
    return arr;
}
var arr5 = [1,-5,10,-2];
zeroOutArrayNegativeVals(arr5)


// Number 11: Max, Min, Average
// printMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.

function printMaxMinAverageArrayVals(arr){
    // we want to create variables for max/min/sum and set initial value to 0
    var max = 0;
    var min = 0;
    var sum = 0;
    // loop thru array
    for(var i = 0; i < arr.length; i++) {
        // comparison statement sets max value
        if(arr[i] > max) {
            max = arr[i];
        }
        // comparison statement sets min value
        if(arr[i] < min) {
            min = arr[i];
        }
        // continually add to sum with array value for each loop
        sum = sum + arr[i];
    }
    // calculate new var called average by dividing sum by length of array
    var avg = sum/arr.length;
    // print out the values we need
    console.log("Max:", + max + ", Min:", + min + ", Avg:", + avg);
}

var arr1 = [1, 3, 5, 7, 9]
printMaxMinAverageArrayVals(arr1)


// Number 12: Shift Array Values
// shiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value 
// and leaving a 0 (zero) value at the end of the array.

function shiftArrayValsLeft(arr) {
    // shift erases the first element of an array
    arr.shift();
    // then we push value 0 to end of array
    arr.push(0);
    // we want to print our new array with the changes we made
    console.log(arr)
}

arr3 = [1, 3, 5, 7, 9]
shiftArrayValsLeft(arr3)


// Number 13: Swap String For Array Negative Values
// swapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.

function swapStringForArrayNegativeVals(arr) {
    // similar to No 10, we loop through array
    for(var i = 0; i < arr.length; i ++) {
        // only if array value is negative....
        if(arr[i] < 0) {
            //.... we replace with a string "Dojo"
            arr[i] = 'Dojo';
        }    
    }
    // we want to print new array with changes
    console.log(arr);
    // we want to store changes, so we can use it outside of the function
    return arr;
}
var arr4 = [1,-5,10,-2];
swapStringForArrayNegativeVals(arr4)
///#######################################///