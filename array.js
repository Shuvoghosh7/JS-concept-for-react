const number =[10,5,12,13,14]
const string ="Hello world, welcome to the universe"
const length = number.length
console.log(`length: ${length}`)
const indexNumber=number.indexOf(12)
console.log(`indexNumber of 12: ${indexNumber}`)
const position=number[3]
console.log(`position 3 value: ${position}`)
number[0]=20
console.log(`After set value: ${number}`)
number.push(40)
console.log(`After push value last: ${number}`)
number.unshift(50)
console.log(`After push value frist: ${number}`)
number.pop()
console.log(`After pop value frist: ${number}`)
number.shift()
console.log(`After pop value frist: ${number}`)
const result= string.includes("world")
console.log(`Include: ${result}`)
