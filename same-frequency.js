"use strict";

/**it takes in two numbers it checks if each digit in both number
 * is the same frequncey, returns true or false.
 */
function sameFrequency(num1, num2) {
  num1 = String(num1);
  num2 = String(num2);

  if (num1.length > num2.length) return false;
  const freq1 = ferquncyCounter(num1);
  const freq2 = ferquncyCounter(num2);

  for (let digit in freq1) {
    if (freq1[digit] !== freq2[digit]) {
      return false;
    }
  }
  console.log("freq1 = ", freq1, "freq2 = ", freq2);
  return true;
}

/** Takes in an iterable argument, creates an object with the key being each value of the
 * argument and the value being the amount of times it repeats. Returns that object
 */
function ferquncyCounter(string) {
  let freqs = {};
  for (let char of string) {
    let val = freqs[char] || 0;
    freqs[char] = val + 1;
  }
  return freqs;
}
