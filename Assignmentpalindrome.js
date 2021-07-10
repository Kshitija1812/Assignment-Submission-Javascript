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


