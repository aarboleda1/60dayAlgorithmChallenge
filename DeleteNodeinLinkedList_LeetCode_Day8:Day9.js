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
 

// function ListNode(val) {
//     this.head = null;
// }
// ListNode.prototype.push = function (val) {
//   	 var node = {
//   	 	value: val,
//   	 	next: null
//   	 }
//   	 if(!this.head){
//   	 	this.head = node;
//   	 } else{
//   	 	current = this.head;
//   	 	while (current.next){
//   	 		current = current.next
//   	 	}

//   	  current.next = node;
//   	 }

// };

//use case 
//{val: 1, next: {val: 2, next: {val: 3, next: {val: 4; next: null}}}}
//pass in


//   var a = new ListNode() //new object instantiation 
//   console.log(a)
//   console.log(a.push(1));
//   console.log(a.push(2));
//   console.log(a.push(3));
//   console.log(a.push(4));

// console.log(a.head)
// console.log(a.head.next)

/*Create a LinkedList*/

let Node = function (val) {
    this.val = val;
	this.next = null;
} 

let LinkedList = function () {
	this.length = 0;
	this.head = null
}

 LinkedList.prototype.add = function (val) {
   let node = new Node(val)
   let currentNode = this.head;
   //if an empty list
   if(!currentNode){
     this.head = node;
     this.length++;

     return node;
   }
   //if a non-empty list
   while(currentNode.next){
   	currentNode = currentNode.next
   }
   currentNode.next = node;
   this.length++;
   return node;

 }


let a = new LinkedList(1);
//created the head of a LinkedList;
//console.log(a)
a.add(2) //to equal {val: 1, next: {val: 2, next: null}}
console.log(a)
a.add(3)
console.log(a)
//problem to solve//need to make a point to 

//



//test cases
//if no head is given
//create a node. 




/*NODE DELETION*/




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

//  function ListNode(val) {
//       this.val = val;
//       this.next = null;
//   }
// var deleteNode = function(node) {
//      node = new ListNode();
//      console.log(this);
// };
// deleteNode()

// var a = {data: 1, next: {data: 2, next: {data: 3, next: {data: 4, next: null}}}}

//var result = {data: 1, next: {data: 2, next:  {data: 4, next: null}}}

//need next to point to last node;


// Read the problem completely twice.
// Solve the problem manually with 3 sets of sample data.
// Optimize the manual steps.
// Write the manual steps as comments or pseudo-code.
// Replace the comments or pseudo-code with real code.
// Optimize the real code.


//ASSUMPTIONS
//DO NOT RETURN ANYTHING IN THIS FUNCTION
//you are given the node to delete
//node is already created

//MANUAL SOLVING
//node 
//node to delete = {data: 3 next}
//have the






