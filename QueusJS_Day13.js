class Queue {
    constructor () {
        this.head = 0;
        this.data = [];
    }
}

let q = new Queue;
Queue.prototype.enqueue = function (value) {
    this.data.push(value)
    
}

Queue.prototype.dequeue = function () {
    if(this.head < 0 || this.head > this.data.length){
        return null;
    }
    //first call do deque will be at this.data[0]
    var dequedItem = this.data[this.head];
    //the 'this.data' array remains the same
    //we increment this.head so that the next call will point to the next item in the array
    this.head++
    
    return dequedItem;
    
}

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q)



















/**
 * @constructor

 More Review from Yesterday
 */
 //creating a new Stack
var Stack = function() {
    this.length = -1;
    this.value = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {

   this.length++;
   
   this.value[this.length] = x;
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    //if Stack is empty
    if(this.value < 0){
        return null;
    }
    //top element
    var topElement = this.value[this.length];
    this.length--;
    //reduce last element of the array
    this.value.length--;
    
    return topElement
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    if(this.length < 0){
        return [];
    }
    return this.value[this.length];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
   
   return this.length < 0 ? true: false;
    
};