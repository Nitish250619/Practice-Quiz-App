export const methodsData = {
  array: {
    beginner: [
      {
        name: "map()",
        definition: "Creates a new array by applying a function to each element.",
        explanation:
          "The `map()` method loops through each element of an array, applies a callback function, and returns a new array with the results.",
        challenge: {
          question: "Square each number in the given array.",
          data: `const numbers = [1, 2, 3, 4];`,
          answer: `numbers.map(num => num * num); 
  // [1, 4, 9, 16]`,
        },
      },
      {
        name: "filter()",
        definition: "Creates a new array with elements that pass a condition.",
        explanation:
          "The `filter()` method tests each element with a callback function. If the condition returns true, the element is included in the new array.",
        challenge: {
          question: "Filter out even numbers from the given array.",
          data: `const numbers = [1, 2, 3, 4, 5, 6];`,
          answer: `numbers.filter(num => num % 2 === 0); 
  // [2, 4, 6]`,
        },
      },
      {
        name: "reduce()",
        definition: "Reduces an array to a single value.",
        explanation:
          "The `reduce()` method executes a reducer function on each element and accumulates results into one value.",
        challenge: {
          question: "Find the sum of all numbers in the given array.",
          data: `const nums = [10, 20, 30];`,
          answer: `nums.reduce((acc, num) => acc + num, 0); 
  // 60`,
        },
      },
      {
        name: "find()",
        definition: "Returns the first element that satisfies the condition.",
        explanation:
          "The `find()` method returns the first element in an array that matches the provided testing function.",
        challenge: {
          question: "Find the first number greater than 10.",
          data: `const numbers = [5, 12, 8, 130, 44];`,
          answer: `numbers.find(num => num > 10); 
  // 12`,
        },
      },
      {
        name: "some()",
        definition: "Checks if at least one element passes the condition.",
        explanation:
          "The `some()` method tests whether at least one element in the array passes the given test function.",
        challenge: {
          question: "Check if any number is greater than 50.",
          data: `const numbers = [10, 25, 30, 60];`,
          answer: `numbers.some(num => num > 50); 
  // true`,
        },
      },
    ],
  
    intermediate: [
      {
        name: "map() + filter() Project",
        definition: "Combining array methods for projects.",
        explanation:
          "You can chain array methods to filter, transform, and aggregate data easily.",
        project: {
          question: "From the given students, return names of students scoring above 50.",
          data: `const students = [
    { name: "Amit", marks: 70 },
    { name: "Ravi", marks: 40 },
    { name: "Sneha", marks: 85 }
  ];`,
          answer: `students
    .filter(s => s.marks > 50)
    .map(s => s.name); 
  // ["Amit", "Sneha"]`,
        },
      },
      {
        name: "reduce() Project",
        definition: "Use reduce for aggregations.",
        explanation:
          "The `reduce` method is excellent for calculating totals, averages, or creating grouped structures.",
        project: {
          question: "Calculate the total price of items in a shopping cart.",
          data: `const cart = [
    { item: "Book", price: 200 },
    { item: "Pen", price: 20 }
  ];`,
          answer: `cart.reduce((sum, product) => sum + product.price, 0); 
  // 220`,
        },
      },
      {
        name: "sort() Project",
        definition: "Sort elements in ascending or descending order.",
        explanation:
          "The `sort()` method sorts array elements based on a comparison function.",
        project: {
          question: "Sort the numbers in ascending order.",
          data: `const numbers = [5, 2, 9, 1, 7];`,
          answer: `numbers.sort((a, b) => a - b); 
  // [1, 2, 5, 7, 9]`,
        },
      },
      {
        name: "every() Project",
        definition: "Check if all elements meet a condition.",
        explanation:
          "The `every()` method returns true if all elements satisfy the provided condition.",
        project: {
          question: "Check if all students passed (marks > 35).",
          data: `const students = [40, 55, 60, 70];`,
          answer: `students.every(marks => marks > 35); 
  // true`,
        },
      },
      {
        name: "flat() Project",
        definition: "Flattens nested arrays.",
        explanation:
          "The `flat()` method creates a new array with all sub-array elements concatenated into it.",
        project: {
          question: "Flatten the nested array to a single-level array.",
          data: `const arr = [1, [2, 3], [4, [5]]];`,
          answer: `arr.flat(2); 
  // [1, 2, 3, 4, 5]`,
        },
      },
    ],
  
    advanced: [
      {
        name: "real-world filter/map",
        definition: "Use array methods in search/filter features.",
        explanation:
          "Perfect for implementing search functionality in UI applications.",
        usecase: {
          question: "Find blog titles containing 'React'.",
          data: `const blogs = [
    "Learn React in 7 Days",
    "JavaScript ES6 Guide",
    "React Hooks Deep Dive"
  ];`,
          answer: `blogs.filter(title => title.includes("React")); 
  // ["Learn React in 7 Days", "React Hooks Deep Dive"]`,
        },
      },
      {
        name: "reduce for API data",
        definition: "Transform and aggregate API responses.",
        explanation:
          "Frequently used to group or summarize data from APIs.",
        usecase: {
          question: "Group total sales by category.",
          data: `const orders = [
    { category: "Books", price: 200 },
    { category: "Stationery", price: 50 },
    { category: "Books", price: 150 }
  ];`,
          answer: `orders.reduce((acc, order) => {
    acc[order.category] = (acc[order.category] || 0) + order.price;
    return acc;
  }, {}); 
  // { Books: 350, Stationery: 50 }`,
        },
      },
      {
        name: "map() + join() Usecase",
        definition: "Transform arrays into formatted strings.",
        explanation:
          "Useful for creating CSV data, user lists, or formatted outputs.",
        usecase: {
          question: "Create a comma-separated string of student names.",
          data: `const students = ["Amit", "Ravi", "Sneha"];`,
          answer: `students.map(name => name).join(", "); 
  // "Amit, Ravi, Sneha"`,
        },
      },
      {
        name: "reduce() + groupBy",
        definition: "Group data dynamically using reduce.",
        explanation:
          "Helps to create grouped structures (like SQL GROUP BY).",
        usecase: {
          question: "Group students by grade.",
          data: `const students = [
    { name: "Amit", grade: "A" },
    { name: "Ravi", grade: "B" },
    { name: "Sneha", grade: "A" }
  ];`,
          answer: `students.reduce((acc, s) => {
    (acc[s.grade] = acc[s.grade] || []).push(s.name);
    return acc;
  }, {}); 
  // { A: ["Amit", "Sneha"], B: ["Ravi"] }`,
        },
      },
      {
        name: "chained map/filter/reduce",
        definition: "Combine multiple array methods for complex transformations.",
        explanation:
          "Frequently used in data pipelines for filtering, transforming, and aggregating.",
        usecase: {
          question: "Find the total marks of students scoring above 50.",
          data: `const students = [
    { name: "Amit", marks: 70 },
    { name: "Ravi", marks: 40 },
    { name: "Sneha", marks: 85 }
  ];`,
          answer: `students
    .filter(s => s.marks > 50)
    .map(s => s.marks)
    .reduce((sum, marks) => sum + marks, 0); 
  // 155`,
        },
      },
    ],
  },
  
  string: {
    beginner: [
      {
        name: "split()",
        definition: "Splits a string into an array of substrings.",
        explanation:
          "The `split()` method takes a separator and returns an array of substrings.",
        challenge: {
          question: "Split the sentence into words.",
          data: `const sentence = "I love JavaScript";`,
          answer: `sentence.split(" "); 
  // ["I", "love", "JavaScript"]`,
        },
      },
      {
        name: "toUpperCase()",
        definition: "Converts string to uppercase.",
        explanation:
          "Useful for case-insensitive comparisons or text formatting.",
        challenge: {
          question: "Convert the given string to uppercase.",
          data: `const word = "google";`,
          answer: `word.toUpperCase(); 
  // "GOOGLE"`,
        },
      },
      {
        name: "toLowerCase()",
        definition: "Converts string to lowercase.",
        explanation: "Helps normalize strings for comparisons.",
        challenge: {
          question: "Convert the given string to lowercase.",
          data: `const word = "HELLO";`,
          answer: `word.toLowerCase(); 
  // "hello"`,
        },
      },
      {
        name: "charAt()",
        definition: "Returns the character at a given index.",
        explanation: "Useful for accessing specific characters in a string.",
        challenge: {
          question: "Get the first character of the string.",
          data: `const name = "Nitish";`,
          answer: `name.charAt(0); 
  // "N"`,
        },
      },
      {
        name: "trim()",
        definition: "Removes whitespace from both ends of a string.",
        explanation: "Commonly used for cleaning user input.",
        challenge: {
          question: "Remove spaces from the given string.",
          data: `const text = "   Hello World   ";`,
          answer: `text.trim(); 
  // "Hello World"`,
        },
      },
    ],
  
    intermediate: [
      {
        name: "replace() Project",
        definition: "Replaces part of a string with another string.",
        explanation:
          "Often used for text formatting, cleaning, or sanitizing inputs.",
        project: {
          question: "Replace all spaces with hyphens in a URL slug.",
          data: `const title = "Learn JavaScript Fast";`,
          answer: `title.replace(/ /g, "-").toLowerCase(); 
  // "learn-javascript-fast"`,
        },
      },
      {
        name: "includes() Project",
        definition: "Checks if a string contains another string.",
        explanation: "Very useful in search functionality or keyword matching.",
        project: {
          question: "Check if the word 'React' exists in the given title.",
          data: `const title = "React Hooks Tutorial";`,
          answer: `title.includes("React"); 
  // true`,
        },
      },
      {
        name: "startsWith()",
        definition: "Checks if a string starts with a given substring.",
        explanation:
          "Useful for validating prefixes like country codes or file formats.",
        project: {
          question: "Check if the phone number starts with '+91'.",
          data: `const phone = "+919876543210";`,
          answer: `phone.startsWith("+91"); 
  // true`,
        },
      },
      {
        name: "endsWith()",
        definition: "Checks if a string ends with a given substring.",
        explanation:
          "Commonly used to validate file extensions or text suffixes.",
        project: {
          question: "Check if the file name ends with '.jpg'.",
          data: `const file = "photo.jpg";`,
          answer: `file.endsWith(".jpg"); 
  // true`,
        },
      },
      {
        name: "concat()",
        definition: "Joins two or more strings together.",
        explanation: "Similar to using `+` but more explicit.",
        project: {
          question: "Combine first and last names into a full name.",
          data: `const first = "Soumyajit"; const last = "Behera";`,
          answer: `first.concat(" ", last); 
  // "Soumyajit Behera"`,
        },
      },
    ],
  
    advanced: [
      {
        name: "Regex + match()",
        definition: "Extracts parts of a string using patterns.",
        explanation: "Regex with match() allows you to capture complex text patterns.",
        usecase: {
          question: "Extract all numbers from the given string.",
          data: `const str = "My score is 45 and age is 21";`,
          answer: `str.match(/\\d+/g); 
  // ["45", "21"]`,
        },
      },
      {
        name: "Template literals (real-world)",
        definition: "Create dynamic strings with embedded variables.",
        explanation:
          "Template literals simplify string interpolation and multi-line strings.",
        usecase: {
          question:
            "Create a dynamic message for the given user object using template literals.",
          data: `const user = { name: "Nitish", score: 95 };`,
          answer: "`${user.name} scored ${user.score} in the test.` \n// 'Nitish scored 95 in the test.'",
        },
      },
      {
        name: "padStart() & padEnd()",
        definition: "Pads a string with another string until it reaches a desired length.",
        explanation: "Often used in formatting (like adding leading zeros).",
        usecase: {
          question: "Pad the number with leading zeros until length 5.",
          data: `const num = "42";`,
          answer: `num.padStart(5, "0"); 
  // "00042"`,
        },
      },
      {
        name: "localeCompare()",
        definition: "Compares two strings according to language rules.",
        explanation:
          "Useful for sorting strings in different languages or alphabets.",
        usecase: {
          question: "Compare two words alphabetically.",
          data: `const a = "apple"; const b = "banana";`,
          answer: `a.localeCompare(b); 
  // -1 (because 'apple' comes before 'banana')`,
        },
      },
      {
        name: "tagged template literals",
        definition: "Customizes string interpolation behavior with a function.",
        explanation:
          "Allows advanced formatting, such as sanitizing user inputs or creating DSLs.",
        usecase: {
          question: "Highlight interpolated values with brackets.",
          data: `function highlight(strings, ...values) {
    return strings.reduce((acc, str, i) => acc + str + (values[i] ? "["+values[i]+"]" : ""), "");
  }
  const user = "Nitish"; const lang = "JS";`,
          answer: "`highlight`Hello ${user}, welcome to ${lang}` \n// 'Hello [Nitish], welcome to [JS]'",
        },
      },
    ],
  },
  object: {
    beginner: [
      {
        name: "Object.keys()",
        definition: "Returns an array of a given object's property names.",
        explanation:
          "`Object.keys()` is useful for looping over an object's properties.",
        challenge: {
          question: "Get all keys from the given object.",
          data: `const user = { name: "Nitish", age: 25 };`,
          answer: `Object.keys(user); 
  // ["name", "age"]`,
        },
      },
      {
        name: "Object.values()",
        definition: "Returns an array of a given object's property values.",
        explanation: "Useful to quickly extract values from objects.",
        challenge: {
          question: "Get all values from the given object.",
          data: `const user = { name: "Soumyajit", age: 27 };`,
          answer: `Object.values(user); 
  // ["Soumyajit", 27]`,
        },
      },
      {
        name: "Object.entries()",
        definition: "Returns an array of [key, value] pairs.",
        explanation: "Commonly used for iteration with `for...of` or `map`.",
        challenge: {
          question: "Convert the object into key-value pairs.",
          data: `const person = { city: "Bhubaneswar", country: "India" };`,
          answer: `Object.entries(person); 
  // [["city", "Bhubaneswar"], ["country", "India"]]`,
        },
      },
      {
        name: "hasOwnProperty()",
        definition: "Checks if a property exists directly on the object.",
        explanation:
          "Helps distinguish between direct and inherited properties.",
        challenge: {
          question: "Check if 'age' exists in the given object.",
          data: `const user = { name: "Nitish", age: 25 };`,
          answer: `user.hasOwnProperty("age"); 
  // true`,
        },
      },
      {
        name: "delete operator",
        definition: "Removes a property from an object.",
        explanation: "Used when you want to dynamically remove object keys.",
        challenge: {
          question: "Delete the 'age' property from the object.",
          data: `const user = { name: "Soumyajit", age: 27 };`,
          answer: `delete user.age; 
  // { name: "Soumyajit" }`,
        },
      },
    ],
  
    intermediate: [
      {
        name: "Object.assign()",
        definition: "Copies properties from one or more objects into a target object.",
        explanation: "Useful for cloning or merging objects.",
        project: {
          question: "Merge two objects into one.",
          data: `const a = { x: 1 }; const b = { y: 2 };`,
          answer: `Object.assign({}, a, b); 
  // { x: 1, y: 2 }`,
        },
      },
      {
        name: "Spread operator (...)",
        definition: "Spreads object properties into another object.",
        explanation: "More modern way to clone/merge objects.",
        project: {
          question: "Clone an object using the spread operator.",
          data: `const user = { name: "Nitish", age: 25 };`,
          answer: `{ ...user }; 
  // { name: "Nitish", age: 25 }`,
        },
      },
      {
        name: "Object.freeze()",
        definition: "Freezes an object so its properties cannot be changed.",
        explanation: "Useful for creating constants or ensuring immutability.",
        project: {
          question: "Freeze an object and try modifying it.",
          data: `const obj = { name: "Soumyajit" }; 
  Object.freeze(obj);`,
          answer: `obj.name = "Nitish"; 
  // Still { name: "Soumyajit" }`,
        },
      },
      {
        name: "Object.seal()",
        definition: "Seals an object, preventing new properties but allowing value changes.",
        explanation: "Helpful when you want to lock object structure but allow updates.",
        project: {
          question: "Seal an object and try adding a property.",
          data: `const obj = { name: "Nitish" }; 
  Object.seal(obj);`,
          answer: `obj.age = 25; 
  // age not added, still { name: "Nitish" }`,
        },
      },
      {
        name: "for...in loop",
        definition: "Iterates over enumerable properties of an object.",
        explanation: "Useful for looping when you don’t need array conversion.",
        project: {
          question: "Print all keys and values of an object.",
          data: `const car = { brand: "Tesla", year: 2024 };`,
          answer: `for (let key in car) {
    console.log(key, car[key]);
  }
  // brand Tesla
  // year 2024`,
        },
      },
    ],
  
    advanced: [
      {
        name: "Object.create()",
        definition: "Creates a new object with the specified prototype.",
        explanation:
          "Useful for inheritance and prototype-based design patterns.",
        usecase: {
          question: "Create a new object inheriting from another.",
          data: `const proto = { greet() { return "Hello"; } };`,
          answer: `const obj = Object.create(proto);
  obj.greet(); 
  // "Hello"`,
        },
      },
      {
        name: "Object.defineProperty()",
        definition: "Adds a new property to an object with control over descriptors.",
        explanation:
          "Allows you to make properties read-only, hidden, or non-enumerable.",
        usecase: {
          question: "Create a read-only property 'id'.",
          data: `const obj = {}; 
  Object.defineProperty(obj, "id", { value: 101, writable: false });`,
          answer: `obj.id; 
  // 101
  obj.id = 202; 
  // Still 101 (read-only)`,
        },
      },
      {
        name: "Object.getOwnPropertyDescriptors()",
        definition:
          "Returns all property descriptors (value, writable, enumerable, configurable).",
        explanation:
          "Great for debugging object structures and immutability rules.",
        usecase: {
          question: "Get descriptors of an object.",
          data: `const obj = { name: "Nitish" };`,
          answer: `Object.getOwnPropertyDescriptors(obj); 
  // { name: { value: "Nitish", writable: true, enumerable: true, configurable: true } }`,
        },
      },
      {
        name: "Object.fromEntries()",
        definition: "Transforms a list of key-value pairs into an object.",
        explanation:
          "The reverse of Object.entries(), helpful for rebuilding objects.",
        usecase: {
          question: "Convert key-value pairs back into an object.",
          data: `const entries = [["a", 1], ["b", 2]];`,
          answer: `Object.fromEntries(entries); 
  // { a: 1, b: 2 }`,
        },
      },
      {
        name: "Destructuring + Rest",
        definition: "Extracts object properties easily, with rest for leftovers.",
        explanation:
          "Helps in splitting objects or passing selected props in React.",
        usecase: {
          question: "Extract name and keep the rest in another object.",
          data: `const user = { name: "Soumyajit", age: 27, country: "India" };`,
          answer: `const { name, ...rest } = user; 
  // name = "Soumyajit", rest = { age: 27, country: "India" }`,
        },
      },
    ],
  },
  important: {
    beginner: [
      {
        name: "parseInt()",
        definition: "Parses a string and returns an integer.",
        explanation: "Often used to convert string inputs into numbers.",
        challenge: {
          question: "Convert the string '42px' into a number.",
          data: `const value = "42px";`,
          answer: `parseInt(value); 
  // 42`,
        },
      },
      {
        name: "parseFloat()",
        definition: "Parses a string and returns a floating-point number.",
        explanation: "Useful for handling decimal values from strings.",
        challenge: {
          question: "Convert the string '3.14' into a number.",
          data: `const value = "3.14";`,
          answer: `parseFloat(value); 
  // 3.14`,
        },
      },
      {
        name: "isNaN()",
        definition: "Checks if a value is NaN (Not-a-Number).",
        explanation:
          "Helps validate numeric input and avoid invalid operations.",
        challenge: {
          question: "Check if 'hello' is NaN.",
          data: `const val = "hello";`,
          answer: `isNaN(val); 
  // true`,
        },
      },
      {
        name: "Number()",
        definition: "Converts a value to a number.",
        explanation: "A quick way to convert strings or booleans into numbers.",
        challenge: {
          question: "Convert the string '100' to a number.",
          data: `const str = "100";`,
          answer: `Number(str); 
  // 100`,
        },
      },
      {
        name: "Boolean()",
        definition: "Converts a value to true or false.",
        explanation:
          "Useful for checking truthy/falsy values in conditionals.",
        challenge: {
          question: "Convert 0 into a boolean.",
          data: `const num = 0;`,
          answer: `Boolean(num); 
  // false`,
        },
      },
    ],
  
    intermediate: [
      {
        name: "setTimeout()",
        definition: "Executes a function after a specified delay.",
        explanation: "Commonly used for delays and scheduled tasks.",
        project: {
          question: "Log 'Hello' after 2 seconds.",
          data: ``,
          answer: `setTimeout(() => console.log("Hello"), 2000);`,
        },
      },
      {
        name: "setInterval()",
        definition: "Executes a function repeatedly at a set interval.",
        explanation: "Useful for timers and periodic tasks.",
        project: {
          question: "Log 'Tick' every 1 second.",
          data: ``,
          answer: `setInterval(() => console.log("Tick"), 1000);`,
        },
      },
      {
        name: "clearTimeout() & clearInterval()",
        definition: "Stops a timer or interval.",
        explanation: "Lets you cancel timers to prevent infinite execution.",
        project: {
          question: "Stop an interval after 3 seconds.",
          data: `const interval = setInterval(() => console.log("Hi"), 1000);`,
          answer: `setTimeout(() => clearInterval(interval), 3000);`,
        },
      },
      {
        name: "Date()",
        definition: "Represents date and time in JavaScript.",
        explanation: "Useful for working with timestamps and formatting dates.",
        project: {
          question: "Get the current year.",
          data: `const now = new Date();`,
          answer: `now.getFullYear(); 
  // e.g., 2025`,
        },
      },
      {
        name: "JSON.parse() & JSON.stringify()",
        definition: "Converts JSON to object and object to JSON string.",
        explanation:
          "Essential for working with APIs and localStorage.",
        project: {
          question: "Convert an object to JSON and back.",
          data: `const user = { name: "Nitish", age: 25 };`,
          answer: `const str = JSON.stringify(user); 
  // '{"name":"Nitish","age":25}'
  JSON.parse(str); 
  // { name: "Nitish", age: 25 }`,
        },
      },
    ],
  
    advanced: [
      {
        name: "Math.random()",
        definition: "Generates a random number between 0 and 1.",
        explanation: "Often used in games, randomization, or simulations.",
        usecase: {
          question: "Generate a random number between 1 and 10.",
          data: ``,
          answer: `Math.floor(Math.random() * 10) + 1; 
  // e.g., 7`,
        },
      },
      {
        name: "Math.max() & Math.min()",
        definition: "Return the maximum or minimum value from a list.",
        explanation: "Helpful for comparisons, sorting, and validations.",
        usecase: {
          question: "Find the max number from the list.",
          data: `const nums = [5, 8, 2, 10];`,
          answer: `Math.max(...nums); 
  // 10`,
        },
      },
      {
        name: "encodeURI() & decodeURI()",
        definition: "Encode or decode a URI for safe transmission.",
        explanation:
          "Useful when dealing with URLs containing spaces or special characters.",
        usecase: {
          question: "Encode and decode a URL.",
          data: `const url = "https://example.com/search?query=hello world";`,
          answer: `const encoded = encodeURI(url); 
  // "https://example.com/search?query=hello%20world"
  decodeURI(encoded); 
  // "https://example.com/search?query=hello world"`,
        },
      },
      {
        name: "try...catch",
        definition: "Handles errors in a safe way.",
        explanation: "Essential for handling runtime errors without breaking code.",
        usecase: {
          question: "Safely parse invalid JSON.",
          data: `const str = "{name:'Nitish'}";`,
          answer: `try {
    JSON.parse(str);
  } catch (err) {
    console.log("Invalid JSON");
  }
  // "Invalid JSON"`,
        },
      },
      {
        name: "Promise",
        definition: "Represents the eventual completion (or failure) of async operations.",
        explanation:
          "Foundation of modern async programming in JS.",
        usecase: {
          question: "Create a promise that resolves after 1 second.",
          data: ``,
          answer: `new Promise((resolve) => {
    setTimeout(() => resolve("Done"), 1000);
  });`,
        },
      },
    ],
  },
  advanced: {
    beginner: [
      {
        name: "Proxy",
        definition: "Creates a wrapper around an object to intercept operations.",
        explanation:
          "Proxies let you customize behavior of objects like validation, logging, or access control.",
        challenge: {
          question: "Log every property access in an object.",
          data: `const user = { name: "Nitish", age: 25 };`,
          answer: `const proxy = new Proxy(user, {
    get(target, prop) {
      console.log(\`Accessing \${prop}\`);
      return target[prop];
    }
  });
  proxy.name; 
  // Logs: "Accessing name", returns "Nitish"`,
        },
      },
      {
        name: "Reflect",
        definition: "Provides methods for object manipulation, like a toolkit for objects.",
        explanation:
          "Often used with Proxy to maintain default behavior in intercepted operations.",
        challenge: {
          question: "Set a property using Reflect.",
          data: `const user = { name: "Nitish" };`,
          answer: `Reflect.set(user, "age", 25); 
  // user = { name: "Nitish", age: 25 }`,
        },
      },
      {
        name: "structuredClone()",
        definition: "Deep clones objects, including Maps, Sets, and circular references.",
        explanation:
          "Safer alternative to JSON.parse(JSON.stringify()), supports complex structures.",
        challenge: {
          question: "Clone an object with nested Map.",
          data: `const data = { user: new Map([["id", 1]]) };`,
          answer: `const copy = structuredClone(data); 
  copy.user.get("id"); 
  // 1`,
        },
      },
      {
        name: "WeakMap",
        definition: "A Map with keys as objects, but doesn’t prevent garbage collection.",
        explanation:
          "Used for private data storage or caching without memory leaks.",
        challenge: {
          question: "Store secret data for an object.",
          data: `const wm = new WeakMap();
  const user = {};`,
          answer: `wm.set(user, { secret: 123 });
  wm.get(user); 
  // { secret: 123 }`,
        },
      },
      {
        name: "WeakSet",
        definition: "A Set holding objects weakly referenced.",
        explanation:
          "Helps track objects without affecting garbage collection.",
        challenge: {
          question: "Check if an object exists in a WeakSet.",
          data: `const ws = new WeakSet();
  const obj = {};`,
          answer: `ws.add(obj);
  ws.has(obj); 
  // true`,
        },
      },
    ],
  
    intermediate: [
      {
        name: "Intl API",
        definition: "Provides internationalization features like date and currency formatting.",
        explanation:
          "Helps apps support multiple regions without manual formatting.",
        project: {
          question: "Format a number as Indian currency.",
          data: `const amount = 123456.78;`,
          answer: `new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
  }).format(amount); 
  // "₹1,23,456.78"`,
        },
      },
      {
        name: "AbortController",
        definition: "Used to cancel asynchronous operations like fetch requests.",
        explanation:
          "Crucial for apps where users may navigate away or cancel requests.",
        project: {
          question: "Abort a fetch request after 1 second.",
          data: `const controller = new AbortController();
  const signal = controller.signal;`,
          answer: `fetch("https://api.github.com", { signal });
  setTimeout(() => controller.abort(), 1000); 
  // Aborts request`,
        },
      },
      {
        name: "Generator Functions",
        definition: "Functions that can pause and resume execution.",
        explanation:
          "Useful for lazy evaluation, iterators, or async flow control.",
        project: {
          question: "Create a generator that yields numbers 1 to 3.",
          data: ``,
          answer: `function* numbers() {
    yield 1;
    yield 2;
    yield 3;
  }
  [...numbers()]; 
  // [1, 2, 3]`,
        },
      },
      {
        name: "Async Iterators",
        definition: "Allow asynchronous looping with for-await-of.",
        explanation:
          "Perfect for streaming data, APIs, or event-based processing.",
        project: {
          question: "Iterate over async data with for-await-of.",
          data: ``,
          answer: `async function* fetchData() {
    yield "A";
    yield "B";
  }
  for await (const val of fetchData()) {
    console.log(val);
  }
  // "A", "B"`,
        },
      },
      {
        name: "Performance API",
        definition: "Measures execution time of code snippets.",
        explanation:
          "Used for performance tuning in critical apps like Amazon/Netflix.",
        project: {
          question: "Measure loop execution time.",
          data: ``,
          answer: `performance.mark("start");
  for (let i = 0; i < 1e6; i++) {}
  performance.mark("end");
  performance.measure("loop", "start", "end"); 
  performance.getEntriesByName("loop")[0].duration;`,
        },
      },
    ],
  
    advanced: [
      {
        name: "Atomics",
        definition: "Provides atomic operations for shared memory concurrency.",
        explanation:
          "Critical for safe multi-threading with SharedArrayBuffer in JS.",
        usecase: {
          question: "Increment a shared counter safely.",
          data: `const buffer = new SharedArrayBuffer(4);
  const view = new Int32Array(buffer);`,
          answer: `Atomics.add(view, 0, 1); 
  // safely increments counter`,
        },
      },
      {
        name: "SharedArrayBuffer",
        definition: "Represents a memory buffer shared between threads.",
        explanation:
          "Enables true parallelism in JavaScript (used with Atomics).",
        usecase: {
          question: "Create a shared buffer for two workers.",
          data: ``,
          answer: `const buffer = new SharedArrayBuffer(1024);
  const view = new Int32Array(buffer); 
  // Now multiple workers can access this buffer`,
        },
      },
      {
        name: "FinalizationRegistry",
        definition: "Registers callbacks to run after objects are garbage collected.",
        explanation:
          "Helps clean up resources automatically when objects are no longer used.",
        usecase: {
          question: "Register cleanup for unused objects.",
          data: ``,
          answer: `const registry = new FinalizationRegistry(msg => {
    console.log("Cleaning up:", msg);
  });
  let obj = {};
  registry.register(obj, "Object removed");
  obj = null;`,
        },
      },
      {
        name: "WeakRefs",
        definition: "Allows referencing objects without preventing garbage collection.",
        explanation:
          "Advanced memory management technique, often paired with caches.",
        usecase: {
          question: "Create a weak reference to an object.",
          data: ``,
          answer: `let user = { name: "Nitish" };
  const weak = new WeakRef(user);
  console.log(weak.deref()); 
  // { name: "Nitish" } or undefined if GC’d`,
        },
      },
      {
        name: "MessageChannel",
        definition: "Creates two-way communication between contexts (like Web Workers).",
        explanation:
          "Critical for thread-safe communication in parallel JS execution.",
        usecase: {
          question: "Send a message between two ports.",
          data: ``,
          answer: `const channel = new MessageChannel();
  channel.port1.onmessage = e => console.log(e.data);
  channel.port2.postMessage("Hello");
  // Logs: "Hello"`,
        },
      },
    ],
  },      
  };
  