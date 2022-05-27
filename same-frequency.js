"use strict";

/**it takes in two numbers it checks if each digit in both number
 * is the same frequncey
 */
function sameFrequency() {}

function ferquncyCounter(string) {
  let freqs = {};
  for (let char of string) {
    let val = freqs[char] || 0;
    freqs[char] = val + 1;
  }
  return freqs;
}
