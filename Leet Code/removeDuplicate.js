const removeDuplicates = function (nums) {
  let temparr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      delete nums[i + 1];
      continue;
    } else {
      if (nums[i] !== undefined) {
        temparr.push(nums[i]);
      }
    }
  }
  console.log(nums);
  console.log(temparr);
  let k = nums.length;
  return k, nums;
};

var arr = [1, 1, 1, 2];

removeDuplicates(arr);
