// copy product array and add new product
const products =[
    {name:'laptop',price:20000,color:'black'},
    {name:'mobile',price:10000,color:'blue'},
    {name:'watch',price:2000,color:'browen'},
    {name:'Ipad',price:50000,color:'golden'},
    {name:'Ipad',price:50000,color:'golden'}
];

const newProducts={name:'bag',price:2000,color:'yellow'}

const newArray=[...products,newProducts]
// console.log(newArray)

//create new array without specifick item
const remaingProduct=products.filter(pro=>pro.name !== 'mobile')
console.log(remaingProduct)