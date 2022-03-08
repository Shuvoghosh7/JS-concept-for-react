// check turuty
/* let myVer = 5
if(myVer){
    myVer=myVer*5
    console.log(myVer)
}else{
    myVer=0
    console.log(myVer)
}
//cherck false
let num=50
if(!num){

} */
//Ternary operator
const menoy=200
const ex = 100
const drink =(menoy>100 && ex>50)?'Eat birani':'Drink col drinks'
// console.log(drink)

const string='500'
const convertNumber = +string
// console.log(convertNumber)

// && and ||
let isActive =false
const showUser =()=>console.log('display User')
const hideUser =()=>console.log('hide User')
isActive && showUser()
isActive || hideUser()
//
isActive=!isActive