//there are many ways of returning the range between two different numbers
//here is a recursive solution that took me an afternoon to implement. no side effects
var range = function(x, y) {
   //termination case
   if(y - x === 0 || y - x === 1){
   	return [];
   }
   if(x > y){
   	//we will be changing value of x so base case is when x - y equal to 2
   	if (x-y === 2){
   		//return value will be 1 more than y. from there we will unshift
         return [y+1];
   	}
      //assign the call on range to a variable 
   	var array = range(x - 1, y);
      //at the bottom of the stack, we the return value will be deinfed as the array initiated above
   	array.unshift(x-1);
   	//once is finishing going up the stack return;
      return array


   }else{
   //base case
   if( y - x === 2 ){
   	return [x+1];
   }else{ 
   	//recursive case
   	  array = range( x, y -1 );
   	 array.push(y-1);
   	 return array;

   }
}
};
//use a for loop?

 //range(8, 9);
 //range(5,5)
 range(7,2);