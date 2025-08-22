// src/Components/questionsData.js

export const questionSets = {
  problem_solving_set_1: [
    {
      id: 1,
      question:
        "1. Write a program to remove duplicates from an array?\n(Most Most Asked question)",
      answer: `
const removeDuplicatesWay1 = (array) => {
  let uniqueArr = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (uniqueArr.indexOf(array[i]) === -1) {
      uniqueArr.push(array[i]);
    }
  }
  return uniqueArr;
};
console.log(removeDuplicatesWay1([1, 2, 1, 3, 4, 2, 2, 1, 5, 6]));

// -------------------------- (or) -----------------------------

function removeDuplicatesWay2(arr) {
  /* Use the Set object to remove duplicates.
     This works because Sets only store unique values */
  return Array.from(new Set(arr));
  // return [...new Set(arr)] => another way
}
console.log(removeDuplicatesWay2([1, 2, 1, 3, 4, 2, 2, 1, 5, 6]));
  `,
    },
    {
      id: 2,
      question: `Write a JavaScript function that takes an array of numbers
and returns a new array with only the even numbers.`,
      answer: `function findEvenNumbers(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
      // Add even numbers to the result array
    }
  }
  return result;
}
// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, -8, 19, 9, 10];
console.log("Even numbers:", findEvenNumbers(numbers));

// Time complexity: O(N)`,
    },
    {
      id: 3,
      question: "How to check whether a string is palindrome or not?",
      answer: `const checkPalindrome = (str) => {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return "Not palindrome";
    }
  }
  return "Palindrome";
};
console.log(checkPalindrome("madam"));`,
    },
    {
      id: 4,
      question: "Find the factorial of given number?",
      answer: `const findFactorial = (num) => {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * findFactorial(num - 1);
  }
};
console.log(findFactorial(4));`,
    },
    {
      id: 5,
      question: "Program to find longest word in a given sentence?",
      answer: `const findLongestWord = (sentence) => {
  let wordsArray = sentence.split(" ");
  let longestWord = "";
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }
  console.log(longestWord);
};
findLongestWord("Hi Iam Saikrishna Iam a UI Developer");`,
    },
    {
      id: 6,
      question:
        "Write a JavaScript program to find the maximum number in an array.",
      answer: `function findMax(arr) {
  if (arr.length === 0) {
    return undefined; // Handle empty array case
  }
  let max = arr[0]; // Initialize max with the first element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max if current element is greater
    }
  }
  return max;
}
// Example usage:
const numbers = [1, 6, -33, 9, 4, 8, 2];
console.log("Maximum number is:", findMax(numbers));
// Time complexity: O(N)`,
    },
    {
      id: 7,
      question:
        "Write a JavaScript function to check if a given number is prime.",
      answer: `function isPrime(number) {
  if (number <= 1) {
    return false; // 1 and numbers less than 1 are not prime
  }
  // Loop up to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // If divisible by any number, not prime
    }
  }
  return true; // If not divisible by any number, it's prime
}

// Example usage:
console.log(isPrime(17)); // true
console.log(isPrime(19)); // true
// Time complexity: O(√N)`,
    },
  ],

  problem_solving_set_2: [
    {
      id: 1,
      question:
        "Program to find Reverse of a string without using built-in method?",
      answer: `const findReverse = (sampleString) => {
  let reverse = "";
  for (let i = sampleString.length - 1; i >= 0; i--) {
    reverse += sampleString[i];
  }
  console.log(reverse);
};
findReverse("Hello Iam Saikrishna Ui Developer");`,
    },
    {
      id: 2,
      question: "Find the smallest word in a given sentence?",
      answer: `function findSmallestWord() {
  const sentence = "Find the smallest word";
  const words = sentence.split(' ');
  let smallestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < smallestWord.length) {
      smallestWord = words[i];
    }
  }
  console.log(smallestWord);
}

findSmallestWord();`,
    },
    {
      id: 3,
      question: `Write a function sumOfThirds(arr), which returns the sum of every third number in the array starting from the first one.
Directions:
- If the input array is empty or contains less than 3 numbers, then return 0.
- The input array will contain only numbers.`,
      answer: `export const sumOfThirds = (arr) => {
  if (arr.length < 3) return 0; // Return 0 if array has less than 3 elements
  let sum = 0;
  for (let i = 0; i < arr.length; i += 3) {
    sum += arr[i];
  }
  return sum;
};

// Example usage:
console.log(sumOfThirds([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: 15 (1 + 4 + 7)`,
    },
    {
      id: 4,
      question:
        "Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.",
      answer: `function fibonacciSequence(numTerms) {
  if (numTerms <= 0) {
    return [];
  } else if (numTerms === 1) {
    return [0];
  }

  const sequence = [0, 1];
  for (let i = 2; i < numTerms; i++) {
    const nextFibonacci = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextFibonacci);
  }
  return sequence;
}

// Example usage:
const numTerms = 10;
const fibonacciSeries = fibonacciSequence(numTerms);
console.log(fibonacciSeries); 
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// Time complexity: O(N)`,
    },
    {
      id: 5,
      question: "Find the max count of consecutive 1’s in an array.",
      answer: `const findConsecutive = (array) => {
  let maxCount = 0;
  let currentConsCount = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] === 1) {
      currentConsCount += 1;
      maxCount = Math.max(currentConsCount, maxCount);
    } else {
      currentConsCount = 0;
    }
  }
  console.log(maxCount);
};

findConsecutive([1, 1, 9, 1, 9, 19, 7, 1, 1, 1, 2, 5, 1]);
// Output: 3`,
    },
    {
      id: 6,
      question: `Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort to get [0,3,4,4,6,30,31].`,
      answer: `const sortedData = (arr1, arr2) => {
  let i = 1;
  let j = 1;
  let array1 = arr1[0];
  let array2 = arr2[0];

  let mergedArray = [];

  while (array1 !== undefined || array2 !== undefined) {
    if (array2 === undefined || array1 < array2) {
      mergedArray.push(array1);
      array1 = arr1[i];
      i++;
    } else {
      mergedArray.push(array2);
      array2 = arr2[j];
      j++;
    }
  }

  console.log(mergedArray);
};

// Example usage:
sortedData([1, 3, 4, 5], [2, 6, 8, 9]);
// Output: [1, 2, 3, 4, 5, 6, 8, 9]`,
    },
    {
      id: 14,
      question: `Create a function which accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in arr2. The frequency of values must be the same.

Inputs and outputs:
[1,2,3], [4,1,9]    ==> true  
[1,2,3], [1,9]      ==> false  
[1,2,1], [4,4,1]    ==> false (must be same frequency)`,
      answer: `function isSameFrequency(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let arrFreq1 = {};
  let arrFreq2 = {};

  for (let val of arr1) {
    arrFreq1[val] = (arrFreq1[val] || 0) + 1;
  }

  for (let val of arr2) {
    arrFreq2[val] = (arrFreq2[val] || 0) + 1;
  }

  for (let key in arrFreq1) {
    if (!(key * key in arrFreq2)) {
      return false;
    }
    if (arrFreq1[key] !== arrFreq2[key * key]) {
      return false;
    }
  }

  return true;
}

// Example usage:
console.log(isSameFrequency([1, 2, 5], [25, 4, 1])); // true`,
    },
  ],

  problem_solving_set_3: [
    {
      id: 1,
      question: `Given two strings, find if one string can be formed by rearranging the letters of the other string. (Efficient)

Inputs and outputs:
"aaz", "zza"       ==> false  
"qwerty", "qeywrt" ==> true`,
      answer: `function isStringCreated(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freq = {};

  for (let val of str1) {
    freq[val] = (freq[val] || 0) + 1;
  }

  for (let val of str2) {
    if (freq[val]) {
      freq[val] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

// Example usage:
console.log(isStringCreated('anagram', 'nagaram')); // true`,
    },
    {
      id: 2,
      question: `Write logic to get unique objects from the array below.

Input: [{name: "sai"}, {name: "Nang"}, {name: "sai"}, {name: "Nang"}, {name: "111111"}]  
Output: [{name: "sai"}, {name: "Nang"}, {name: "111111"}]`,
      answer: `function getUniqueArr(array) {
  const uniqueArr = [];
  const seen = {};
  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i].name;
    if (!seen[currentItem]) {
      uniqueArr.push(array[i]);
      seen[currentItem] = true;
    }
  }
  return uniqueArr;
}

let arr = [{name: "sai"}, {name: "Nang"}, {name: "sai"}, {name: "Nang"}, {name: "111111"}];
console.log(getUniqueArr(arr));
// Output: [{name: "sai"}, {name: "Nang"}, {name: "111111"}]`,
    },
    {
      id: 3,
      question:
        "Write a JavaScript program to find the largest element in a nested array.",
      answer: `function findLargestElement(arr) {
  let max = Number.NEGATIVE_INFINITY; // Initialize max to smallest possible number

  // Helper function to traverse nested arrays
  function traverse(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // If element is array, recursively call traverse function
        traverse(arr[i]);
      } else {
        // If element is not an array, update max if needed
        if (arr[i] > max) {
          max = arr[i];
        }
      }
    }
  }

  // Start traversing the input array
  traverse(arr);
  return max;
}

// Example usage:
const array = [
  [3, 4, 58],
  [709, 8, 9, [10, 11]],
  [111, 2]
];
console.log("Largest element:", findLargestElement(array));
// Time complexity: O(N)`,
    },
    {
      id: 4,
      question:
        "Given a string, write a JavaScript function to count the occurrences of each character in the string.",
      answer: `function countCharacters(str) {
  // Object to store character counts
  const charCount = {};
  const len = str.length;
  // Loop through string & count occurrences of each character
  for (let i = 0; i < len; i++) {
    const char = str[i];
    // Increment count for each character
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

// Example usage:
const result = countCharacters("helaalo");
console.log(result);
// Output: { h: 1, e: 1, l: 2, a: 2, o: 1 }
// Time complexity: O(N)`,
    },
    {
      id: 5,
      question:
        "Write a JavaScript function that sorts an array of numbers in ascending order using Quick Sort.",
      answer: `function quickSort(arr) {
  // Check if the array is empty or has only one element
  if (arr.length <= 1) {
    return arr;
  }
  // Select a pivot element
  const pivot = arr[0];

  // Divide the array into two partitions
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // Recursively sort the partitions
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  // Concatenate sorted partitions with the pivot & return
  return sortedLeft.concat(pivot, sortedRight);
}

// Example usage:
const unsortedArray = [5, 2, 9, 1, 3, 6];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);
// Output: [1, 2, 3, 5, 6, 9]
// Time complexity: O(n log n)`,
    },
    {
      id: 6,
      question:
        "Write a JavaScript function that sorts an array of numbers in descending order using Quick Sort.",
      answer: `function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const sortedArr = quickSort(arr);
console.log(sortedArr);
// Output: [9, 6, 5, 5, 4, 3, 2, 1, 1]
// Time complexity: O(n log n)`,
    },
    {
      id: 7,
      question:
        "Write a JavaScript function that reverses the order of words in a sentence without using the built-in reverse() method.",
      answer: `const reverseWords = (sampleString) => {
  let reversedSentence = "";
  let word = "";
  // Iterate over each character in the sampleString
  for (let i = 0; i < sampleString.length; i++) {
    /* If the character is not a space,
       append it to the current word */
    if (sampleString[i] !== ' ') {
      word += sampleString[i];
    } else {
      /* If it's a space, prepend the current word
         to the reversed sentence and
         reset the word */
      reversedSentence = word + ' ' + reversedSentence;
      word = "";
    }
  }
  // Append the last word to the reversed sentence
  reversedSentence = word + ' ' + reversedSentence;
  // Trim any leading or trailing spaces and log the result
  console.log(reversedSentence.trim());
};

// Example usage:
reverseWords("ChatGPT is awesome");
// Output: "awesome is ChatGPT"

// Alternative function implementation:
function reverseWords(sentence) {
  let words = [];
  let wordStart = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      words.unshift(sentence.substring(wordStart, i));
      wordStart = i + 1;
    } else if (i === sentence.length - 1) {
      words.unshift(sentence.substring(wordStart, i + 1));
    }
  }
  return words.join(' ');
}

// Example usage:
const sentence = "ChatGPT is awesome";
console.log(reverseWords(sentence));
// Output: "awesome is ChatGPT"

// Time complexity: O(N)`,
    },
  ],

  problem_solving_set_4: [
    {
      id: 1,
      question: `Write a function which converts string input into a nested object.

Example:
stringToObject("a.b.c", "someValue")  
Output -> {a: {b: {c: "someValue"}}}`,
      answer: `function stringToObject(str, finalValue) {
  const keys = str.split('.');
  let result = {};
  let current = result;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    current[key] = (i === keys.length - 1) ? finalValue : {};
    current = current[key];
  }
  return result;
}

// Test the function
const output = stringToObject("a.b.c", "someValue");
console.log(output);
// Output: {a: {b: {c: "someValue"}}}`,
    },
    {
      id: 2,
      question: `Given an array, return an array where each value is the product of the next two items.  
Example: [3, 4, 5] -> [20, 15, 12]`,
      answer: `function productOfNextTwo(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 2) {
      result.push(arr[i + 1] * arr[i + 2]);
    } else if (i === arr.length - 2) {
      result.push(arr[i + 1] * arr[0]);
    } else {
      result.push(arr[0] * arr[1]);
    }
  }
  return result;
}

// Example usage:
const inputArray = [3, 4, 5];
const outputArray = productOfNextTwo(inputArray);
console.log(outputArray); // Output: [20, 15, 12]`,
    },
    {
      id: 3,
      question: "Find the 2nd largest element from a given array.",
      answer: `function findSecondLargest(arr) {
  if (arr.length < 2) {
    throw new Error('Array must contain at least two elements.');
  }
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  if (secondLargest === -Infinity) {
    throw new Error('There is no second largest element in the array.');
  }
  return secondLargest;
}

// Example usage:
const array = [10, 5, 20, 8, 12];
console.log(findSecondLargest(array)); // Output: 12`,
    },
    {
      id: 4,
      question: `Program challenge: Find all pairs from the given input array whose sum equals the target value.

Input: input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]  
       input2 = 10  
Output: [[1, 9], [2, 8], [3, 7], [4, 6], [5, 5]]`,
      answer: `function findPairs(input1, input2) {
  const pairs = [];
  const seen = new Set();
  for (const num of input1) {
    const complement = input2 - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }
  return pairs;
}

const input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const input2 = 10;
const output = findPairs(input1, input2);
console.log(output);
// Output: [[1, 9], [2, 8], [3, 7], [4, 6], [5, 5]]`,
    },
    {
      id: 5,
      question: `Write a JavaScript program to get the output below from the given input:

Input: "abbcccddddeea"  
Output: "1a2b3c4d2e1a"`,
      answer: `function encodeString(input) {
  if (input.length === 0) return "";
  let result = "";
  let count = 1;
  for (let i = 1; i < input.length; i++) {
    if (input[i] === input[i - 1]) {
      count++;
    } else {
      result += count + input[i - 1];
      count = 1;
    }
  }
  // Add the last sequence
  result += count + input[input.length - 1];
  return result;
}

const input = "abbcccddddeea";
const output = encodeString(input);
console.log(output);
// Outputs: 1a2b3c4d2e1a`,
    },
    {
      id: 6,
      question:
        "Implement a JavaScript function that flattens a nested array into a single-dimensional array.",
      answer: `function flattenArray(arr) {
  const stack = [...arr];
  const result = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.push(next);
    }
  }
  return result.reverse();
  // Reverse the result to maintain original order
}

// Example usage:
const nestedArray = [1, [2, [3, 4], [7, 5]], 6];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);
// Output: [1, 2, 3, 4, 7, 5, 6]`,
    },
    {
      id: 7,
      question: "Binary search logic?",
      answer: `Divide array and search in left/right half.`,
    },
  ],
};
