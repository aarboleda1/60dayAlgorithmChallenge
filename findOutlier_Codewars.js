// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns N.

// For example:

// [2, 4, 0, 100, 4, 11, 2602, 36]

// Should return: 11

// [160, 3, 1719, 19, 11, 13, -21]

// Should return: 160
/*
Should check for first variable
if first three are odd, look for even and return even
if first two are odd look for even 
if first number is even, and second is odd, look at third number, if it is odd, return array[0]
if first number is odd, and second is even, look at third number, if it is odd, return array[0]
*/


function findOutlier (integers) {
	var evens = integers.filter(function (num) {
		return num % 2 === 0 
	})
	var odds = integers.filter(function (num) {
		return num % 2 === 1 
	})
	return evens.length === 1 ? evens[0] : odds[0];
}

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])
//findOutlier([160, 3, 1719, 19, 11, 13, -21])