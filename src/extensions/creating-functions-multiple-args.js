// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function lowerUpper(lower, upper) {
  const arr = Array(upper - lower).fill(0)
  for (let i = 0; i <= (upper - lower); ++i) {
    arr[i] = i + lower
  }
  return arr
}

// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function exclamation(str, cnt) {
  let strReturn = str.toUpperCase()
  for (let i = 0; i < cnt; ++i) {
    strReturn += '!'
  }
  return strReturn
}

// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below
function clock(str, minutes) {
  const strArr = str.split(':')
  strArr[1] = (parseInt(strArr[1]) + minutes).toString()
  const newHours = Math.floor(parseInt(strArr[1]) / 60)
  if (newHours > 0) {
    strArr[0] = ((parseInt(strArr[0]) + newHours) % 24).toString()
  }
  strArr[1] = (parseInt(strArr[1]) % 60).toString()

  if (strArr[0] === '0') {
    strArr[0] = '0' + strArr[0]
  }
  if (strArr[1].length < 2) {
    strArr[1] = '0' + strArr[1]
  }

  return strArr.join(':')
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: lowerUpper, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: exclamation, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: clock // etc
}
