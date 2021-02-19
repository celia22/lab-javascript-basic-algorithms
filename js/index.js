

// Iteration 1: Names and Input

let hacker1 = "Han";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Chewbacca";
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
	console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)

} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, XX characters!`)
};


// Iteration 3

//3.1
 
for ( let i = 0; i < hacker1.length; i++){
  console.log(hacker1[i].toUpperCase())
  console.log(" ")      
};

//3.2

for ( let i = hacker2.length - 1; i >= 0; i--){
  console.log(hacker2[i])
  
}

//3.3


let compared = hacker1.localeCompare(hacker2);    
console.log(compared)

if (compared === -1){
  console.log("Yo, the navigator goes first definitely.");

  } else if (compared === 0){
     console.log("What?! You both have the same name?");

  } else {
    console.log("The driver's name goes first.");
  };



//#### Bonus 1:

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus sed tellus sagittis feugiat. Fusce sed finibus arcu, vel pharetra ipsum. Duis non nibh nisl. Sed facilisis tempor finibus. Donec ut convallis eros. Morbi leo nunc, hendrerit at ligula et, faucibus molestie ipsum. In auctor nunc vitae neque aliquam, non blandit eros aliquet. Ut eget nisi nisi. Sed porttitor ullamcorper sagittis. Nullam sit amet dapibus lectus. Vivamus suscipit eros ex. Cras id ultricies elit, ac consectetur mi. Praesent at orci turpis. Donec fermentum luctus est vel ullamcorper. In lorem neque, facilisis non felis cursus, lobortis molestie massa. Praesent ultricies eros ac sollicitudin vestibulum. Aliquam at sem erat. Morbi interdum nisi quis tortor maximus rutrum. Sed vel leo est. Aliquam ultrices gravida nulla vel fermentum. Mauris efficitur viverra iaculis. Pellentesque ac suscipit orci. Etiam sit amet ipsum quis ligula mattis interdum. Sed ac lorem ultricies, tincidunt lorem at, congue orci. Proin ac odio viverra, feugiat turpis eget, molestie dui. Maecenas porta tellus a efficitur sollicitudin. Praesent ut orci eget nibh lobortis ornare. In eget congue elit, eget bibendum est. Suspendisse neque augue, posuere in rhoncus non, sodales porta erat. Quisque eu tellus neque.Mauris nibh nibh, dictum a mauris eget, placerat consectetur lectus. Nulla id dictum ipsum. Donec posuere mauris nec ex sollicitudin, non interdum neque consequat. Maecenas nec elit cursus, hendrerit est vel, euismod quam. Morbi vulputate fermentum dolor, vitae faucibus lacus fringilla eu. Sed feugiat dui euismod dui interdum, eget sollicitudin sem hendrerit. Quisque porta at nulla a commodo. Quisque vulputate purus quam, vitae facilisis ante feugiat nec. Cras a ante ac mauris gravida finibus. Morbi erat felis, fermentum sit amet elit a, mattis tempor lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus."

let words = loremIpsum.split(" ");

let numOfWords = 0;

for (let i = 0; i < words.length; i++){
  if(words[i]  !== (" ")){
    numOfWords++
  }
  }

console.log(numOfWords)

// Bonus 1 part 2

const howManyTimes = (arr, word) => {
  let counter = 0;
    for (let i = 0; i < arr.length; i++){
      if(arr[i] === word){
        counter++
    };
  };
  return counter
};  

howManyTimes(loremIpsum,'et' );



// BONUS 2, PALINDROMES. HE ENCONTRADO LA SOLUCION EN STACKOVERFLOW ENTIENDO EL CÓDIGO, PERO NO ES MIO!!!!

let phraseToCheck1 =  "A man, a plan, a canal, Panama!"
let phraseToCheck2 = "Amor, Roma"
let phraseToCheck3 = "race car"
let phraseToCheck4 =  "stack cats"
let phraseToCheck5 = "Not a palindrome" 
let phraseToCheck6 = "What is a palindorme, by the way?" 

function palindrome(str) {

  var modifiedStr= str.replace(/[^0-9a-z]/gi, '').toLowerCase().split("");

  for(var i=0; i < (modifiedStr.length)/2; i++){ 
    if(modifiedStr[i] !== modifiedStr[modifiedStr.length-i-1]){ 
      return false; 
    }  
  }
 return true;
};

console.log(palindrome(phraseToCheck1));
console.log(palindrome(phraseToCheck2));
console.log(palindrome(phraseToCheck3));
console.log(palindrome(phraseToCheck4));
console.log(palindrome(phraseToCheck5));
console.log(palindrome(phraseToCheck6));






