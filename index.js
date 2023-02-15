const yargs = require('yargs');

var lodash = require('lodash');

const options = yargs
      .usage('Usage: -n <text>')
      .option('t', {
            alias: 'text',
            describe: 'Your text',
            type: 'array',
            demandOption: true,
      }).argv;

// console.log(options.text);

//
const inputWordsArray = lodash.words(options.text);

const RareWordLetterArray = [];
// RareWordLetterArray.push(newWord)
// RareWordLetterArray.push(LowerCaseWord[i]);

const parseWord = (word) => {
      console.log(word);
      let LowerCaseWord = word.toLowerCase();

      let uniqueLetterIndex = 0;
      let uniqueLetter = LowerCaseWord[uniqueLetterIndex];

      for (let i = 0; i < LowerCaseWord.length - 1; i++) {
            let comparable = LowerCaseWord[i];
            // console.log(
            //       'for item & index:',
            //       LowerCaseWord[i],
            //       i,
            // );
            // console.log(
            //       'uniqueLetter:',
            //       uniqueLetter,
            //       'comparable:',
            //       comparable,
            // );
            // console.log(uniqueLetterIndex == i);
            if (uniqueLetterIndex == i) {
                  continue;
            }
            if (uniqueLetter == comparable) {
                  // console.log('equal');
                  i = 0;
                  uniqueLetterIndex += 1;
                  uniqueLetter =
                        LowerCaseWord[uniqueLetterIndex];
                  // console.log(uniqueLetter);
            }
      }
      return uniqueLetter;
};

// newUniqueLetter = parseWord('Macahimne');

// console.log(inputWordsArray.length);
for (let i = 0; i < inputWordsArray.length; i++) {
      let newUniqueLetter = parseWord(inputWordsArray[i]);
      RareWordLetterArray.push(newUniqueLetter);
}

console.log(RareWordLetterArray);

StringRareWordLetter = RareWordLetterArray.join('');
UniqueLetter = parseWord(StringRareWordLetter);
console.log('UniqueLetter', UniqueLetter);
