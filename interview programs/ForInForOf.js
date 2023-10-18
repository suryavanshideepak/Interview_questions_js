//diff between for in and for of
const names=["deepak","sumit","jkfdslkfj","ldjfl"]

for (let i=0; i<names.length; i++){
    console.log(names[i]);
}

//for in

for(let elem in names){
   console.log(elem)
}
//shows only index no.
//for of

for(let elem of names){
    console.log(elem)
}
//show elements of array