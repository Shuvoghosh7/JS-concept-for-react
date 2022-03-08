/* const number =[20,30]
const[x,y]=number
console.log(x) */
/* function boxify(num1,num2){
    const number=[num1,num2]
    return number
}
const [x,y] =boxify(30,40)
console.log(x,y) */
const person = {
    names:'shuvo',
    age:24,
    address:['road-11','house-12','sector-11'],
    subject:{
        CSE:['cse-101','cse-202'],
        math:'math-202'
    }
}
const [road,house]=person.address
// console.log(road,house)
// object destructuring
const student = {
    names:'shuvo',
    age:24,
    address:['road-11','house-12','sector-11'],
    subject:{
        CSE:['cse-101','cse-202'],
        math:'math-202',
        department:{
            major:'computer',
            nonmejor:'Math'
        }
    }


}

const {names,age}=student
console.log(names,age)
const[x,y]=student.address
console.log(x,y)
const{major}=student?.subject?.department
console.log(major)
