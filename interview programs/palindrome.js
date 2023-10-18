const revInt=(num)=>{
   const myRevNum= num.toString().split("").reverse().join("")
   if(myRevNum.endsWith("-")){
      myRevNum ="-" + myRevNum
      return parseInt(myRevNum)
   }
   console.log(myRevNum)
}
revInt(256)


//firstly convert it into string
//then split string
// then reverse it
// then join back to normal  