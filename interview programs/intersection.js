//Intersection of two array
var num1=[4,1,,8,7,13,7,15,64,]
var num2=[9,4,64,7,5,2,6,]

const interSectionArray = num1.filter((elem)=>{
    return num2.includes(elem)
})
console.log([...new Set(interSectionArray)])
console.log([...new Set(interSectionArray).reverse()])
