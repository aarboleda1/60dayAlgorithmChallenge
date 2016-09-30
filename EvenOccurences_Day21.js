// Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items. For example, if given the input of [1, 2, 2, 3, 4, 4, 4, 4], the output should be 2

let evenOccurence = (arr) => {
	let map = {}
	let current = null;
	//place each number in an array. value will be a count of how many occurences in the array
	arr.forEach(function(currentNum){
		map[currentNum] = map[currentNum] ? map[currentNum] += 1 : 1;
	})
	//loop thru map find first occurence thats even
	for(let j = 0; j < arr.length; j++){
			
		if( map[arr[j]] % 2 === 0 ){
			
			return arr[j];
		}
	}
	return null;
}

evenOccurence([1,2,2,4]) //2
evenOccurence([1,1,2]) //1
evenOccurence([2,2,2,5,5]) //5
evenOccurence([1,2,1,4,1,16,16])//16
//Assumptions
//Array will not be empty

/*
PSEUDOCODE
loop thru array
place each number in storage using an map
loop thru the array once again
this time, check if the count of the number is even in the Object
//if even return;
*/

/*Time Complexity
O(n). The time complexity will be the same as the number of items in the set. 
The algorithm will run linearly, making it O(n)
*/