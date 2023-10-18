const findvowel=()=>{
    let char= prompt('Enter the alphabet')
    char = char.toLocaleLowerCase()
    if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u'  ){
        console.log('char is vowel')
    }else{
        console.log("char is consonent")
    }
}
findvowel()
