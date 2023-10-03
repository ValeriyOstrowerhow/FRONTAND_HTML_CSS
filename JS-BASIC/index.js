"use strict"
const x = 'word'
    let y = 'another word'
console.log('y', y);

let str1 = 'это строка'
let str2 = 'тоже строка'
let str3 = `$ {str1} и это это строка`
console.log(str3);

let num1 = 2
let num2 = 2.2
console.log(typeof num2);

let boolean1 = true
let boolean2 = false
let string = 'что.то другое'
console.log(typeof boolean1);

let smth
console.log(smth);

console.log(Number.MAX_SAFE_INTEGER)

const cars = [1,2,3,4,5,6,7]
const tmp = 1[0]
1[0] = 7[6]
7[6] = tmp
console.log(cars);
