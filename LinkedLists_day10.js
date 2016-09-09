/*Create a LinkedList*/

//create a new Node element
function Node (data) {
	this.data= data,
	this.next= null
}

//this creates the head of the LinkedList
function LinkedList () {
  this.length = 0,
  this.head = null
}

//add a push function to the LinkedList
LinkedList.prototype.push = function (data) {
	//create new Node
	var node = new Node(data);
    var currentNode;
    //create a head
    //a new object is created
    //if it is not assiged to anything have it point to 
    if(this.head === null) {
      this.head = node;
    } else {
    	//find the end of the node
    	currentNode = this.head
    	console.log(currentNode)
      
      while(currentNode.next){
      	//console.log(this.next)
        this.next = currentNode.next
      }
      currentNode.next = node;
    }
  this.length++

}

//console.log(new Node)

//create a push/or add function to append new nodes to the LinkedList


//{length: 0, head: {data: data, next: null;}}
var a = new LinkedList(0);
a.push(1)
a.push(2)
a.push(3)
console.log(a);
//console.log(LinkedList(1));
