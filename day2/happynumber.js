const numToArray = num => `${num}`.split('').map(n => +n);

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let counter = 0;
  let nums = numToArray(n);

  while (counter < 6) {
    const sum = nums.reduce((accumulator, currentValue) => {
      return accumulator + Math.pow(currentValue, 2);
    }, 0);

    if (sum == 1) {
      return true;
    }

    nums = numToArray(sum);
    counter++;
  }

  return false;
};
