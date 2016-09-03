/* Using the JavaScript language, have the function CountingMinutes(str) take the str parameter being passed which will 
 e two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of 
 minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then 
 he output should be 60. If str is 1:00pm-11:00am the output should be 1320. */


var CountingMinutes = function (string) {
		
		var times = string.split('-'),
		startTime = times[0],
		endTime = times[1],
		newTime,
		hoursAndMinutes,
		startMinutes,
		timeArray;

		

		if(startTime.includes("am")){
			startTime = startTime.slice(0,startTime.length - 2);
			
			hoursAndMinutes = startTime.split(':');
			
			startMinutes = hoursAndMinutes[0] * 60 + parseInt(hoursAndMinutes[1]);
			


		 } else if(startTime.includes("pm")){
		 
		  	startTime = startTime.slice(0,startTime.length - 2);
			
			hoursAndMinutes = startTime.split(':');
			
			startMinutes = hoursAndMinutes[0] * 60 + parseInt(hoursAndMinutes[1]) + 720;
			
		}

		if(endTime.includes("am")){
			//console.log(endTime)
		  	newEndTime = endTime.slice(0,endTime.length - 2);
			timeArray = newEndTime.split(':');
			//console.log(timeArray)
			endMinutes = timeArray[0] * 60 + parseInt(timeArray[1]);
			//console.log(endMinutes)

		} else if (endTime.includes("pm")) {
		   	newEndTime = endTime.slice(0,endTime.length - 2);
			timeArray = newEndTime.split(':');
			//console.log(timeArray)
			endMinutes = timeArray[0] * 60 + parseInt(timeArray[1]) + 720;
			//console.log(endMinutes)

		}

		console.log(startTime)
		console.log()

		if(startMinutes > endMinutes){
			return (endMinutes + 1440) - startMinutes
		}
		else{return endMinutes - startMinutes}


};

//split on the -
//find a 

//['9:00am', '10:00am']
//remove the am or pm

//check if its a pm or an am 

//if it's pm, add it at 12 

//12 hour clock format

//console.log(CountingMinutes("9:00am-10:00am")) //600-540 = 60 minutes

 //console.log(CountingMinutes("10:00am-1:03pm")) //183 10 * 60 = 600  
    // 1:03 = 783  if pm - add to 12   //
  //console.log(CountingMinutes("1:23am-1:08am")) //1425   1440 minutes in a day
  //   
//console.log(CountingMinutes("12:30pm-12:00am")) //690
console.log(CountingMinutes("3:00pm-4:45am"))
