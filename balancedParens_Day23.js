
// Given a string of opening and closing parentheses, check whether it’s balanced. We have 3 types of parentheses: 
//round brackets: (), square brackets: [], and curly brackets: {}. Assume that the string doesn’t contain any other character than these, no spaces words or numbers. Just to remind, balanced parentheses 
//require every opening parenthesis to be closed in the reverse order opened. For example ‘([])’ is balanced but ‘([)]’ is not.

let balancedParens = (str) => {
	let parensCount = 0, curlyCount = 0, bracketCount = 0;
	for(let i = 0; i < str.length; i++){
		let char = str[i]
		if(char === '('){
			parensCount++
		}else if(char === '{'){
			curlyCount++
		}else if(char === '['){
			bracketCount++
		}else if(char === ')'){
			parensCount--
		}else if(char === '}'){ 
			curlyCount--
		}else if(char === ']'){
			bracketCount--
		}
		if(parensCount < 0 || curlyCount < 0 || bracketCount < 0){
			return false;
		}
	
	}
	return parensCount === 0 && curlyCount === 0 && bracketCount === 0;
	
};

balancedParens('}{')//true
 balancedParens('{}')//true
// balancedParens('[]')//true
// balancedParens(')(')//false
// balancedParens('({})')//true
// balancedParens('[)')//false
// balancedParens('(()))')//false


/*Time complexity
This solution would be linear as we would only need to loop thru the string once. So we can say that the time complexity is O(n). the run time increases linearly with the size of this input.
*/
/*PseudoCode
create counts for three bracket types
loop thru string
if else statements checking type 
increment or decrement depending on whether closing or opening 
if ever gets below zero, return false
this is to handle edge cases such as seeing a closing bracket first
return true if all counts are equal to 0
*/

