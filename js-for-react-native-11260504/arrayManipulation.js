function processArray(arr) {
let processedArray = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            processedArray.push(num ** 2); 
        } else {
            processedArray.push(num * 3);         }
    }
    return processedArray;
}


let inputArray = [14, 26, 37, 40, 59];
let outputArray = processArray(inputArray);
console.log(outputArray); 

function formatArrayStrings(Strings, Numbers) {
    const formattedStrings = [];
    for (let i = 0; i < Strings.length; i++) {
      const string = Strings[i];
      const number = Numbers[i];
      if (number % 2 === 0) {
        formattedStrings.push(string.toUpperCase());
      } else {
        formattedStrings.push(string.toLowerCase());
      }
    }
    return formattedStrings;
  }
  

const originalStrings = ["The", "cat", "chased", "the", "yarn?"];
const processedNumbers = [42, 61, 74, 3, 95]; 

const formattedStrings = formatArrayStrings(originalStrings, processedNumbers);

console.log("Original Strings:", originalStrings);
console.log("Formatted Strings:", formattedStrings);

