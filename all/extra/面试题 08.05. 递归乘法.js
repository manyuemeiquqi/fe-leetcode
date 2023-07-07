/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
const multiply = function (A, B) {
  if (A === 1)
    return B
  if (B === 1)
    return A
  if (B === 0)
    return 0
  if (B % 2 === 0)
    return multiply(A << 1, B / 2)
  else
    return multiply(A, B - 1) + A
}
