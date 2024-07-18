// 1/
let i = 1
while (i <= 10) {
  console.log(i)
  i++
}

// 2/
let w = 1
while (w <= 20) {
  if (w % 2 == 0) console.log(w)
    w++
}

// 3/
let a = 1
while (a<=10){
  console.log(a*3)
  a++
}
// 4/
let q = 10
while (q>=1){
  console.log(q)
  q--
}

// 5/

function printNumber(start,end){
  for(let i = start; i<= end; i++)
    console.log(i)
}
printNumber(1,10)

// 6/
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
      result = result * i;
  }
  return result;
}
console.log (factorial(9));





  function spellLetters(str){
    for(let i=0; i<str.length; i+=1){
        console.log(str[i])
    }    
  }
spellLetters("hello")



// HOMEWORK
// 1/

 function uppercaseWord(word){
  let result = ""; 
  for (let i = 0; i < word.length; i++){
    if(i % 2 == 1){
      result = result + word[i].toUpperCase();
    }else{
      result = result + word[i];
    }
    
  }
  console.log(result);
 }
 uppercaseWord("hello")


//  2
function checkLetter(letter){
  let result = "No"
  for (let i = 0; i < letter.length; i++){
    if(letter[i]=="y"){
      result="Yes";
    }
  }
  console.log(result)
}

checkLetter("yahoo")


// 3

function printString(word){
  let result = "";
  for(let i = 0; i < word.length; i++){
    result = result + word[i].toUpperCase() + " ";
  }
  console.log(result);
}
printString("anuna")

//  4

function countLetters(word1,word2){
  if (word1.length > word2.length){
    console.log(word1 + " is longer than "+ word2)
  }else if(word1.length < word2.length){
    console.log(word2 + " is longer than "+ word1)
  }else {
    console.log("Both word have the same number of letters")
  }
}
countLetters("anuna","enkhjin")

