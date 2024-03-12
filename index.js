const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// my attempts:

// const titleCased = (someArray) => {
//   for (let i = 0; i < someArray.length; i++) {
//     const mySentence = someArray[i];
//     const words = mySentence.split(" ");

//     words.map((word) => {
//       return word[0].toUpperCase() + word.substring(1);
//     }).join(" ");
//   }

//   return titleCased(someArray);
// }


//   return tutorials
// }

// function titleCased(array) {
//   for (sentence in array) {

//     const words = sentence.split(" ");

//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//     }
//     return words.join(" ");

//   }
//   return titleCased();
// }
// console.log(titleCased(tutorials));



// Academy xit


// const titleCased = () => {
//   return tutorials
// }
// return tutorials.map((line) => {
//   const tokens = line.split(" ");
//   const capitalizedTokens = tokens.map(
//     (token) => token.charAt(0).toUpperCase() + token.slice(1)
//   );
//   const response = capitalizedTokens.join(" ");
//   return response;
// });


// Chat gpt

function titleCased() {
  return tutorials.map((tutorial) => {
    const words = tutorial.split(' ');
    const titleCaseWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return titleCaseWords.join(' ');
  });
}