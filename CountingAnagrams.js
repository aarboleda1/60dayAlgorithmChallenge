// Using the JavaScript language, have the function CountingAnagrams(str) take the str parameter and determine how many anagrams exist in the string. An anagram is a new word that is produced from rearranging the characters in a different word, for example: cars and arcs are anagrams. Your program should determine how many anagrams exist in a given string and return the total number. 

// For example: if str is "cars are very cool so are arcs and my os" then your program should return 2 because "cars" and "arcs" form 1 anagram and "so" and "os" form a 2nd anagram. The word "are" occurs twice in the string but it isn't an anagram because it is the same word just repeated.


// Test cases:
// Input:"aa aa odg dog gdo"
// Output:2

// ['aa', 'aa', 'odg', 'dog', 'gdo']

// map = {}  store each word in object
// key will be word and also be word
// if (word == obj[word]) {
//}

// odg dog d = 74 o = 56 g = 94 add up store as value
// 1 2 6
// a b f

// a c e
// 1 3 5



//possible implementation - use charCodeAt and keep track unicode

// Input:"a c b c? run urn! urn"
// Output:1

// Input: "fun nuf!" 
// Output: 1

// 'fun nuf'   f u n 
// letters must be reaarranged differently

// str.split(' ');




//can be uppercase
//no numbers
//replace[ , " "]
//there will be punctuation
//fun nuf
var CountingAnagrams = function (str) {
  var arr = str.split(' ');
  var anagramCount = 0;
  for (var i = 0 ; i < arr.length; i++){
    
    for(var j = 1; j < arr.length; j++){
        var word1 = arr[j].match(/[fun]/gi).split('').sort().join('');
        if(word1 === arr[i].split('').sort().join('') && arr[i].length === arr[j].length && arr[i] !== arr[j]) {
         anagramCount++
        } 
    }
    
  }
  
  return anagramCount;
}

console.log(CountingAnagrams('fun nuf')) // 1
//console.log(CountingAnagrams('fun foijaweo')) //0
//console.log(CountingAnagrams('the so is so awesome but tub is great')) //1
//console.log(CountingAnagrams('the so is so awesome but tub is great jef efj')) //2
