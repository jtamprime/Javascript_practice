let consonantCancel = function(sentence) {
    let arr = sentence.split(" ");
    let newArr = [];
    for ( let i = 0; i < arr.length; i++) {
        newArr.push(newWord(arr[i]))
    }
    return newArr.join(" ");
}

let newWord = function(string) {
    let vowels = "aeiou";
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if ( vowels.includes(string[i])) {
            newString = string.slice(i);
            return newString
        }
    }
  
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"


let endingStringVowel = function(string) {
    let vowels = "aeiou";
    let newString = "";
    if (vowels.includes(string[string.length-1])) {
      newString =  string + string;
      return newString;
    }
    if (!vowels.includes(string[string.length-1])) {
      for ( let i = string.length-1; i >= 0; i-- ) {
          //console.log("index " + i);
          if( vowels.includes(string[i])) {
              newString = string + string.slice(i);
              return newString;
          }
      } 
      
    }
}
let repeatingTranslate = function(sentence) {
    let arr = sentence.split(" ");
    let newArr = [];
    for ( let i = 0; i < arr.length; i++){
        if ( arr[i].length < 3) {
            newArr.push(arr[i]);
        } else {
            newArr.push(endingStringVowel(arr[i]))
    }
    }
    return newArr.join(' ');
}
console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

let removeVowel = function(string) {
    let vowels = "aeiou";
    let newWord = "";
    for ( let i = string.length-1; i >= 0; i-- ) {
        //console.log("index " + i )
        if ( vowels.includes(string[i])) {
           return newWord = string.slice(0, i) + string.slice(i + 1)
           //console.log(string.slice(i));
        }
    } 
}
//console.log(removeVowel("everyone"));
let hipsterfy = function(sentence) {
    let arr = sentence.split(" ")
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let word  = arr[i];
        newArr.push(removeVowel(word))
    }
    return newArr.join(' ');
}
console.log(hipsterfy('When should everyone wake up?')); 
// 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'



let snakeToCamel = function(string) {
    let arr = string.split('_');
    let newArr = [];
    for ( let i = 0; i < arr.length; i++) {
        let capWord = arr[i];
        let newCapWord = capWord[0].toUpperCase() + capWord.slice(1, capWord.length).toLowerCase();
        newArr.push(newCapWord);
        }
        return newArr.join('');
    }



console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

let noVowels = function(string) {
    let vowels = "aieou";
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if (!vowels.includes(string[i])){
            newString+=string[i];
        }
    }
    return newString;
}
let abbreviateWords = function (sentence) {
    let arr = sentence.split(' ');
    //console.log(arr);
    let newArr = [];
    for ( let i = 0; i < arr.length; i++) {
        if (arr[i].length > 4){
            newArr.push(noVowels(arr[i]));
        } else  {
            newArr.push(arr[i]);
        }
        
    }
    return newArr.join(' ');
}

console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg