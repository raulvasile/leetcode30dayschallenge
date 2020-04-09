const build = (string) => {
  let newString = [], length = string.length;

  for (let i = 0; i < length; i++) {
    if (string[i] == '#') {
      newString.pop();
    } else {
      newString.push(string[i]);
    }
  }

  return newString.join('');
}

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  return build(S) === build(T);
};
