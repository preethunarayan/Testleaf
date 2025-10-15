//define
//let originalWord="madam"
let originalWord="hello"
//let originalWord="level"
//split word
let characters=originalWord.split("")
let reversedName=""
//reverse the word
for (let i=characters.length-1;i>=0;i--){
     reversedName=reversedName+characters[i]
}
//print
console.log("The reversed word is:" +reversedName)

if(originalWord==reversedName){
    console.log("The word is a palindrome")
}
else{
    console.log("Not a palindrome")
}

