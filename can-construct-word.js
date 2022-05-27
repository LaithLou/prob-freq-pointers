"use strict";

/**take in a word and letters run them through a frequnecy counter
 * and make sure that we can make words out of the letters. if not return
 * false, otherwise return true.
 */
function canConstructWord(word, letters) {
  //logic modification: check if words is larger than letters.
  if (word.length > letters.length) return false;
  const freq1 = ferquncyCounter(word);
  const freq2 = ferquncyCounter(letters);

  for (let letter in freq1) {
    if (freq1[letter] > freq2[letter]) {
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
