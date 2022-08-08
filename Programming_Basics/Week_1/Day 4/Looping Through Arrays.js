// arrays

// KEY


// // #1
// var arr1 = [8, 6, 7, 5, 3, 0, 9];
// // #2
// var arr2 = [4, 7, 13, 13, 19, 37, -2];
// // #3
// var arr3 = [6, 2, 12, 14, -24, 5, 0];


// Part 1
var arr = [8, 6, 7, 5, 3, 0, 9];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


// Part 2

var arr2 = [4, 7, 13, 13, 19, 37, -2]; 
var sum = 0;

for (var i = 0; i < arr2.length; i++) {
    sum += arr2[i];
    console.log(sum);
    console.log(i)  
}

//Part 3

var arr3 = [6, 2, 12, 14, -24, 5, 0]; 
for (var i = 0; i < arr3.length; i++) {
    if (arr3[i] > 5) {
        console.log(arr3[i])
    }
}
