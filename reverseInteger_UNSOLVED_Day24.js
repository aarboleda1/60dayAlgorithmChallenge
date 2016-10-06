let reverseInteger = (num) => {
	let reverseNumber = 0;
	while(num > 0){
	 reverseNumber = parseInt(reverseNumber * 10);
 	 reverseNumber = parseInt(reverseNumber + (num%10));
 	 num = parseInt(num/10);
	}
	return reverseNumber
}


reverseInteger(12)//21
reverseInteger(123)//321
reverseInteger(12345)//54321

/*Assumptions
Cannot use any string methods or array methods
use the MathObject?

*/
/*PseudoCode 
set reverse to zero
while number is less than zero...do
reverse number is equal to reverse number times 10 parseInt //first loop around rn will still be zero
reverse number is equal to parse Integer reverse Number plus num modulo 10 to get the remainder the second digit
number is equal to num / 10 parse Int, keep breaking it down until it hits zero
*/
