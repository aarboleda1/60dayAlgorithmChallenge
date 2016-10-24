// Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes and 43, 194, 4773 are not palindromes.
// Write a method palindrome_chain_length which takes a positive number and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.
// If the input number is already a palindrome, the number of steps is 0.
// Input will always be a positive integer.
// For example, start with 87:
// 87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884
// 4884 is a palindrome and we needed 4 steps to obtain it, so palindrome_chain_length(87) == 4


//using a whiel loop
const palindrome_chain_length = (num, count) => {
	var isPalindrome = parseInt(num.toString().split('').reverse().join('')); 
	count = count || 0;
	
	if(num === isPalindrome){	
		return count
	}	 
 	while(num !== isPalindrome){
 		
 		isPalindrome = parseInt(num.toString().split('').reverse().join(''))
 		num += isPalindrome
 		isPalindrome = parseInt(num.toString().split('').reverse().join(''))
 		count++
  		
 	}
	return count;
}




// palindrome_chain_length(67)
// palindrome_chain_length(44)
// palindrome_chain_length(87)
/*assumption
number will be positive
//check if it is a palindrome
perhaps use recursion
if it is already a palindrome return count


if num.toString().split()  else go ahead and add it to its reversal
add it to count
//basecase
check if num is a palindrome
return count if it is

else
//do something
have a reversed num
var reversed = num.toString().split('').join('')
reversed = parseInt(reversed);
return reversed + palindrome_chain_length(num)
*/

/*RECURSIVELY*/
var palindrome_chain_length = function(num, count){
	var isPalindrome = parseInt(num.toString().split('').reverse().join('')); 
	count = count || 0;
	//recursive case
	if(num === isPalindrome){
	
		return count
	}
	count ++;
	return palindrome_chain_length(num + isPalindrome, count) 	
}


palindrome_chain_length(67)
//palindrome_chain_length(44)
//palindrome_chain_length(87)