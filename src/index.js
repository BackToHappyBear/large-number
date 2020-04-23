/**
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
export default function add(str1, str2) {
  let length1 = str1.length - 1
  let length2 = str2.length - 1
  let ret = ''
  let carry = 0

  while (length1 >= 0 || length2 >= 0) {
    let v1 = +str1[length1]
    let v2 = +str2[length2]

    let num1 = 0
    if (length1 >= 0) {
      num1 = +v1
      length1--
    }

    let num2 = 0
    if (length2 >= 0) {
      num2 = +v2
      length2--
    }

    let sum = num1 + num2 + carry
    if (sum >= 10) {
      carry = 1
      sum -= 10
    } else {
      carry = 0
    }

    ret = sum + ret
  }

  if (carry) {
    ret = carry + ret
  }

  return ret
}

// '999' '1'
console.log(add('999', '1'))
console.log(add('123', '321'))
console.log(add('1', '999'))
