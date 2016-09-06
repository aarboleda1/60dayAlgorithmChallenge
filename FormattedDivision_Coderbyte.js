// Using the JavaScript language, have the function FormattedDivision(num1,num2) take both 
// parameters being passed, divide num1 by num2, and return the result as a string with properly 
// ormatted commas and 4 significant digits after the decimal place. For example: if num1 is 
// 123456789 and num2 is 10000 the output should be "12,345.6789". The output must contain a 
// number in the one's place even if it is a zero. 

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
// keep this function call here 
FormattedDivision(readline());
console.log(FormattedDivision(10,10))
//console.log(FormattedDivision(2,3))
//console.log(FormattedDivision(123456789, 10000))


//should always have 4 numbers after decimal
//commas
//if it doesn't have a decimal//
//10 divided by 10. to string
//if(!sum.includes('.')){
	//add zeros
	//sum  += '0000'
//}

//length has to be at least 4
