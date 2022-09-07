// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

// 2 --> squareMatrix[0][1]
const squareMatrix1 = [  
    [1, 2, 3],  // squareMatrix1[r][c]
    [4, 5, 6], 
    [9, 8, 9], 
  ];
                        
  const expected1 = 2;
  /* 
    left to right diagonal: 1 + 5 + 9 = 15
   // [0][0], [1][1], [2][2]
    right to left diagonal: 3 + 5 + 9 = 17
  // [0][2], [1][1], [2][0]
    absolute difference = 2
  */
  
  const squareMatrix2 = [
    [1, 2, 3, 4, 5], 
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ];
  const expected2 = 0;
  /* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */
  
  /**
   * Calculates the absolute diagonal difference of a square matrix.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
   *    a square matrix (rows and columns).
   * @returns {number} Represents the absolute difference between the top left to
   *    bottom right diagonal and the top right to bottom left diagonal.
   */
  function diagonalDifference(sqrMatrix) { 
      let sum = 0;
      let i;
      for (i = 0 ; i < sqrMatrix.length ; i++) {
          sum += sqrMatrix[i][i];
          console.log("indexes: ", sqrMatrix[i][i])
      }
      return sum
  }
  
  // console.log(diagonalDifference(squareMatrix1))
  // console.log(diagonalDifference(squareMatrix2))
  
  function diagonalDifference2(sqrMatrix) { 
      let sum = 0;
      let i = 0;
      let j = [sqrMatrix[i].length-1];
      while (i < sqrMatrix.length) {
          sum+= sqrMatrix[i][j];
          i++;
          j--
          console.log("sum: ", sum, "i: ", i, "j: ", j )
      }
      return sum
  }
  
  // console.log(diagonalDifference2(squareMatrix1))
  // console.log(diagonalDifference2(squareMatrix2))
  
  function diagonalDifference3(sqrMatrix) {
      const sumA = diagonalDifference(sqrMatrix);
      console.log("sumA: ", sumA)
      const sumB = diagonalDifference2(sqrMatrix);
      console.log("sumB: ", sumB)
      let difference = Math.abs(sumA - sumB);
      console.log("difference ", difference)
      return difference
  }
  
  console.log(diagonalDifference3(squareMatrix1))
  console.log(diagonalDifference3(squareMatrix2))