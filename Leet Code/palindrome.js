// const isPalindrome = () => {
//   let a = 121;
//   var rev = "";

//   while (a >= 1) {
//     let ab = rev % 10;
//     rev += a;
//     a = Math.floor(a / 10);
//   }
//   console.log(rev);
// };
// isPalindrome();

const retrunIndex = (nums, target) => {
  //   let temp = array[0];
  console.log(nums.length);
  let retArray = [];
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    console.log(nums[i]);
    console.log(nums[j]);
    if (nums[i] + nums[j] == target) {
      retArray.push(i);
      retArray.push(j);
      break;
    }
  }
  return retArray;
};
var myarray = [3, 2, 3];
var target = 6;
var result = retrunIndex(myarray, target);
console.log(result);
