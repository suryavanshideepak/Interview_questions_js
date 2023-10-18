var array1=[4,5,1,6,6]

var array2=[5,5,13,6,]

// 4>-1

const same= array1.length == array2.length && array1.every((curElem)=>{
    if(array2.indexOf(curElem)>-1){
        return(curElem = array2[array2.indexOf(curElem)])
    }    
})
 
console.log(same)

