/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

  const str1 = "aaaabbcddd";
  const expected1 = "a4b2c1d3";
  
  const str2 = "";
  const expected2 = "";
  
  const str3 = "a";
  const expected3 = "a";
  
  const str4 = "bbcc";
  const expected4 = "bbcc";
  
  /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs. Only encode strings
   * when the result yields a shorter length.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */

   function letterCount(str){
    var newString = ''
    var counter = 0
    for (i =0; i<str.length ; i++){
        if (str[i+1] == str[i]){
            counter += 1          
        }
        else{
            counter +=1
            newString += str[i] + counter
            counter = 0   
        }
    }
    return newString
}


  console.log(counter(str1)); // "a4b2c1d3"
  console.log(encodeStr(str2)); // ""
  console.log(encodeStr(str3)); // "a"
  console.log(encodeStr(str4)); // "bbcc"
  
  /*****************************************************************************/
  
  
  const strA = "a3b2c1d3";
  const expectedA = "aaabbcddd";
  
  const strB = "a3b2c12d10";
  const expectedB = "aaabbccccccccccccdddddddddd";
  
  /**
   * Decodes the given string by duplicating each character by the following int
   * amount if there is an int after the character.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str An encoded string with characters that may have an int
   *    after indicating how many times the character occurs.
   * @returns {string} The given str decoded / expanded.
   */
  //helpful built-ins : isNaN() .repeat() parseInt() 
//   function decodeStr(str) {
//       //Your code here
//   }

const decodeString = string => {
    let repeat
    do {
        repeat = false;
        string = string.replace(/(\d+)\[([^\[\]]+)\]/g, (_, c, v) => {
            repeat = true;
            return v.repeat(c);
        });
    } while (repeat);
    return string;
    }
    
    console.log(decodeString("3[a]2[bc]")); // "aaabcbc"
    console.log(decodeString("3[a2[c]]")); // "accaccacc"
    console.log(decodeString("2[abc]3[cd]ef")); // "abcabccdcdcdef"
    console.log(decodeString("abc3[cd]xyz")); // "abccdcdcdxyz"