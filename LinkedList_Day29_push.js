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
	this.length++;
}



LinkedList.prototype.remove = function (index) {
	//check to see if it itemAt is inbounds
	if( index < 0 || index > this.length){
		return null;
	} else {
		//find the index the node
		//save the node 
		//delete the node
		//move previous pointer to next pointer 
		//return the node;
		var previousNode;
		var current = this.head;
		var counter = 0;
		//find index of node;
		while(counter < index){
			previousNode = current;
			current = current.next;
			counter++;
		}
		previousNode.next = current.next
		this.length--
	}
	//console.log(previousNode)
	return current.val;
}
LinkedList.prototype.itemAt = function (index) {
	//check to see if it itemAt is inbounds
	if( index < 0 || index > this.length){
		return null;
	}
	else {
		var counter= 0;
		let currentNode = this.head;
		
		while(counter < index){
			currentNode = currentNode.next;
			counter++;
		}
	return currentNode.val;		
	}
}

LinkedList.prototype.removeDups = function () {
	var previous = this.head;
	var current = this.head.next;
	var hash = {};
	
	while(current !== null){
		if(!hash[current.val]){
			hash[current.val] = true;
		} else {
			previous.next = current.next;
			this.length--
		}
		//deletion of the node so we can keep looping thru;
		previous = current;
		current = current.next;
	}
	
}


var numList = new LinkedList ();
numList.add(1)
numList.add(2)
numList.add(3)
numList.add(4)
console.log(numList)