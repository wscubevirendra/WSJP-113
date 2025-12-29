const otpGenerator = require('otp-generator')
const add = require("./calc")
console.log(add(2, 5))

console.log(otpGenerator.generate(10, { upperCaseAlphabets: true, specialChars: true }));