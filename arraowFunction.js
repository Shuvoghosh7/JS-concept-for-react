const squar = () => 5*5
const result = squar()
// console.log(result)
//single parameter
const add =(n)=>n+10
console.log(add(5))

const isEven =(n)=> n%2==0
console.log(isEven(15))

//multiple parameter
const add3Number = (num1,num2,num3)=>num1+num2+num3
console.log(add3Number(2,3,5)) 
//multi line
const doMath = (num1,num2)=>{
    const add=num1+num2
    const sub=num1-num2
    const multi= add*sub
    return multi

}
console.log(doMath(10,5))