var reverse = function(string) {
  
  var firstLetter = string.substring(0,1);
  var lastLetter = string.substring(string.length-1);
  //base case
  if(string.length === 1 || string.length === 0){
  	return string;
  }
  //recursive case
  return lastLetter + reverse(string.substring(1,string.length-1)) + firstLetter
};

/*pseudocode
	take first and last letter of string 
	find middle letters of string
	once the string is broken down all the way to zero or one 
	pass it back up the call stack
	each return value of last letter can be placed in front and first letter will be placed at end of string
	
*/

reverse('bear') //reab
reverse('anton') //notna
reverse('hippopotomaus')
reverse('Roses are red, violets are blue, all my base are belong to you.')

function Division(num1,num2) { 
  //find smaller number
  var smallerNumber = num1 > num2 ? num2 : num1;
  var gcf = 1;
  //if numbers are equal return one of the numbers. edge case
  if(num1 === num2){
  	return num1;
  }
  //loop thru numbers and use modulo symbol
  for(var i = 2; i <= smallerNumber; i++){
  	if(num1 % i === 0 && num2 % i === 0){
  		gcf = i;
  	}
  }
 
  return gcf;
         
}


Division(7,3) //1
Division(36,54) //18
Division(12,16) //4
Division(4, 2) //2
Division(2,2)//2