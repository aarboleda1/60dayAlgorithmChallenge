// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

 //persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
 //                      // and 4 has only one digit

 //persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
 //                       // 1*2*6 = 12, and finally 1*2 = 2

 //persistence(4) === 0 // because 4 is already a one-digit number
 
const persistence = num => {
 	let count = 0;
 	if(num < 10 ) {
 		return count
 	} else {
 		while (num >= 10) {
 			num = num.toString().split('').reduce((product, num) => {
 				return product * num
 			},1)
 		count++
 		}
 	return count
 	} 
 	
 }
 persistence(25)
//persistence(4)
 persistence(25)
 //persistence(4)
/*
PSEUDOCODE
have a count 
use while loop -- this will terminate when num is less than 10
in the while loop
break down the number 
	//turn it to string, then an array. multiplyl all the integers in it.
	//this will be the new num
	//keep multiplying 
*/