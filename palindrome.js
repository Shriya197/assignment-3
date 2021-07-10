// program to find palindromes in a given sentence
//LETSUPGRADE JAVASCRIPT ZERO TO HERO

 s = "madam is driving a racecar "

word = ""
for( t of s){
  
  if(t!=" "){
    word = word +t
  }
  else{
    rev =""
    for(i of word){
      rev = i+rev
    }
    if(rev == word){
      console.log(word)
      
    }
    word = ""
  }
}