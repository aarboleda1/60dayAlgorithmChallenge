function recurse (op, n) {
	return op ? op.call(op, n) : n
}
function zero(op) {
	return op ? recurse(op , 0) : 0; 
}
function one(op) {
	return op ? recurse(op , 1) : 1; 
}
function two(op) {
	return op ? recurse(op , 2) : 2; 
}
function three(op) {
	return op ? recurse(op , 3) : 3; 
}
function four(op) {
	return op ? recurse(op , 4) : 4; 
}
function five(op) {
	return op ? recurse(op , 5) : 5; 
}
function six(op) {
	return op ? recurse(op , 6) : 6; 
}
function seven(op) {
	return op ? recurse(op , 7) : 7; 
}
function eight(op) {
	return op ? recurse(op , 8) : 8; 
}
function nine(op) {
	return op ? recurse(op , 9) : 9; 
}

function plus(num) {
	return function (n) {
		return num + n	
	}
}
function minus(num) {
	return function (n) {
		return n - num
	}
}
function times(num) {
	return function (n) {
		return num * n		
	}
}
function dividedBy(num) {
	return function (n) {
		return n / num;
	}
}

//seven(times(five()));//, 35);
 four(plus(nine()));//13
eight(minus(three()));
 six(dividedBy(two()))
eight(plus(one()))//9
