function permutation (string) {
	var results = [];
	//base case
	if(string.length === 1){
		results.push(string);
		return results;
	}
	
	for(var i = 0; i < string.length; i++){
		
		var first = string[i];
		//this will be the inner permutation we will work with
		var restOfCharacters = string.substring(0,i) + string.substring(i + 1);
		var innerPerm = permutation(restOfCharacters);
		//push the first letter of each copmutation to each combo of the rest of the strings;
		for(var j = 0; j < innerPerm.length; j++){
			 results.push(first + innerPerm[j]);
		}
	}
	return results
	
}


permutation('abc')//['abc','bac']
/*
a + bc
a + cb
'abc'
'bac'
'cab'
'bca'
'acb'
'cba'
*/

/*PSEUDOCODE
create a results array
//BASECASE
if string is one char, put it in that restuls array, we'll add the rest later
return the results array
//RECURSIVECASE
loop thru the string
separate the first character from the rest of the rest of chars
create a variable that will be an array. assign it to the recurisve call of permutation(restofCharacters)
loop thru the innerpermutation array
add the first character to each permutated inner characters
*/