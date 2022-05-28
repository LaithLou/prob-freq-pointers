"use strict";
/**takes two strings s1,s2, and it checks if the characters of s1
 * are within s2 and in the same order. returns true if true and false if not.
 */
function isSubsequence(s1, s2) {
  let sorted1 = s1.split("");
  let sorted2 = s2.split("");
  debugger;
  for (let i = 0; i < sorted1; i++) {
    if (sorted1[i] === undefined) {
      return false;
    }
    if (sorted1[i] !== sorted2[i]) {
      sorted2.splice(i, 1);
    }
  }
  sorted2.splice(sorted1.length);
  sorted1 = sorted1.join("");
  sorted2 = sorted2.join("");
  return sorted1 === sorted2;
}
