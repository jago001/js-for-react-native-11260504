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

