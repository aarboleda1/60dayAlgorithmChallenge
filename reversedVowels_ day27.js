const reverseVowels = function (str) {
  
  let storage = {};
  let returnArray = new Array(str.length);
  let arr = str.split('');
  let reversedVowel = [];
  //populate object
  arr.forEach(function(letter, index) {
    if(letter !== 'a' && 
    letter !== 'e' &&
    letter !== 'i' &&
    letter !== 'o' &&
    letter !== 'u'
    ){
      storage[index]  = letter;
    } else {
      reversedVowel.push(letter);
    }
    
    //reversedVowel = reversedVowel.reverse('');
  
  //loop thru object
  for(let key in storage){
    //place empty array with non vowels;
    returnArray[key] = storage[key]
  }
  })
reversedVowel = reversedVowel.reverse('');
  //place vowels in returnArray
  for(let i = 0; i < returnArray.length; i++){
    let letter = returnArray[i] 
    if(!letter){
  
      returnArray[i] = reversedVowel[0]
      reversedVowel.splice(0,1)
    }
  }
  return returnArray.join('').toString('')
};
