function FibonacciChecker(num) { 
    var prev = 0,
    curr = 1,
    next;
    //loop thru
    for(var i = prev ; i < num; i+= prev){
        next = prev + curr;
        // next = 0 + 1
        // 1 + 1 = 2
        prev = curr;
        //prev = 1
        curr = next;
        // curr = 2
       
        if(next === num){
        	return 'yes';
        }
    }
    return 'no';
    
  // code goes here  
 
         
}