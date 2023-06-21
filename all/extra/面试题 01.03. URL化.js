/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
const replaceSpaces = function (S, length) {
  // return
  return S.slice(0, length).replace(/ /g, '%20')
}
