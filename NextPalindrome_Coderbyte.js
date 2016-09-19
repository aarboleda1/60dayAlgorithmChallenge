function NextPalindrome(num) { 
	
	var stringNumber;
		
	while(stringNumber){
		
		num++;
		stringNumber = num.toString();
		//check to see if first and last numbers are equal
		if(stringNumber[0] === stringNumber[stringNumber.length-1]){
			
			return parseInt(stringNumber);
		}
		
	}
}
NextPalindrome(99)