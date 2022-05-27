"use strict";

/**  Takes array of nums and a targetAvg, checks if there is
 *  is a pair of numbers that has an average of targetAvg.
 * If so, return true, if not return false.
*/
function averagePair(nums, targetAvg) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const average = (nums[left] + nums[right]) / 2;

        if (average === targetAvg) {
            return true;
        } else if (average < targetAvg) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}

