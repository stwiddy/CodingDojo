/* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
  Steps:
  1. Pick an number out of the arr to be your pivot value
    - usually the middle idx but can be any.
  2. Partition the array IN PLACE such that all values less than the pivot
      value are to the left of it and all values greater than the pivot value
      are to the right (not perfectly sorted).
  3. return: the index where the left section of smaller items ends.
  "Choosing a random pivot minimizes the chance that you will encounter
  worst-case O(n^2) performance (always choosing first or last would cause
  worst-case performance for nearly-sorted or nearly-reverse-sorted data).
  Choosing the middle element would also be acceptable in the majority of
  cases."
  https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];

// original : [11, 8, 14, 3, 6, 2, 7]
// new.    :  [ 3, 6, 2, 7, 11, 8, 14]
// return the pivot index :3

/* 
There are many possible answers for nums1 depending on which number is chosen
as the pivot.
E.g., if 3 is chosen as the pivot, the below are some solutions because
numbers smaller than 3 are to the left and larger numbers are to the right
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization of quickSort. Focus only on the first cycle of the visualization
 *    for the partition portion only.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */


function partition(arr, start = 0, end = arr.length - 1) {
    var pivot = arr[Math.floor((end + start) / 2)]
    i = start
    j = end
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            let temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
            i++;
            j--;
        }
    }
    return i;
}
// var arr2 = [4,3,5,2,1,6,10,7,8,9] 
console.log(partition(arr1));
// console.log("arr2:", arr2);

function QuickSort(arr, start, end) {
    let index;
    if (arr.length > 1) {
        index = partition(arr, start, end);
        if (start < index - 1) {
            QuickSort(arr, start, index - 1)
        }
        if (index < end) {
            QuickSort(arr, index, end);
        }
    }
    return arr;
}
let sorted = QuickSort(arr1, 0, arr1.length - 1)
let sorted2 = QuickSort(nums2, 0, nums2.length - 1)
let sorted3 = QuickSort(nums3, 0, nums3.length - 1)
let sorted4 = QuickSort(nums4, 0, nums4.length - 1)
console.log("sorted:", sorted);
console.log("sorted:", sorted2);
console.log("sorted:", sorted3);
console.log("sorted:", sorted4);
