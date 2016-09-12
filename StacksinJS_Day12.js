class Stack {
  constructor () {
	this._top = -1;
	this._values = [];
  }
}

let firstStack = new Stack();

Stack.prototype.push = function(data){
	this._top++;
	this._values[this._top] = data;
}

console.log(firstStack)
firstStack.push(1);
firstStack.push(2);
firstStack.push(3)
console.log(firstStack)

/*There are two ways to write pop an element off. First is to use the native pop method */

 //Stack.prototype.pop = function(data){
 //	if(this._top < 0){return null;}
 //	this._top--;
 //	this._values.pop();
// }

/*Second would be to note down the element at the top of the stack, then reduce the top of the array then reduce the length of the array. 
	
	The return value is the element that was popped off at the top of the array*/
Stack.prototype.pop = function () {
	//if the this.top is -1 (aka empty), return null
	if(this._top < 0){
		return null;
	}
	//the element at the top/ or end of the array
	var topElement = this._values[this._top];
	
	//reduce the top or size that we have recorded
	this._top--;
	//reduce the last element of the array
	this._values.length--
    //return the top of the element
   	return topElement
}

/*Peek is just returning the element at the top of the stack*/
Stack.prototype.peek = function () {
	if(this._top < 0){
		return null;
	}
	
	return this._values[this._top]
}
console.log(firstStack.pop())//3
console.log(firstStack.peek())//2
console.log(firstStack.pop()) //2
console.log(firstStack.peek())//1


Stack.prototype.size = function() {
  ///// TODO. Implement this /////
  return this._values.length
}


Stack.prototype.isEmpty = function() {
  ///// TODO. Implement this /////
  if(this._top < 0){
    return true
  } else {
    return false
  }
  // Return true when empty //
  // Return false when not empty
  return undefined;
}

// This is the function that runs test cases.
