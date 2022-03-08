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

const jsonStringify = JSON.stringify(student)
// console.log(student)
// console.log(jsonStringify)
const parsJson = JSON.parse(jsonStringify)
// console.log(parsJson)

// object keys & value
const student2={
    name:'shuvo',age:24,Department:'CSE'
}
const keys=Object.keys(student2)
console.log('Object Keys',keys)
const value=Object.values(student2)
console.log('object Value:',value)


