/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";


// /**
//  * Reverses the given str.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str String to be reversed.
//  * @returns {string} The given str reversed.
//  */

// const str1 = "creature";
// const expected1 = "erutaerc";

// const str2 = "dog";
// const expected2 = "god";

// const str3 = "hello";
// const expected3 = "olleh";

// const str4 = "";
// const expected4 = "";

var string1 = ("creature")
var string2 = ("dog")
var string3 = ("hello")
var string4 = ("")

function reverseString(string) {
    var RString = ''
    for (var i = string.length - 1; i >= 0; i--) {
      RString += string[i]
    }
    return RString
}
console.log(reverseString(string1)); // "erutaerc"
console.log(reverseString(string2)); // "god"
console.log(reverseString(string3)); // "olleh"
console.log(reverseString(string4)); // "


/*****************************************************************************/