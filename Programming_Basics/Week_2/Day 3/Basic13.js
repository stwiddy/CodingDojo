// 1. Print 1-255

function numbersPrint () {
    for (var num = 1; num <= 255; num ++ ) {
        console.log (num);
}
}
numbersPrint()
// 2. Print Odds 1-255

function numbersPrintOdds () {
    for (var num = 1; num <= 255 ; num = num+2 )
        console.log (num);
}

numbersPrintOdds()

// 3. Print Ints and Sum 0-255

function numbersPrintSum () {
    var sum = 0
    for(num = 0; num <= 255; num++) {
        sum += num
        console.log (num, sum);
    }
}

numbersPrintSum ()


// 4. Iterate and Print Array

var arr = [1, 222, 4, 4, 5]
num = 0
function PrintArray(arr) {
for(var num = 0; num  < arr.length; num ++) 
    console.log("This is the number " + arr[num])
}

PrintArray(arr)

// 5. Find and Print Max (Given an Array, Find and Print its largest element)


function PrintMax (arr) {
    var Big = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (Big < arr[i] ) {
            Big = arr[i];
        }
    }
    console.log(Big);
}

var arr1 = [3, 6, 2222, 56, 32, 5, 89, 32];
PrintMax(arr1)


//6. Get and Print Average

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


//7. Array with Odds

function returnOddsArray1To255() {
    var arr = [];
    for (var i = 1; i <= 255; i +=2) {
        arr.push(i);
    }
    console.log (arr)
}

returnOddsArray1To255()


//8. Square the Values
var arr8= [1,2,3,4,5];
function squareArrayVals(arr) {
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] **2;
}
return arr;
}
var squ = squareArrayVals(arr8);

console.log (squ);

//9. Greater than y
var arr9 = [1, 7, 2, 3, 10];
function printArrayCountGreaterThanY(arr, y) {
    for (i = 0; i < arr.length; i++) {
        var count = 0;
        if (arr[i] > y) {
            count ++;
            console.log(arr[i]);
        }
    }
    console.log(count);
}
printArrayCountGreaterThanY(arr9, 5); 



//10. Zero out negative

