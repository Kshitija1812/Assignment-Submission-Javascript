c3=0
c5=0
for(i=1;i<=100;i++){
s=""
c3++
c5++
if(c3==3){
s=s+"Fizz"
c3=0
  }
if(c5==5){
s=s+"Buzz"
c5=0
  }
if(s===""){   
console.log(i)
 }
else{
console.log(s)
  }
}


//Palindrome
s="madam is walking with her dad and mom"
s=s+" "
word=""
revword=""
for(k of s){
if(k!=" "){  
word=word+k  
revword=k+ revword
  }
else{   
//rev=word.split("").reverse().join("")
//if(rev==word){
    //  
//console.log(word)}
  
if(word==revword){    
console.log(word)
    }   
word=""  
revword=""
  }
}

