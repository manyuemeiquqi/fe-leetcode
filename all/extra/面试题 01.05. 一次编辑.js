/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
const oneEditAway = function (first, second) {
  const len1 = first.length
  const len2 = second.length
  let flag = true
  if (Math.abs(len1 - len2) > 1) {
    return false
  }
  else {
    let i = 0
    let j = 0
    while (i < len1 || j < len2) {
      if (first[i] === second[j]) {
        i++
        j++
      }
      else {
        if (flag) {
          flag = false
          if (len1 > len2) {
            i++
          }
          else if (len1 < len2) {
            j++
          }
          else {
            const idx = first.indexOf(second[j])
            first[idx] = first[i]
            i++
            j++
          }
        }
        else { return false }
      }
    }
    return true
  }
}
