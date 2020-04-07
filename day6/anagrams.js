function sortString(string) {
  return string.split('').sort().join('');
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let result = [], obj = {};

  strs.forEach((item, index) => {
    let a = sortString(item);
    if (obj[a]) {
      obj[a].push(index);
    } else {
      obj[a] = [index];
    }
  });

  Object.keys(obj).forEach((item) => {
    let aux = [];

    obj[item].forEach((index) => {
      aux.push(strs[index]);
    });

    result.push(aux);
  });

  return result;
};
