const ppl = ['val', 'nikki', 'carrie'];
const otherppl = ['nikki', 'anton', 'nathan']
//const set = new Set([...ppl, ...otherppl])


const ninjas = [];
ninjas.push('samurai');
ninjas.push('yoyoy')
ninjas[5] = 'anton'
//console.log(ninjas)

var mySet = function () {
	this.set = [];
	this.size = 0;
}

mySet.prototype.has = function (val) {
	return this.set.includes(val) ? true: false;
}

mySet.prototype.add = function (val) {

    this.has(val) ? null : this.set.push(val); this.size++; 
}

mySet.prototype.remove = function (value) {
	if(this.set.includes(value)){
	   this.set.splice( this.set.indexOf(value), 1 )
	}
}


mySet.prototype.union = function (secondset) {
	var returnSet = new mySet();
	for(var i = 0; i < this.set.length; i++){
		if(!returnSet.has(this.set[i])){
			returnSet.set.push(this.set[i])
			returnSet.size++
		}
	}
	
	for(var i = 0; i < secondset.length; i++){
		if(!returnSet.has(secondset[i])){
			returnSet.set.push(secondset[i])
			returnSet.size++
		}
	}

	
	return returnSet
}

mySet.prototype.intersection = function (secondset) {
	var returnSet = new mySet();
	for(var i = 0; i < this.set.length; i++){
		if(secondset.includes(this.set[i])){
			returnSet.set.push(this.set[i])
			returnSet.size++
		}
	}
	return returnSet
}
var newSet = new mySet();
newSet.add(1)
newSet.add(2)

console.log(newSet.has(1))
//newSet.remove(1)
newSet.add(3)
console.log(newSet)
newSet.union([2,3,4,5]) // [1,2,3,4,5]
newSet.intersection([2,3,4,5])//[1,2]