// Using the JavaScript language, have the function FormattedDivision(num1,num2) 
// take both parameters being passed, divide num1 by num2, and return the result as 
//  string with properly formatted commas and 4 significant digits after the decimal 
//  place. For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789". 
// The output must contain a number in the one's place even if it is a zero. 

let FormattedDivision = (num1,num2) => {
	let sum = num1/num2;

	sum = sum.toString().split('.')
	//console.log(sum)
	if(sum[1] === undefined){
		sum[1] = '.0000'
		return sum[0] + sum[1];
	} else if (sum[1].length < 4){
		while(sum[1].length < 4){
			sum[1] += '0'
		}
	} else if (sum[1].length > 4){
		sum[1] = sum[1].slice(0,4)
	}

	sum[0] = parseInt(sum[0]).toLocaleString('en')


	
	 
	 return sum[0] + '.' + sum[1]
}
//there is a number indexOf the period + 5th is not undefined
// slice out the 5th number on
console.log(FormattedDivision(10,10))
//console.log(FormattedDivision(2,3))
//console.log(FormattedDivision(8,5))
//console.log(FormattedDivision(123456789, 10000))
