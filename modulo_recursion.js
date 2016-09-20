// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y, alwaysY) {

	 alwaysY =  alwaysY || y;
	 
	if(x < 0 && x > -10 && y < 10){
		return 0
	}else if(x < 0 & y > 0 ) {
		return x
	}else if(x === 0 && y === 0 ){
		return NaN
	}else if(x === 0) {
		return 0;
	}else if(x < 0 && y > 0 ){
		x = -x
	}else if(x < 0 && y < 0 && x < y){
		return x - (y)
	}else if(x < 0 && y < 0 && y < x){
		return x
	}else if (x < y && x > 0) {
		return x;
	} else if(x-y < alwaysY){
		return x-y
	} 
	
 
	
	return modulo(x, y + alwaysY, alwaysY)
	
};
