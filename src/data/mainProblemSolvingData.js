import { MiscellaneousServices } from "@mui/icons-material"

const mainProblemSolvingData = [
  {
    id: "arrays-1",
    question: "Add commas to number",
    hint: "Convert to string and use regex or toLocaleString.",
    answer: `function addCommas(num) {
  // Solution 1: Simple and reliable
  return num.toLocaleString("en-US");

  // Solution 2: Regex-based
  // return num.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
}

// Example:
// addCommas(1234567) => "1,234,567"`,
    explanation: `There are two common approaches. The first uses built-in internationalization: num.toLocaleString("en-US") inserts commas according to locale rules. The second converts the number to a string and uses a regex /\\B(?=(\\d{3})+(?!\\d))/g to find positions that are not word boundaries (\\B) but are followed by a multiple of three digits, and inserts commas there. The locale-based version is shorter and more robust for real apps.`
  },
  {
    id: "arrays-2",
    question: "Execute all the tasks based on dependencies (topological order)",
    hint: "Model tasks as a graph and use topological sort (Kahn’s algorithm).",
    answer: `// tasks: array of { id, dependsOn: string[] }
function orderTasks(tasks) {
  const inDegree = new Map();
  const graph = new Map();

  // Initialize maps
  for (const task of tasks) {
    inDegree.set(task.id, 0);
    graph.set(task.id, []);
  }

  // Build graph and in-degree count
  for (const task of tasks) {
    for (const dep of task.dependsOn) {
      graph.get(dep).push(task.id);
      inDegree.set(task.id, inDegree.get(task.id) + 1);
    }
  }

  // Kahn's algorithm: queue of tasks with inDegree 0
  const queue = [];
  for (const [id, deg] of inDegree) {
    if (deg === 0) queue.push(id);
  }

  const result = [];
  while (queue.length) {
    const node = queue.shift();
    result.push(node);

    for (const neighbor of graph.get(node)) {
      inDegree.set(neighbor, inDegree.get(neighbor) - 1);
      if (inDegree.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    }
  }

  // If not all tasks are in result, there's a cycle.
  if (result.length !== tasks.length) {
    throw new Error("Cycle detected in dependencies");
  }

  return result;
}

// Example:
// const tasks = [
//   { id: "build", dependsOn: ["lint", "test"] },
//   { id: "lint", dependsOn: [] },
//   { id: "test", dependsOn: ["lint"] },
// ];
// orderTasks(tasks) => ["lint", "test", "build"]`,
    explanation: `Each task depends on other tasks, which forms a directed graph. A valid execution order is a topological ordering of this graph. Kahn’s algorithm counts incoming edges (inDegree) for every node, then repeatedly takes nodes with inDegree 0 (no remaining dependencies), appends them to the result, and decrements inDegree of their neighbors. If at the end some nodes still have nonzero inDegree, there is a cycle and no valid execution order.`
  },
  {
    id: "arrays-3",
    question: "Flatten a nested array",
    hint: "Use recursion or a stack; optionally mimic Array.prototype.flat.",
    answer: `function flatten(arr) {
  const result = [];

  function helper(sub) {
    for (const value of sub) {
      if (Array.isArray(value)) {
        helper(value);
      } else {
        result.push(value);
      }
    }
  }

  helper(arr);
  return result;
}

// Example:
// flatten([1, [2, [3, 4], 5]]) => [1, 2, 3, 4, 5]`,
    explanation: `A nested array can contain values or other arrays. Recursion is natural here: iterate over elements, and if an element is an array, call the same function to flatten it; otherwise push the value into a result array. This effectively does a depth-first traversal of the nested structure. Modern JS also provides arr.flat(Infinity), but implementing it manually shows understanding of recursion.`
  },
  {
    id: "arrays-4",
    question: "Find the first pair whose sum is zero using indexing (sorted array)",
    hint: "Use two pointers from both ends.",
    answer: `function firstPairSumZero(sortedArr) {
  let left = 0;
  let right = sortedArr.length - 1;

  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right];

    if (sum === 0) return [sortedArr[left], sortedArr[right]];
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return null;
}

// Example:
// firstPairSumZero([-5, -2, -1, 0, 2, 4]) => [-2, 2]`,
    explanation: `Because the array is sorted, adding the smallest and largest element gives us a sum we can adjust. If sum > 0, it means we need a smaller number, so we move the right pointer left. If sum < 0, we need a larger number, so we move the left pointer right. This runs in O(n) instead of O(n²) for a nested loop solution.`
  },
  {
    id: "arrays-5",
    question: "Find the largest element from a 2D array",
    hint: "Track a global max while looping through rows and columns.",
    answer: `function maxIn2DArray(matrix) {
  let max = -Infinity;

  for (const row of matrix) {
    for (const value of row) {
      if (value > max) max = value;
    }
  }
  return max;
}

// Example:
// maxIn2DArray([[1, 5], [7, 0], [3, 9]]) => 9`,
    explanation: `A 2D array is just an array of arrays. The simplest strategy is to keep a variable max initialized to -Infinity and iterate through each row and each element. For every value, compare with max and update if it’s larger. At the end, max holds the largest element in the entire matrix.`
  },
  {
    id: "arrays-6",
    question: "Calculate sum of numbers in a nested array",
    hint: "Very similar to flatten; either flatten then sum, or sum recursively.",
    answer: `function sumNested(arr) {
  let sum = 0;

  function helper(sub) {
    for (const value of sub) {
      if (Array.isArray(value)) {
        helper(value);
      } else {
        sum += value;
      }
    }
  }

  helper(arr);
  return sum;
}

// Example:
// sumNested([1, [2, [3]], 4]) => 10`,
    explanation: `We traverse the nested array using recursion. If the current element is an array, we recurse into it, otherwise we add it to an outer sum variable. This avoids constructing an extra flattened array and directly accumulates the sum in a single pass.`
  },
  {
    id: "arrays-7",
    question: "Max word length in an array of strings",
    hint: "Iterate and keep track of the longest length.",
    answer: `function maxWordLength(words) {
  let maxLen = 0;

  for (const word of words) {
    if (word.length > maxLen) {
      maxLen = word.length;
    }
  }
  return maxLen;
}

// Example:
// maxWordLength(["hi", "hello", "JavaScript"]) => 10`,
    explanation: `We only need the maximum length, not the word itself. For each word in the array, compare its length with the current maxLen and update when it is larger. The complexity is O(n), where n is the number of words.`
  },
  {
    id: "arrays-8",
    question: "Transpose a 2D matrix (array of arrays)",
    hint: "Rows become columns; nested loops with swapped indices.",
    answer: `function transpose(matrix) {
  if (matrix.length === 0) return [];

  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: cols }, () => Array(rows).fill(null));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      result[c][r] = matrix[r][c];
    }
  }

  return result;
}

// Example:
// transpose([[1, 2, 3], [4, 5, 6]])
// => [[1, 4], [2, 5], [3, 6]]`,
    explanation: `Transposing means turning row r, column c into row c, column r. We pre-create a new matrix with cols rows and rows columns. Then nested loops iterate original indices and assign result[c][r] = matrix[r][c]. This is standard in working with matrices.`
  },
  {
    id: "arrays-9",
    question: "Get last N elements of an array",
    hint: "Use slice with a negative index.",
    answer: `function lastN(arr, n) {
  if (n <= 0) return [];
  if (n >= arr.length) return arr.slice();
  return arr.slice(-n);
}

// Example:
// lastN([1, 2, 3, 4, 5], 2) => [4, 5]`,
    explanation: `Array.prototype.slice supports negative indices; slice(-n) returns the last n elements. We handle edge cases: if n is non-positive, return an empty array; if n is greater than length, return a shallow copy of the entire array.`
  },
  {
    id: "arrays-10",
    question: "Print the duplicates in an array",
    hint: "Use a frequency map or two sets (seen & duplicates).",
    answer: `function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (const value of arr) {
    if (seen.has(value)) {
      duplicates.add(value);
    } else {
      seen.add(value);
    }
  }

  return Array.from(duplicates);
}

// Example:
// findDuplicates([1, 2, 2, 3, 4, 4, 4]) => [2, 4]`,
    explanation: `We maintain a set of values we have seen at least once. When we encounter a value that is already in the seen set, we add it to the duplicates set. Using a set for duplicates ensures each duplicate value is listed only once. Finally, we convert duplicates to an array.`
  },
  {
    id: "arrays-11",
    question: "Calculate the average score of students who scored above 90",
    hint: "Filter first, then reduce.",
    answer: `function averageAbove90(scores) {
  // scores: array of { name, score }
  const highScorers = scores.filter(s => s.score > 90);
  if (highScorers.length === 0) return 0;

  const total = highScorers.reduce((sum, s) => sum + s.score, 0);
  return total / highScorers.length;
}

// Example:
// averageAbove90([{name: "A", score: 95}, {name: "B", score: 88}]) => 95`,
    explanation: `We first filter down to the students who have score > 90. If none qualify, we return 0 or some sentinel value. Then we use reduce to sum their scores and divide by the number of qualifying students. This cleanly composes array methods to express the intent.`
  },
  {
    id: "arrays-12",
    question: "Find the occurrence (frequency) of each element in an array",
    hint: "Use an object or Map as a count dictionary.",
    answer: `function countOccurrences(arr) {
  const counts = new Map();

  for (const value of arr) {
    counts.set(value, (counts.get(value) || 0) + 1);
  }

  return counts;
}

// Example:
// countOccurrences(["a", "b", "a"])
// => Map { "a" => 2, "b" => 1 }`,
    explanation: `We iterate over the array and use a Map (or a plain object) to store counts. For each value, we read the current count (defaulting to 0) and increment. Map is nicer than object when keys might not be simple strings. The result holds frequency of every unique element.`
  },
  {
    id: "arrays-13",
    question: "Find the first two numbers that sum up to 0 (unsorted array)",
    hint: "Use a Set for complements while scanning from left to right.",
    answer: `function firstTwoSumZero(arr) {
  const seen = new Set();

  for (const num of arr) {
    const complement = -num;
    if (seen.has(complement)) {
      return [complement, num];
    }
    seen.add(num);
  }

  return null;
}

// Example:
// firstTwoSumZero([3, 1, -1, 2, -3])
// Could return [1, -1]`,
    explanation: `We maintain a set of numbers seen so far. For each number num, we check if its complement -num has already appeared. If yes, we immediately return that pair, which guarantees it’s the first pair in left-to-right order. This runs in O(n) average time using extra O(n) space.`
  },
  {
    id: "arrays-14",
    question: "Find the largest difference (a[j] - a[i] where j > i)",
    hint: "Track the minimum so far and the best profit.",
    answer: `function maxDifference(arr) {
  if (arr.length < 2) return 0;

  let minSoFar = arr[0];
  let maxDiff = arr[1] - arr[0];

  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    maxDiff = Math.max(maxDiff, current - minSoFar);
    minSoFar = Math.max(minSoFar, minSoFar, arr[i] < minSoFar ? arr[i] : minSoFar);
    if (current < minSoFar) minSoFar = current;
  }

  return maxDiff;
}

// Cleaner version:
function maxDifferenceClean(arr) {
  if (arr.length < 2) return 0;

  let minSoFar = arr[0];
  let maxDiff = arr[1] - arr[0];

  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    maxDiff = Math.max(maxDiff, current - minSoFar);
    if (current < minSoFar) minSoFar = current;
  }

  return maxDiff;
}`,
    explanation: `We want max(a[j] - a[i]) with j > i. As we scan from left to right, we maintain the smallest value seen so far (minSoFar). At position i, the best difference ending at i is arr[i] - minSoFar, and we update a global maxDiff with this value if it's larger. Then we update minSoFar using the current value if it’s smaller. This runs in O(n) instead of O(n²).`
  },
  {
    id: "arrays-15",
    question: "Shuffle the array",
    hint: "Use Fisher–Yates (Durstenfeld) algorithm.",
    answer: `function shuffle(arr) {
  const result = arr.slice(); // copy

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 0..i
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

// Example:
// shuffle([1, 2, 3, 4]) => random permutation`,
    explanation: `The Fisher–Yates algorithm guarantees a uniform random permutation. Starting from the end, we pick a random index j from 0 to i (inclusive) and swap element i with element j. We do this until i reaches 1. We clone the original array first to avoid mutating it directly, but we could also shuffle in-place.`
  },
  {
    id: "arrays-16",
    question: "Sort given array of objects by age",
    hint: "Use Array.prototype.sort with a custom comparator.",
    answer: `function sortByAge(people) {
  return people.slice().sort((a, b) => a.age - b.age);
}

// Example:
// sortByAge([{name: "A", age: 30}, {name: "B", age: 20}])
// => [{name: "B", age: 20}, {name: "A", age: 30}]`,
    explanation: `Array.prototype.sort accepts a comparator function that returns a negative, zero, or positive number depending on ordering. For numeric comparison, a.age - b.age is enough: if a is younger, it becomes negative and a comes before b. Using slice() first keeps the original array intact and returns a sorted copy.`
  },
  {
    id: "arrays-17",
    question: "Move Zeroes – move all 0's to the end while maintaining order of non-zero elements",
    hint: "Use two pointers or write non-zero values forward and fill remaining with zeros.",
    answer: `function moveZeroes(nums) {
  let insertPos = 0;

  // Move non-zero elements forward
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  // Fill the rest with zeros
  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }

  return nums;
}

// Example:
// moveZeroes([0, 1, 0, 3, 12]) => [1, 3, 12, 0, 0]`,
    explanation: `We scan the array once, keeping track of the next index where a non-zero should go. Every time we see a non-zero, we write it to nums[insertPos] and increment insertPos. After that pass, indices from insertPos to end should be zeros, so we overwrite them with 0. This preserves the relative order of non-zero elements and runs in O(n) with O(1) extra space.`
  },
  {
    id: "arrays-18",
    question: "Missing Number in an Array (0..n or 1..n)",
    hint: "Use sum formula or XOR trick.",
    answer: `// Assuming numbers are from 0..n and one is missing
function missingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, v) => sum + v, 0);
  return expectedSum - actualSum;
}

// Example:
// missingNumber([0, 1, 3]) => 2`,
    explanation: `If we know the numbers must be from 0 to n inclusive and exactly one number is missing, we can compute the expected sum of 0..n using n*(n+1)/2. Then we subtract the actual array sum from that expected sum; the difference is exactly the missing number. This uses O(1) extra space and O(n) time.`
  },
  {
    id: "arrays-19",
    question: "Support negative index in arrays (like Python's arr[-1])",
    hint: "Wrap access in a helper function or use a custom getter.",
    answer: `function at(arr, index) {
  if (index < 0) {
    const pos = arr.length + index; // -1 => last, -2 => second last
    return pos >= 0 ? arr[pos] : undefined;
  }
  return arr[index];
}

// Example:
// at([10, 20, 30], -1) => 30
// at([10, 20, 30], -2) => 20`,
    explanation: `Negative indices mean "count from the end". We convert a negative index i to arr.length + i. For example, -1 becomes length-1 (the last element). If the computed index would be negative, we return undefined to mimic out-of-bounds behavior. Modern JS has Array.prototype.at that already behaves this way.`
  },
  {
    id: "arrays-20",
    question: "Find the majority repeated element in an array (more than n/2 times)",
    hint: "Use Boyer–Moore majority vote algorithm.",
    answer: `function majorityElement(nums) {
  let candidate = null;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Optional: verify candidate
  // const freq = nums.filter(n => n === candidate).length;
  // if (freq <= nums.length / 2) throw new Error("No majority element");

  return candidate;
}

// Example:
// majorityElement([2, 2, 1, 2]) => 2`,
    explanation: `The Boyer–Moore algorithm maintains a candidate and a counter. When the counter hits zero, we pick the current element as a new candidate. When the element matches the candidate, we increment the counter; otherwise we decrement. If a majority element exists (more than n/2 occurrences), this process guarantees that candidate is that majority in one pass with O(1) extra space. Optionally, we can do a verification pass.`
  },
  {
    id: "arrays-21",
    question: "Find the maximum consecutive ones in a binary array",
    hint: "Scan once while counting current streak and max streak.",
    answer: `function maxConsecutiveOnes(nums) {
  let maxCount = 0;
  let current = 0;

  for (const num of nums) {
    if (num === 1) {
      current++;
      if (current > maxCount) maxCount = current;
    } else {
      current = 0;
    }
  }

  return maxCount;
}

// Example:
// maxConsecutiveOnes([1,1,0,1,1,1]) => 3`,
    explanation: `We keep two counters: current streak of ones, and the best (maximum) streak seen so far. For each element, if it is 1 we increment the current streak and update maxCount; if it is 0 we reset the current streak to 0. This runs in O(n) time and O(1) space.`
  },
  {
    id: "arrays-22",
    question: "Unique occurrences for array of elements",
    hint: "Check if frequencies themselves are unique using a Set.",
    answer: `function hasUniqueOccurrences(arr) {
  const counts = new Map();

  for (const value of arr) {
    counts.set(value, (counts.get(value) || 0) + 1);
  }

  const freqSet = new Set(counts.values());
  return freqSet.size === counts.size;
}

// Example:
// hasUniqueOccurrences([1,2,2,1,1,3]) => true
// hasUniqueOccurrences([1,2]) => false`,
    explanation: `First we build a frequency map of element → count. Then we put all counts into a Set, which removes duplicates. If all counts were unique, the size of the Set will equal the number of distinct elements (the size of the Map). If not, at least two elements share the same frequency.`
  },
  {
    id: "arrays-23",
    question: "Reverse the vowels in a string",
    hint: "Use two pointers from the ends; swap only vowels.",
    answer: `function reverseVowels(str) {
  const vowels = new Set(["a","e","i","o","u","A","E","I","O","U"]);
  const arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    while (left < right && !vowels.has(arr[left])) left++;
    while (left < right && !vowels.has(arr[right])) right--;

    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join("");
}

// Example:
// reverseVowels("hello") => "holle"`,
    explanation: `We treat the string as an array of characters and define a vowel set for quick checks. Using two pointers from both ends, we move each pointer until it points to a vowel. Then we swap those vowels and continue. Non-vowel characters stay in place. This approach is O(n) time and O(n) space for the array copy.`
  },
  {
    id: "arrays-24",
    question: "Flatten the array based on depth",
    hint: "Accept a depth argument and decrement it as you recurse.",
    answer: `function flattenDepth(arr, depth = 1) {
  if (depth < 1) return arr.slice();

  const result = [];

  for (const value of arr) {
    if (Array.isArray(value) && depth > 0) {
      result.push(...flattenDepth(value, depth - 1));
    } else {
      result.push(value);
    }
  }

  return result;
}

// Example:
// flattenDepth([1, [2, [3, [4]]]], 1) => [1, 2, [3, [4]]]
// flattenDepth([1, [2, [3, [4]]]], 2) => [1, 2, 3, [4]]`,
    explanation: `We make depth a parameter that controls how many levels of arrays we are allowed to flatten. For each element, if it is an array and depth > 0, we recursively flatten it with depth-1 and spread the results into the output. If it is not an array (or depth is 0), we push it as is. This replicates Array.prototype.flat(depth).`
  },
  {
    id: "arrays-25",
    question: "Decode a message (e.g., shift letters by a fixed key like a Caesar cipher)",
    hint: "Map each character to its charCode and shift inside 'a'..'z'.",
    answer: `function decodeCaesar(message, shift) {
  const aCode = "a".charCodeAt(0);
  const zCode = "z".charCodeAt(0);

  return message
    .split("")
    .map(ch => {
      const code = ch.charCodeAt(0);
      // Lowercase letters only for simplicity
      if (code >= aCode && code <= zCode) {
        const offset = (code - aCode - shift) % 26;
        // JS modulo can be negative, fix it:
        const normalized = (offset + 26) % 26;
        return String.fromCharCode(aCode + normalized);
      }
      return ch;
    })
    .join("");
}

// Example:
// encode "ifmmp" with shift 1 => "hello"
// decodeCaesar("ifmmp", 1) => "hello"`,
    explanation: `In a simple Caesar cipher, encoding shifts each letter forward by some fixed number, and decoding shifts backward by the same number. We convert each character to its char code and only operate if it's between 'a' and 'z'. For decoding, we subtract the shift, wrap around modulo 26, and convert back to a character. Non-letter characters are returned unchanged.`
  },
// After your last item in mainProblemSolvingData, add:

  {
    id: "functions-1",
    question: "Create a fetch wrapper with auto retry and exponential backoff",
    hint: "Wrap fetch in a function, loop or recurse on failure, and wait using setTimeout + Promise.",
    answer: `async function fetchWithRetry(url, options = {}, retries = 3, backoffMs = 500) {
  let attempt = 0;

  while (attempt <= retries) {
    try {
      const res = await fetch(url, options);

      if (!res.ok) {
        throw new Error("HTTP error " + res.status);
      }

      return res; // success
    } catch (err) {
      if (attempt === retries) {
        throw err; // no more retries left
      }

      const delay = backoffMs * Math.pow(2, attempt); // exponential backoff
      await new Promise(resolve => setTimeout(resolve, delay));
      attempt++;
    }
  }
}

// Example usage:
// const res = await fetchWithRetry("/api/data", {}, 3, 300);`,
    explanation: `We wrap fetch in an async function and keep track of the current attempt. Each time fetch fails (network error or non-OK status), we either throw the error if we are out of retries, or wait for some delay and try again. The delay grows exponentially with each attempt using backoffMs * 2^attempt. The wait is implemented with a Promise that resolves after setTimeout.`
  },
  {
    id: "functions-2",
    question: "Create a counter function using closures (modern pattern)",
    hint: "Return an inner function that captures a private variable.",
    answer: `function createCounter(initial = 0) {
  let count = initial;

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    get value() {
      return count;
    },
  };
}

// Example:
// const counter = createCounter(10);
// counter.increment(); // 11
// counter.value;       // 11`,
    explanation: `Closures let us create private state. The variable count lives in the outer function scope and is not directly accessible from the outside world. We return an object with methods that close over count and can read or modify it. This pattern is common for encapsulating state without using classes.`
  },
  {
    id: "functions-3",
    question: "Implement a once() function that allows a function to run only once",
    hint: "Use a closure to remember if the function has already been called.",
    answer: `function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }
    return result;
  };
}

// Example:
// const init = once(() => console.log("Init called"));
// init(); // logs once
// init(); // does nothing`,
    explanation: `We use a closure to store called (a boolean) and result. The wrapper function checks if called is false, and if so, calls the original fn, stores its result, and flips called to true. Future calls return the stored result without calling fn again. This is useful for initialization logic.`
  },

  /* ===================== NUMBER QUESTIONS ===================== */

  {
    id: "numbers-1",
    question: "Check if a number is prime",
    hint: "Only check divisibility up to the square root of the number.",
    answer: `function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  // check from 5 to sqrt(n) skipping even numbers
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

// Example:
// isPrime(2) => true
// isPrime(15) => false`,
    explanation: `A prime number has no divisors other than 1 and itself. We can stop checking divisors once i * i > n because if n had a factor greater than sqrt(n), the other factor would be smaller than sqrt(n) and we would already have found it. We also quickly rule out multiples of 2 and 3, then test numbers of the form 6k ± 2 for efficiency.`
  },
  {
    id: "numbers-2",
    question: "Sum the digits of a number",
    hint: "Convert to string or use modulo/division in a loop.",
    answer: `function sumDigits(num) {
  let n = Math.abs(num);
  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}

// Example:
// sumDigits(1234) => 10`,
    explanation: `We take the absolute value to ignore sign. Then we repeatedly take the last digit with n % 10 and add it to sum. We remove the last digit by integer-dividing by 10 with Math.floor. This continues until n becomes 0.`
  },
  {
    id: "numbers-3",
    question: "Check if a number is a power of two",
    hint: "In binary, powers of two have exactly one bit set.",
    answer: `function isPowerOfTwo(n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
}

// Example:
// isPowerOfTwo(16) => true
// isPowerOfTwo(18) => false`,
    explanation: `For powers of two, the binary representation has exactly one bit set. Subtracting 1 flips that bit to 0 and all lower bits to 1. AND-ing n with n - 1 gives 0 only in that case. We also ensure n is positive.`
  },

  /* ===================== OBJECT QUESTIONS ===================== */

  {
    id: "objects-1",
    question: "Find a matching object in an array of objects by multiple conditions",
    hint: "Use Array.prototype.find with a callback that checks all fields.",
    answer: `function findMatchingUser(users, criteria) {
  // criteria is an object like { role: "admin", active: true }
  return users.find(user =>
    Object.entries(criteria).every(([key, value]) => user[key] === value)
  );
}

// Example:
// const users = [{name:"A", role:"admin", active:true}, {name:"B", role:"user", active:true}];
// findMatchingUser(users, { role: "admin", active: true }) => {name:"A", ...}`,
    explanation: `We use Array.prototype.find to get the first element that matches a set of conditions. The criteria object defines keys and expected values. Object.entries(criteria) returns pairs of [key, value]; every(...) then ensures that for each key, the user[key] equals the desired value. This makes a generic matcher that doesn’t hardcode specific fields.`
  },
  {
    id: "objects-2",
    question: "Deep clone a simple object (no functions / cycles)",
    hint: "Use recursion; handle arrays and plain objects differently.",
    answer: `function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(deepClone);
  }

  const result = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      result[key] = deepClone(value[key]);
    }
  }
  return result;
}

// Example:
// const original = { a: 1, b: { c: 2 } };
// const copy = deepClone(original);
// copy.b.c = 99; // original.b.c stays 2`,
    explanation: `Shallow copies only copy the top-level references. Deep cloning needs to recursively copy nested objects and arrays. Primitive values are returned as is. For arrays, we map each element through deepClone. For plain objects, we create a new object and recursively copy each own property. This simple version doesn’t handle special cases like Date, Map, Set, or circular references, but is good for many interview-style questions.`
  },

  /* ===================== PROMISES QUESTIONS ===================== */

  {
    id: "promises-1",
    question: "Merge Promise results from multiple arrays of Promises",
    hint: "Use Promise.all on each group, then combine the results.",
    answer: `async function mergePromiseResults(groups) {
  // groups is an array like [ [p1, p2], [p3], [p4, p5] ]
  const settledGroups = await Promise.all(groups.map(g => Promise.all(g)));
  return settledGroups.flat();
}

// Example:
// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// mergePromiseResults([[p1], [p2]]).then(console.log); // [1, 2]`,
    explanation: `We first map each group (array) of promises to Promise.all(group) which resolves to an array of its results. Then we await Promise.all on all groups, giving an array of arrays. Finally we flatten one level with flat() to get a single array containing all resolved values. This pattern is useful when promises are grouped logically.`
  },
  {
    id: "promises-2",
    question: "Convert a callback-style function to return a Promise (promisify)",
    hint: "Return a new function that wraps the original in a Promise constructor.",
    answer: `// Node-style callback: fn(...args, callback) where callback(err, result)
function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  };
}

// Example:
// const fs = require("fs");
// const readFileAsync = promisify(fs.readFile);
// readFileAsync("file.txt", "utf8").then(console.log).catch(console.error);`,
    explanation: `Many older APIs expect a callback(err, result). promisify wraps such a function so that it returns a Promise instead. Inside the Promise constructor, we call the original fn with all arguments plus our own callback, which will resolve or reject the Promise. This makes it easier to use async/await with legacy APIs.`
  },
  {
    id: "promises-3",
    question: "Batch promises so that only N run in parallel at a time",
    hint: "Use a queue and run tasks in chunks; resolve when all are done.",
    answer: `async function runInBatches(tasks, batchSize = 2) {
  // tasks: array of functions that return a Promise
  const results = [];

  for (let i = 0; i < tasks.length; i += batchSize) {
    const batch = tasks.slice(i, i + batchSize).map(task => task());
    const batchResults = await Promise.all(batch);
    results.push(...batchResults);
  }

  return results;
}

// Example:
// const tasks = [
//   () => fetch("/api/1"),
//   () => fetch("/api/2"),
//   () => fetch("/api/3"),
// ];
// runInBatches(tasks, 2).then(console.log);`,
    explanation: `Instead of firing every request at once, we slice the tasks array into chunks of size batchSize. For each chunk, we immediately execute the tasks (task()) and use Promise.all to await all of them before moving on to the next batch. This limits concurrency to batchSize, which can be important for performance or API rate limits.`
  },
  {
    id: "promises-4",
    question: "Create a single-flight (duplicate throttle) Promise wrapper",
    hint: "If a request with the same key is in-flight, return the same Promise instead of starting a new one.",
    answer: `function createSingleFlight() {
  const inFlight = new Map();

  return function run(key, fn) {
    // fn is a function returning a Promise
    if (inFlight.has(key)) {
      return inFlight.get(key);
    }

    const p = Promise.resolve().then(fn);
    inFlight.set(key, p);

    p.finally(() => {
      inFlight.delete(key);
    });

    return p;
  };
}

// Example:
// const singleFlight = createSingleFlight();
// function fetchUser() { return fetch("/api/user"); }
// singleFlight("user", fetchUser);
// singleFlight("user", fetchUser); // gets same Promise`,
    explanation: `We maintain a Map from key to in-flight Promise. When run(key, fn) is called, if there’s already an in-flight Promise for that key, we simply return it. Otherwise, we call fn (wrapping in Promise.resolve to handle sync/async uniformly), store the Promise, and return it. When the Promise settles, we remove it from the Map. This pattern deduplicates concurrent identical requests.`
  },

  /* ===================== STRING QUESTIONS ===================== */

  {
    id: "strings-1",
    question: "Convert a query string into an object",
    hint: "Split on '&' then on '='; decode each part.",
    answer: `function parseQueryString(query) {
  const result = {};

  // remove leading '?' if present
  if (query.startsWith("?")) query = query.slice(1);

  if (!query) return result;

  for (const pair of query.split("&")) {
    const [rawKey, rawValue = ""] = pair.split("=");
    const key = decodeURIComponent(rawKey);
    const value = decodeURIComponent(rawValue);

    if (result.hasOwnProperty(key)) {
      // support multiple values for same key
      const existing = result[key];
      result[key] = Array.isArray(existing) ? [...existing, value] : [existing, value];
    } else {
      result[key] = value;
    }
  }

  return result;
}

// Example:
// parseQueryString("name=Nitish&skill=react&skill=js")
// => { name: "Nitish", skill: ["react", "js"] }`,
    explanation: `We first strip a leading '?', then split the query string by '&' into key=value pairs. Each pair is split on '=', and both key and value are decoded with decodeURIComponent to handle URL encoding. If a key appears multiple times, we store its values as an array.`
  },
  {
    id: "strings-2",
    question: "Convert a dotted path string into a nested object structure",
    hint: "Split by '.' and build the object step by step.",
    answer: `function pathToObject(path, value) {
  const keys = path.split(".");
  const result = {};
  let current = result;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (i === keys.length - 1) {
      current[key] = value;
    } else {
      current[key] = {};
      current = current[key];
    }
  }

  return result;
}

// Example:
// pathToObject("user.profile.name", "Nitish")
// => { user: { profile: { name: "Nitish" } } }`,
    explanation: `We turn a dotted string path like "a.b.c" into nested objects by splitting on '.' and walking through the keys. For each key except the last, we create an empty object and move current into it. For the last key, we assign the final value. This pattern is useful for setting nested configuration paths.`
  },

  /* ===================== WEB QUESTIONS ===================== */

  {
    id: "web-1",
    question: "Create helper functions to set and get cookies in the browser",
    hint: "Use document.cookie and encode key/value.",
    answer: `function setCookie(name, value, days = 7) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = \`\${encodeURIComponent(name)}=\${encodeURIComponent(value)};\${expires};path=/\`;
}

function getCookie(name) {
  const target = encodeURIComponent(name) + "=";
  const cookies = document.cookie.split(";");

  for (let c of cookies) {
    c = c.trim();
    if (c.startsWith(target)) {
      return decodeURIComponent(c.slice(target.length));
    }
  }
  return null;
}

// Example:
// setCookie("theme", "dark", 30);
// getCookie("theme") => "dark"`,
    explanation: `Cookies in the browser are managed via document.cookie. To set a cookie, we build a string of the form "name=value;expires=...;path=/". We encode name and value to be safe with special characters and set an expiration date. To read a cookie, we scan through document.cookie.split(";"), trim each piece, and check if it starts with our name=.`
  },
  {
    id: "web-2",
    question: "Implement event delegation for clicks on a list of items",
    hint: "Attach one listener to the parent and check event.target.",
    answer: `function delegateClick(parentSelector, itemSelector, handler) {
  const parent = document.querySelector(parentSelector);
  if (!parent) return;

  parent.addEventListener("click", event => {
    const potentialTargets = parent.querySelectorAll(itemSelector);
    const target = event.target;

    // Walk up the DOM tree to check if any ancestor matches
    for (let el = target; el && el !== parent; el = el.parentElement) {
      if ([...potentialTargets].includes(el)) {
        handler.call(el, event);
        break;
      }
    }
  });
}

// Example:
// HTML: <ul id="list"><li>Item 1</li><li>Item 2</li></ul>
// delegateClick("#list", "li", function(e) { console.log("Clicked", this.textContent); });`,
    explanation: `Event delegation attaches one event listener to a parent element instead of many listeners to each child. Click events bubble up from the target to the parent, so we can inspect event.target and its ancestors to see if they match our itemSelector. This approach is more efficient and works even when items are added dynamically.`
  },

  /* ===================== MISC QUESTIONS ===================== */

  {
    id: "misc-1",
    question: "Call APIs with pagination until all pages are fetched",
    hint: "Loop while there is a nextPage token or URL; accumulate results.",
    answer: `async function fetchAllPages(fetchPage) {
  // fetchPage(pageToken) => { items, nextPageToken }
  let pageToken = undefined;
  const allItems = [];

  while (true) {
    const { items, nextPageToken } = await fetchPage(pageToken);
    allItems.push(...items);

    if (!nextPageToken) break;
    pageToken = nextPageToken;
  }

  return allItems;
}

// Example:
// async function fetchPage(token) {
//   const url = token ? "/api/items?pageToken=" + token : "/api/items";
//   const res = await fetch(url);
//   return res.json(); // { items: [...], nextPageToken: "..." or null }
// }
// const all = await fetchAllPages(fetchPage);`,
    explanation: `Many APIs use a pagination token or next link to return large result sets. We abstract that into a fetchPage(pageToken) function, which returns items and nextPageToken. Our fetchAllPages function keeps calling fetchPage, pushing items into allItems, until nextPageToken is falsy. The consumer gets a single combined array.`
  }
];

// (Your array closing bracket and export stay as they are)


export default mainProblemSolvingData;
