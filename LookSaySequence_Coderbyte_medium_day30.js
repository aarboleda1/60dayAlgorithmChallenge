// Using the JavaScript language, have the function LookSaySequence(num) take the num parameter being passed and return the next number in the sequence according to the following rule: to generate the next number in a sequence read off the digits of the given number, counting the number of digits in groups of the same digit. For example, the sequence beginning with 1 would be: 1, 11, 21, 1211, ... The 11 comes from there being "one 1" before it and the 21 comes from there being "two 1's" before it. So your program should return the next number in the sequence given num. 


 const LookSaySequence = (num) => {
	let arr = num.toString().split('')
 	
	let returnString = '';
 	for(let i = 0; i < arr.length; i++){
 		let currentNum = arr[i]
 		let next = arr[i + 1]
 		if(currentNum !== next){
 			returnString += ('1' + currentNum.toString())
			
 		} else {
 			let count = 0;
 			let j = i;
 			while(arr[j] === next){
 				count++
			j++
				
 			}
			
		returnString += (count.toString() + currentNum.toString());
	
		i += count -1
 		}
 	}
 	return returnString
 }
LookSaySequence(1);//one 1 ===11
LookSaySequence(3);//one 3 == 13
LookSaySequence(7);//one 7 == 17
//LookSaySequence(121);//111221
LookSaySequence(1911);// 111921
