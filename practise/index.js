function hi(name,callback){
    console.log("My name is"+ "" + name)
    callback()
}
function callback(){
    console.log("I am a call back function")
}
greet("deepak",callback)