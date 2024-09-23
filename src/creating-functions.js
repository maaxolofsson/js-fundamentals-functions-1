// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function plusOne(n) {
  return n + 1
}

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// TODO: write code below

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below
function smiley(str) {
  return 'Hi, ' + str.charAt(0).toUpperCase() + str.slice(1) + ' :)'
}

// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below
function noStrings(arr) {
  let counter = 0
  arr.forEach((el) => {
    if (typeof el === 'string') counter++
  })
  return counter
}

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below
function addEdward(obj) {
  if (!Object.hasOwn(obj, 'edward')) {
    obj.edward = 'amazing'
  }
  return obj
}

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: plusOne, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalize, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smiley, // etc
  d: noStrings,
  e: addEdward
}
