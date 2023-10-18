let num=5
var isPrimeNumber=true;

for(let i=2;i<num;i++){
    if(num % i ==0 ){
        isPrimeNumber =false;
    //     console.log("not a prime")
    // }
    // else{
    //     console.log("prime no.")
    }
}
if(isPrimeNumber=true){
    console.log(`${num}  is a prime num`)
}else{
    console.log(`${num}  is not a prime num`)
}