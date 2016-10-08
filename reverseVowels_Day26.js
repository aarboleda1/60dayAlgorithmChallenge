const reverseVowels = (string) =>{
	
	let storage = {};
	let returnArray = new Array(string.length);
	let arr = string.split('');
	let reversedVowel = [];
	//populate object
	arr.forEach(function(letter, index) {
		if(letter !== 'a' && 
		letter !== 'e' &&
		letter !== 'i' &&
		letter !== 'o' &&
		letter !== 'u'
		){
			storage[index]  = letter;
		} else {
			reversedVowel.push(letter);
		}
		
		//reversedVowel = reversedVowel.reverse('');
	
	//loop thru object
	for(var key in storage){
		//place empty array with non vowels;
		returnArray[key] = storage[key]
	}
	})
reversedVowel = reversedVowel.reverse('');
	//place vowels in returnArray
	for(var i = 0; i < returnArray.length; i++){
		var letter = returnArray[i]	
		if(!letter){
	
			returnArray[i] = reversedVowel[0]
			reversedVowel.splice(0,1)
		}
	}
	return returnArray.join('').toString('')
}
reverseVowels('hello')
reverseVowels('leetcode')