//fibonacci sequence 
//0,1,1,2,3,5,8,13,21,34...

const num=100;

let x=0;
let y=1;
 let fn= x+y;
 
 console.log(x)
 while( fn< num){
    console.log(fn)//1,2,5,8,13
    fn=x+y;//2,3
    x=y;//1,2,3,5
    y=fn;//1,2,3,5,8
 }
 //0,