// // The input is a string str of digits. Cut the string into chunks of size sz (ignore the last chunk if its size is less than sz).

// // If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse it; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

var revrot = function (str, sz) {
	var nums = []
	if(sz < str.length){
		while(str.length >=sz){
			nums.push(str.slice(0,sz))
			str = str.slice(sz)
		}
	}
	
	nums = nums.map(function (chunk) {
		var sum = chunk.replace(/[02468]/g,'').length
		//shift if odd and reverse if sum is even
		if(sum % 2 === 0){
		    return chunk.split().reverse()
		} else {
			
			return chunk.slice(1) + chunk.slice(0,1)  
			
		}
	})
	
	return nums.join('')
}