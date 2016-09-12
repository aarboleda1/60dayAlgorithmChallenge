function EvenPairs(str) { 
  for(var i = 0 ; i < str.length; i++){
      if(parseInt(str[i]) % 2 === 0){
          var singleDigit = parseInt(str[i+1]);
          var doubleDigit = parseInt(str[i + 1] + str[i + 2])
          if(singleDigit % 2 === 0){
              return true
          } else if (doubleDigit % 2 === 0){
              return true;
          }
      }
      
  }
  // code goes here  
  
       return false;
}
   
// keep this function call here 


//EvenPairs("f178svg3k19k46") //true
//EvenPairs("7r5gg812")//true
//EvenPairs("3gy41d216")//true
//EvenPairs("5678dddd")
//EvenPairs("128fk9846mf78")
//EvenPairs("jfb735f9ph8152")
//EvenPairs("106a")
