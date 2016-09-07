// Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node 
// with value 3, the linked list should become 1 -> 2 -> 4 after calling your function

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 /**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 

function ListNode(val) {
    this.head = null;
}
ListNode.prototype.push = function (val) {
  	 node = {
  	 	value: val,
  	 	next: null
  	 }
  	 if(!this.head){
  	 	this.head = node;
  	 } else{
  	 	current = this.head;
  	 	while (current.next){
  	 		current = current.next
  	 	}

  	  current.next = node;
  	 }

};

//use case 
//{val: 1, next: {val: 2, next: {val: 3, next: {val: 4; next: null}}}}
//pass in


  var a = new ListNode() //new object instantiation 
  console.log(a)
  console.log(a.push(1));
  console.log(a.push(2));
  console.log(a.push(3));
  console.log(a.push(4));

console.log(a.head)
console.log(a.head.next)