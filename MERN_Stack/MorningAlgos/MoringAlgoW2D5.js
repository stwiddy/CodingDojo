// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg
// Sample interview question for Google : https://www.youtube.com/watch?v=XKu_SEDAykw

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15 , 3, 6];
const targetSum1 = 9;
// expected1 = [0, 2];
// Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
// expected2 = [2, 4];

// BONUS 
//             0  1  2  3  4  5  6
const nums3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
// expected3 = [1, 6];

/**
 * Finds the indexes of the nums that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */

//we want the loop to search for a combination of integers in the array that add up to target value.
//we can use pointers to point to the start and end of the loop.

 // [2, 11, 7, 15] // sum: 9
let twoSums = (nums, targetSum) => {
    let hashMap = {},
      results = []

        for (let i = 0; i < nums.length; i++){
            if (hashMap.hasOwnProperty(nums[i].toString())){ // may need to do parseInt
              // check if the key exists in the hashMap
                results.push([hashMap[nums[i]], i])

            }else{
                hashMap[targetSum - nums[i]] = i;
            }
          }
          return results;
    }
console.log(twoSums(nums1,targetSum1));




// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8

/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
  Hard Bonus: make it O(n) time
*/

const nums4 = [1, 2, 1, 1, 2, 3]; // [1, 1, 1, 2, 2, 3]
const k1 = 2; // First 2 most frequent number
// expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums5 = [0, 2,0, 0, 2, 3]; // [0,0,0,2,2,3]
const k2 = 1; // most frequent number
// expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums6 = [1, 2, 3, 1, 2,  3]; // [1, 1, 2, 2, 3, 3]
const k3 = 3;
// expected3 = [1, 2, 3];
/* 
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
*/

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * nums.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
function kMostFrequent(nums, k) {
  
}