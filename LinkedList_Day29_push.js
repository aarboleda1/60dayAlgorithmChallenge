var Node = function (val) {
	this.val = val;
	this.next = null;
}

var LinkedList = function () {
	this.length = 0; 
	this.head = null;
 
}




LinkedList.prototype.add = function (val) {
	var node = new Node(val);
	if(!this.head){
		this.head = node;
	} else {
		var currentNode = this.head
		while(currentNode.next){
			currentNode = currentNode.next;
		}
		currentNode.next = node;
	}
	this.length++
}
var numList = new LinkedList ();
numList.add(1)
numList.add(2)
numList.add(3)
numList.add(4)
console.log(numList)