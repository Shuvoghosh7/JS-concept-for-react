const products =[
    {name:'laptop',price:20000,color:'black'},
    {name:'mobile',price:10000,color:'blue'},
    {name:'watch',price:2000,color:'browen'},
    {name:'Ipad',price:50000,color:'golden'},
    {name:'Ipad',price:50000,color:'golden'}
];
const result = products.map(product =>product.name)
// console.log(result)

// foreach 
products.forEach(product => console.log(product.color))
products.forEach(product => console.log(product.price))
// filter
const color = products.filter(product => product.color === 'blue')
console.log(color)
const names = products.filter(product => product.name.includes('l'))
console.log(names)
//find
const name =products.find(product => product.name === 'Ipad')
console.log(name)