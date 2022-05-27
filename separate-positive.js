"use strict";

/** Takes in an array of non-zero numbers, mutates that array by putting 
 * the positives on the left and negatives on the right (unsorted). 
 * Returns the original, mutated array.
 */
function separatePositive(nonZeros) {
    // removed because we realized this didn't fix our issue
    /*let negCount = 0;
    for(let i = 0; i < nonZeros.length; i++) {
        if(nonZeros[i] < 0) {
            negCount++;
        }
    }

    if(negCount === nonZeros.length) return nonZeros;
    */

    for(let i = 0; i < nonZeros.length; i++) {
        if(nonZeros[i] < 0) {
            nonZeros.push(nonZeros.splice(i, 1)[0]);
        } 
    }

    for(let i = 0; i < nonZeros.length; i++) {
        if(nonZeros[i] < 0) {
            nonZeros.push(nonZeros.splice(i, 1)[0]);
        } 
    }

    return nonZeros;
}
