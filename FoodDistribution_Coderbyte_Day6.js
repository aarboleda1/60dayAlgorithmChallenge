// // Challenge
// // Using the JavaScript language, have the function FoodDistribution(arr) read the 
// array of numbers stored in arr which will represent the hunger level of different 
// people ranging from 0 to 5 (0 meaning not hungry at all, 5 meaning very hungry). You 
// will also have N sandwiches to give out which will range from 1 to 20. The format of 
// the array will be [N, h1, h2, h3, ...] where N represents the number of sandwiches you 
// have and the rest of the array will represent the hunger levels of different people. 
// Your goal is to minimize the hunger difference between each pair of people in the array
//  using the sandwiches you have available. 

// // For example: if arr is [5, 3, 1, 2, 1], this means you have 5 sandwiches to give 
// out. You can distribute them in the following order to the people: 2, 0, 1, 0. Giving 
// these sandwiches to the people their hunger levels now become: [1, 1, 1, 1]. The difference 
// between each pair of people is now 0, the total is also 0, so your program should return 0. 
// Note: You may not have to give out all, or even any, of your sandwiches to produce a minimized
//  difference. 

// // Another example: if arr is [4, 5, 2, 3, 1, 0] then you can distribute the sandwiches in the 
// following order: [3, 0, 1, 0, 0] which makes all the hunger levels the following: [2, 2, 2, 1, 0]. 
// The differences between each pair of people is now: 0, 0, 1, 1 and so your program should return 
// the final minimized difference of 2. 

var FoodDistribution = function (arr) {
  var sandwiches = arr[0]; //number of sandwiches we have to give
  var people = arr.slice(1);
  var minDiff = 0;
  var map = {};
  console.log(people)
  
  for(var i = 0; i < people.length; i++){
  	var difference = people[i] - people[i+1];
  
  	if(difference > 0){
  		//if the person we are iterating on is more hungry than the person next to him/her
  		//give him sandwich to make it even
  		people[i] = people[i]-difference;
  		sandwiches = sandwiches - difference;
  	}
  }
  console.log(people)
  for(var j = 0; j < people.length; j++){
  	 if(people[j+1] < people[j]){
  	 	minDiff += people[j] - people[j +1]
  	 	//loop through the people array after sandwiches are passed out
  	 	//if the person to right of iteration is less hungry than the person 
  	 	//we are on, add that to the mimimalized difference
  	 }
  }
  
  
  return minDiff;
}

//FoodDistribution([5,3,1,2,1]);//0
//FoodDistribution([4, 5, 2, 3, 1, 0])
//0 0 1 1 
FoodDistribution([3, 2, 1, 0, 4, 1, 0])

//minimalize the difference between people
//

//return final minimalized difference
//

//[5, 3, 1, 2, 1]
//[3,1,2,1] 5
//[2,1,2,1]4
//[1,1,2,1]3
//[1,1,1,1]2

[5,2,3,1,0]4
5>2
5-2 = value
N -value
[2,2,3,1,0]1
2,2,2,1,0

//loop thru
//use divide and conquer
//check difference between i and i + 1 is greater than 1
//if so 
//find difference
//i -difference
//number minnus difference

