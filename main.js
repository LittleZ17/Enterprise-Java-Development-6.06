
// Iteration 1: Names and Input

let hacker1 = "Zindy";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Mayerline";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}

//  Iteration 3: Loops

// 3.1 Print all the characters of the driver’s name, separated by a space and in capitals i.e. "J O H N"
//console.log(hacker1.toUpperCase())

let navigatorNew = '';

for (var i = 0; i < hacker1.length; i++) {
  navigatorNew += hacker1[i].toUpperCase() + " ";
}
console.log(navigatorNew);

//Opción con metodos de array
// navigatorNew = hacker1.toUpperCase().split('').join(' ');
// console.log(navigatorNew);

// 3.2 Print all the characters of the navigator’s name, in reverse order. i.e. "nhoJ"

let navigatorReverse = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  navigatorReverse += hacker1[i];
}

console.log(navigatorReverse);

// navigatorReverse = hacker1.split('').reverse().join('');

// console.log(navigatorReverse);

// 3.3 Depending on the lexicographic order of the strings, print:

if (hacker1 == hacker2) console.log("What?! You both have the same name?");
else if (hacker1 > hacker2) console.log("The driver's name goes first.");
else console.log("Yo, the navigator goes first definitely.");

//------- Bonus 1:

// Generate 3 paragraphs. Store the text in a variable type of string.

const loremParagraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta, tellus quis facilisis efficitur, enim ante finibus lacus, in accumsan lacus quam aliquam quam. Ut cursus porttitor odio, sed congue ipsum posuere in. Nulla ut sem maximus, congue tellus a, pulvinar augue. Curabitur convallis placerat lacus at consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra euismod eros, in scelerisque odio imperdiet in. Ut eleifend pharetra elit, nec pretium quam consequat et. Fusce placerat vulputate auctor. Morbi maximus imperdiet tortor ac consequat. Cras euismod vehicula nunc, nec eleifend nibh tincidunt a. In sit amet quam non tellus maximus molestie. Nullam euismod eleifend condimentum. In viverra lobortis mi, vel commodo mi tristique at. Quisque consectetur magna magna, vitae imperdiet velit rutrum eu. Aliquam interdum dolor eu massa placerat convallis.Vivamus quis lacus eu velit pulvinar efficitur. Nulla ut urna nec quam dictum mollis. Morbi mollis aliquam libero, ac lobortis nisi sodales vel. Aliquam id magna in arcu egestas vulputate. Fusce vel lacus eros. Vivamus tincidunt erat enim, id semper eros posuere sit amet. Quisque vulputate vel magna nec auctor. Suspendisse a lectus ac massa pulvinar porttitor.Fusce libero eros, aliquam sit amet est at, maximus fermentum magna.Nunc bibendum risus ut arcu congue tempus.Nam porta pharetra tortor id mattis.Aliquam euismod lacus ut est volutpat, vitae laoreet mi tincidunt.Sed eu nisl commodo, commodo turpis in, accumsan eros.Ut ex purus, rutrum cursus tortor et, volutpat euismod nisi."
console.log(typeof loremParagraphs);

// Make your program count the number of words in the string.

const wordCount = loremParagraphs.split(' ').length;
console.log(wordCount);


// Make your program count the number of times the Latin word et appears.

const etCount = loremParagraphs.split('et').length;
console.log(etCount);


//-------  Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// “A man, a plan, a canal, Panama!”
// “Amor, Roma”
// “race car”
// “stack cats”
// “step on no pets”
// “taco cat”
// “put it up”
// “Was it a car or a cat I saw?”
//“No ‘x’ in Nixon”.

const value = "A man, a plan, a canal, Panama!";
const str = value.toLowerCase().replace(/[^a-z0-9]/g, '');

let isPalindrome = true;

for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrome = false;
  }
}

console.log("is a palindrome:", isPalindrome);