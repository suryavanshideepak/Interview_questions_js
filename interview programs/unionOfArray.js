const num1=[5,6,1,5,1]
const num2=[5,5,8,4,1]

const getUnion=()=>{
    let output=[...num1,...num2]
    return [...new Set(output)]
}
console.log(getUnion())
console.log(getUnion().sort())
console.log(getUnion().reverse())