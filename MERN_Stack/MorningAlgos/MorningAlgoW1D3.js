// - Array / bar visualization:
//       https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
//   - Stable sort, efficient for small data sets or mostly sorted data sets.
//   Time Complexity
//     - Best: O(n) linear when array is already sorted.
//     - Average: O(n^2) quadratic.
//     - Worst: O(n^2) quadratic when the array is reverse sorted.
//   Space: O(1) constant.
//   - this sort splits the array into two portions (conceptually, not literally).
//   - the left portion will become sorted, the right portion
//       (that hasn't been iterated over yet) is unsorted.
//   can shift OR swap target element until it reaches desired position
//   shifting steps:
//   1. consider the first item as sorted
//   2. move to the next item
//   3. store current item in a temp var (to make this position available to shift items)
//   4. if item to the left of current is greater than current item, shift the
//       left item to the right.
//   5. repeat step 4 as many times as needed
//   6. insert current item
//   7. move to the next item and repeat
//   swap steps:
//   1. consider the first item as sorted
//   2. move to the next item
//   4. if item to left of current item is less than current, swap
//   5. repeat step 4 until item to left is less than current item
//   6. move to next item and repeat
// */

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given array in-place.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
function insertionSort(nums = []) {
  for(let i=0;i<nums.length;i++){
    //first element of our new unsorted array
    //const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
    let myarr=nums[i];
    //Practice iterate1:myarr=9
    //Practice iterate2:myarr=2
    //last element of the sorted array
    //Practice iterate1:j=-1
    //Practice iterate2:j=0
    let j=i-1;
    //i= 0  j wil be -1 making while false never runs
    //if its not the first element in the array AND the next element in the unsorted array is less than the element in our sorted array move the element in our sorted array to the next indices and decrement j in the loop.
    //Practice iterate1:loop wont run
    //Practice iterate2:j=0 && 2<9
    while((j>-1) && myarr<nums[j])
    {
      //Practice iterate2:nums[1] =nums[0] or nums[1]=9
        
        nums[j+1] =nums[j];
      //decrement j and get out of loop
        j--;
    }
    //nums[-1+1]=nums[0]
    //if the while loop containing j finished will assign the unsorted array to 
    //Practice iterate1:nums[0] =9
    //Practice iterate2:j[1]=2
    nums[j+1]=myarr;
  }
  return nums;
}

console.log(insertionSort(numsOrdered));
console.log(insertionSort(numsRandomOrder));
console.log(insertionSort(numsReversed));