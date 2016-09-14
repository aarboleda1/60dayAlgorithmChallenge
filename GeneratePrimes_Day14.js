//a function that generates all the primes up to a given limit


let primeGenerator = (limit) => {
	
	let primes = [];
	let bools = [];
	//loop to put all numbers into list
	//generate a list of booleans all set to true first
	for(var i = 1; i < limit; i++){
		bools.push(true);
	}
	
	//loop from 2 to limit setting composite numbers to false
	for(var j = 2; j < limit; j++ ){
		if(bools[j-2]){
			for(var k = j * 2; k <= limit; k += j){
				bools[k-2] = false
			}
		}
	}
	
	//from here, create list of primes only where there is a true value in boolean array
	for(var p = 0; p < bools.length; p++){
		if(bools[p]){
			primes.push(p + 2)
		}
	}
	return primes

}

primeGenerator(30)

//generate all numbers up from 1 to limit
//removes 1 because it is not a prime number
//then sees two which is prime and then remove all multiples of two from list
//sees 3- removes all multiples of 3 from list
//sees 5 removes all multiples of 5 from the list