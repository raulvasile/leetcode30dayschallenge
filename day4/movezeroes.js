/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let index = 0, max = nums.length;

  while(index < max) {
    if (nums[index] === 0) {
      nums.splice(index, 1);
      nums.push(0);
      max--;
    } else {
      index++;
    }
  }
};
