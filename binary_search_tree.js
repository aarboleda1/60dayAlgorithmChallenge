function Node (data) {
	//values we will be working with
	this.data = data;
	//left child	
	this.left = null;
	//right child
	this.right = null;
}
function BST () {
	this._root = null;
}

BST.prototype.insert = function (data) {
	
	var node = new Node(data);

	//if the first node is empty
	
	if(this._root === null){
	
		this._root = node;
		
		return;
	}
	
	var current = this._root;

	while(current){
		if(data < current.data){
			if(current.left === null){
				current.left = node;
				return;
			}
		current = current.left;
		} else if (data > current.data) {
			if(current.right === null){
				current.right = node
				return;	
			}
			current = current.right;	
			} 
			else {
				//duplicates not supported
				return;
			}
		}
	
}

/*
Insertion into a BST
1.compare current node's key with K 
2. If K is less than current node,
	1) if left child of current node is Null, insert K as left child of current node and return
	2) if left child is not Null, left child becomes new current node
3. If K is greater than current node,
	1) If right child of current node is Null, insert K as the right child of the current node and return
	2) If the right child is not Null, the right child becomes the new current node. 

*/
BST.prototype.contains = function (data) {
	var current = this._root;
	while(current){
		//if in the root
		if(data === current.data){
			return true;
		} 
		if(data < current.data){
			//if data is less than the current nodes data look left
			current = current.left;
		} else if (data > current.data) {
			//if data is greater than the current nodes data look right;
			current = current.right;
		}
		
	}
	return false
}


BST.prototype.preOrder = function () { 
	var output = [];
	function preOrderImpl (node) {
		if(node === null){
			return;
		}
		output.push(node.data);
		
		//left subtree recursively
		preOrderImpl(node.left);
		//visit right subtree recursively
		preOrderImpl(node.right);
	}
	
	//start the traversal with the root
	preOrderImpl(this._root);
	
	return output;
	
}

BST.prototype.inOrder = function () {
	var output = [];
	
	function inOrderImpl(node){
		if(node === null){
			return;
		}
		//this visits the left subtree
		inOrderImpl(node.left);
		//this visits the node itelf
		output.push(node.data)
		//this visits the right subtree
		inOrderImpl(node.right);
	}
	
	inOrderImpl(this._root);
	return output
}

BST.prototype.postOrder = function () {
	var output = [];
	function postOrderImpl (node) {
		if(node === null){
			return;
		}
		//visit left node;
		postOrderImpl(node.left);
		//visit right node;
		postOrderImpl(node.right);
		//go inside
		output.push(node.data)
	}
	postOrderImpl(this._root);
	return output;
}
var myBST = new BST(); 


BST.prototype.maximum = function (node) {
	while(node.right){
		node = node.right;
	}
	return node.data
}
BST.prototype.remove = function (key) {
	this.removeImpl(key, this._root)
}

BST.prototype.removeImpl = function (key, node) {
	//first check if it's an empty node
	if(node !== null){
		if(key < node.data){
			node.left = this.removeImpl(key, node.left)
			//incase the key is in the left subtree
		} else if (key > node.data) {
			node.right = this.removeImpl(key, node.right)
			//incase key is in the right subtree
		}else {
			//if the node is found, must check to see if there are two children
			if(node.left && node.right) {
				//replace current node with predecessor data
				node.data = this.maximum(node.left);
				node.left = this.removeImpl(node.data, node.left);
			} else {
				//if there's only one child
				//return the child that is valid;
				node = node.left || node.right;
				
			}
		}
	}
	return node;
};


//myBST.insert(2)
for(var i = 10; i > 0; i--){
	myBST.insert(i);
}

console.log(myBST.remove(2))

myBST.contains(3)
 console.log(myBST.preOrder(), 'preOrder&&&&&')
// console.log(myBST.inOrder(), 'inOrder @@@@')
// console.log(myBST.postOrder(), 'postOrder')


//console.log(myBST)
