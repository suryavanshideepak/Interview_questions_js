let arr=[1,5,1,21,51,5,1,2,4,21,35,2,546,879,78,121,6]

let newUniqueArr=[...new Set(arr)]
console.log(newUniqueArr)


// new Set(arr )is Set containing all tha values in arr, which duplicated necessarily removed. Then the 
// spread operator just convert this back into an array.


//array have some duplicate values 
// when we set fn it only gives unique values