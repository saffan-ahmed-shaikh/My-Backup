/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  var isTrue = false;
  for (i = 0; i < nums; i++) {
    for (j = i + 1; j < nums; j++) {
      if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
        isTrue = true;
      }
    }
  }
  return isTrue;
};
