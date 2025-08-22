const javascriptMediumQuiz = {
  id: "javascript_medium",
  name: "JavaScript Medium Quiz",
  description:
    "Covers intermediate JavaScript topics including coercion and scopes.",
  questions: [
    {
  id: "medium_1",
  questionText: "Guess the output of the following JavaScript code?",
  codeSnippet: `const x = [1];
const y = [2];
console.log(x + y);`,

  options: [
    { id: "a", text: '"12"' },
    { id: "b", text: '"3"' },
    { id: "c", text: '[1, 2]' },
    { id: "d", text: '"undefined"' },
  ],
  correctOptionId: "a",
  explanation: `

**Explanation:**

1. **Variable Declaration:**
   \`const x = [1];\` declares a constant variable \`x\` and assigns it an array containing a single element: the number \`1\`.
   \`const y = [2];\` declares another constant variable \`y\` and assigns it an array containing the number \`2\`.

2. **Array Concatenation Attempt:**
   \`x + y\` attempts to concatenate the arrays \`x\` and \`y\`.

3. **Implicit Type Conversion:**
   JavaScript implicitly converts the arrays to strings:
   - \`[1]\` becomes \`"1"\`
   - \`[2]\` becomes \`"2"\`

4. **String Concatenation:**
   Using the \`+\` operator with strings results in string concatenation:
   - \`"1" + "2"\` becomes \`"12"\`

5. **Console Output:**
   \`console.log(x + y);\` prints \`"12"\` to the console.

---

**Key Point:**
- The \`+\` operator does **not** perform array merging in JavaScript.
- Instead, it converts arrays to strings and concatenates them.

Hence, the correct output is: **"12"**
`
},
   {
  id: "medium_2",
  questionText: "Guess the output of the following JavaScript code?",
  codeSnippet: `const data = {
  name: "sai",
  name: "krishna"
};
console.log(data.name);`,

  options: [
    { id: "a", text: '"sai"' },
    { id: "b", text: '"krishna"' },
    { id: "c", text: 'undefined' },
    { id: "d", text: 'SyntaxError' },
  ],
  correctOptionId: "b",
  explanation: `
**Output:** "krishna"

**Explanation:**

1. **Object Property Overwriting:**
   In JavaScript, when an object literal contains multiple properties with the **same key**, only the **last occurrence** of the key is retained. The earlier ones are overwritten.

2. **Behavior in the Code:**
   - First, \`name: "sai"\` is added.
   - Then, \`name: "krishna"\` overwrites the previous value.

3. **Result:**
   - The final object becomes: \`{ name: "krishna" }\`
   - So, \`console.log(data.name);\` outputs: **"krishna"**

---

**Key Point:**
- JavaScript object keys must be **unique**.
- Duplicates will be overridden **without error** during object literal evaluation.
`
},
    {
  id: "medium_3",
  questionText: "What is the output of the following code?",
  codeSnippet: `let x = 10 + 2 * 3;
console.log(x);`,

  options: [
    { id: "a", text: "36" },
    { id: "b", text: "60" },
    { id: "c", text: "16" },
    { id: "d", text: "30" },
  ],
  correctOptionId: "c",
  explanation: `
**Output:** 16

**Explanation:**

1. **Operator Precedence in JavaScript:**
   - Multiplication (*) has higher precedence than addition (+).
   - So, in the expression \`10 + 2 * 3\`, JavaScript will first evaluate \`2 * 3\`.

2. **Step-by-Step Evaluation:**
   - \`2 * 3 = 6\`
   - \`10 + 6 = 16\`

3. **Console Output:**
   - \`console.log(x);\` will print **16** to the console.

---

**Key Point:**
- Always remember JavaScript follows **operator precedence** rules.
- You can use parentheses \`()\` to change precedence manually if needed.
`
},
    {
  id: "medium_4",
  questionText: "Guess the output?",
  codeSnippet: `const x = [1, 2, 3];
const y = [1, 3, 4];
console.log(x + y);`,

  options: [
    { id: "a", text: "6" },
    { id: "b", text: "[1,2,3,1,3,4]" },
    { id: "c", text: "1,2,31,3,4" },
    { id: "d", text: "NaN" },
  ],
  correctOptionId: "c",
  explanation: `
**Output:** "1,2,31,3,4"

**Explanation:**

1. **Array Declaration:**
   - \`const x = [1, 2, 3];\`
   - \`const y = [1, 3, 4];\`

2. **Use of the \`+\` Operator with Arrays:**
   - In JavaScript, using the \`+\` operator with arrays does **not** perform numerical or array addition.
   - Instead, both arrays are **implicitly converted to strings** using their \`toString()\` method.

3. **Conversion to Strings:**
   - \`x.toString()\` → "1,2,3"
   - \`y.toString()\` → "1,3,4"

4. **String Concatenation:**
   - \`"1,2,3" + "1,3,4"\` → **"1,2,31,3,4"**

5. **Console Output:**
   - \`console.log(x + y);\` prints **"1,2,31,3,4"**

---

**Key Takeaway:**
- When used with arrays, the \`+\` operator **does not merge or sum** the arrays.
- It **coerces them to strings** and performs **string concatenation**.
`
},
    {
  id: "medium_5",
  questionText: "Guess the output?",
  codeSnippet: `console.log(+true);
console.log(!"sai");`,

  options: [
    { id: "a", text: "1 true" },
    { id: "b", text: "true false" },
    { id: "c", text: "1 false" },
    { id: "d", text: "NaN true" },
  ],
  correctOptionId: "c",
  explanation: `
**Output:** 
\`\`\`
1
false
\`\`\`

**Explanation:**

1. **\`console.log(+true);\`**
   - The **unary plus operator (\`+\`)** attempts to convert its operand to a number.
   - \`true\` is converted to the number \`1\`.
   - **Result:** \`1\` is printed.

2. **\`console.log(!"sai");\`**
   - The **logical NOT operator (\`!\`)** first converts the operand to a boolean, then negates it.
   - The string \`"sai"\` is **non-empty**, so it is considered **truthy**.
   - Negating a truthy value gives \`false\`.
   - **Result:** \`false\` is printed.

---

**Key Takeaways:**
- \`+true\` becomes \`1\` due to type coercion.
- \`!"sai"\` becomes \`false\` because non-empty strings are truthy values.
`
},
    {
  id: "medium_6",
  questionText: "What is the output of below code?",
  codeSnippet: `console.log([] + []);
console.log([1] + []);
console.log([1] + "abc");`,

  options: [
    { id: "a", text: `"", "1", "1abc"` },
    { id: "b", text: `"0", "1", "abc1"` },
    { id: "c", text: `"undefined", "1", "NaN"` },
    { id: "d", text: `"[]", "[1]", "[1]abc"` },
  ],
  correctOptionId: "a",
  explanation: `
**Output:**
\`\`\`
""
"1"
"1abc"
\`\`\`

**Explanation:**

1. **\`[] + []\`**
   - Both empty arrays are converted to strings.
   - \`[].toString()\` → \`""\` (empty string)
   - So, \`"" + "" = ""\`

2. **\`[1] + []\`**
   - \`[1].toString()\` → \`"1"\`
   - \`[].toString()\` → \`""\`
   - So, \`"1" + "" = "1"\`

3. **\`[1] + "abc"\`**
   - \`[1].toString()\` → \`"1"\`
   - So, \`"1" + "abc" = "1abc"\`

---

**Key Takeaway:**  
In JavaScript, when the \`+\` operator is used with arrays, the arrays are implicitly converted to strings using the \`toString()\` method before concatenation.
`
},
    {
  id: "medium_7",
  questionText: "Guess the output?",
  codeSnippet: `function getAge(...args) {
  console.log(typeof args);
}
getAge(21);`,

  options: [
    { id: "a", text: `"array"` },
    { id: "b", text: `"object"` },
    { id: "c", text: `"number"` },
    { id: "d", text: `"undefined"` },
  ],
  correctOptionId: "b",
  explanation: `
**Output:** \`"object"\`

**Explanation:**

1. **Rest Parameters \`(...args)\`:**
   - The \`...args\` syntax in the function definition collects all the arguments into a single array.
   - So calling \`getAge(21)\` creates: \`args = [21]\`.

2. **\`typeof\` Operator Behavior:**
   - In JavaScript, \`typeof\` an **array** returns \`"object"\`, not \`"array"\`.
   - This is because arrays are internally implemented as objects.

---

**Key Takeaway:**
Even though \`args\` is an array, \`typeof args\` will return \`"object"\` due to how JavaScript handles arrays and the \`typeof\` operator.
`
},
   {
  id: "medium_8",
  questionText: "Guess the output?",
  codeSnippet: `const obj = {
  a: "one",
  b: "two",
  a: "three"
};
console.log(obj);`,

  options: [
    { id: "a", text: `{ a: "one", b: "two", a: "three" }` },
    { id: "b", text: `{ a: "three", b: "two" }` },
    { id: "c", text: `{ b: "two", a: "one" }` },
    { id: "d", text: `Syntax Error` },
  ],
  correctOptionId: "b",
  explanation: `
**Output:**  
\`\`\`js
{ a: "three", b: "two" }
\`\`\`

**Explanation:**

1. **Duplicate Keys in JavaScript Objects:**
   - In JavaScript, when an object literal contains duplicate keys, **only the last key-value pair is retained**, and previous ones are silently overwritten.

2. **In This Code:**
   - First, \`a: "one"\` is declared.
   - Then \`a: "three"\` is declared, which **overwrites** the earlier \`a\`.
   - The key \`b\` is declared once as \`b: "two"\` and remains unchanged.

   So the final object becomes:
   \`\`\`js
   {
     a: "three",
     b: "two"
   }
   \`\`\`

---

**Takeaway:**  
When using object literals in JavaScript, if duplicate keys are used, **only the last one is kept**, without any error.
`
},
    {
  id: "medium_9",
  questionText: "Guess the output?",
  codeSnippet: `var z = 1, y = z = typeof y;
console.log(y);`,

  options: [
    { id: "a", text: `"number"` },
    { id: "b", text: `"undefined"` },
    { id: "c", text: `"object"` },
    { id: "d", text: `"string"` },
  ],
  correctOptionId: "b",
  explanation: `
**Output:**  
\`\`\`js
"undefined"
\`\`\`

**Explanation:**

### Step-by-step Breakdown:

#### 1. **Variable Hoisting**
- In JavaScript, variables declared with \`var\` are hoisted to the top of their scope and **initialized with \`undefined\`**.
- So both \`z\` and \`y\` are hoisted and initialized as:
  \`\`\`js
  var z = undefined;
  var y = undefined;
  \`\`\`

#### 2. **The Expression:**
\`\`\`js
var z = 1, y = z = typeof y;
\`\`\`

- This is evaluated **right to left**.
  - First: \`typeof y\` is evaluated.
    - \`y\` is hoisted but not yet initialized (still undefined), so:
      \`typeof y === "undefined"\`
  - Next: \`z = "undefined"\`
    - This **overwrites** \`z\` (which was 1) with the string \`"undefined"\`.
  - Then: \`y = z\` → so \`y = "undefined"\` too.

#### 3. **Final Values:**
- \`z = "undefined"\`
- \`y = "undefined"\`

#### 4. **Console Output:**
\`\`\`js
console.log(y); // "undefined"
\`\`\`

---

**Key Takeaways:**
- \`typeof\` is safe to use on undeclared/hoisted variables—it returns \`"undefined"\`.
- \`a = b = c\` is evaluated from **right to left**.
- Hoisted variables with \`var\` are initialized to \`undefined\`, not their final values.

`
},
    {
  id: "medium_10",
  questionText: "Guess the output?",
  codeSnippet: `console.log(false || null || "Hello");
console.log(false && null && "Hello");`,

  options: [
    { id: "a", text: `"Hello" and false` },
    { id: "b", text: `false and "Hello"` },
    { id: "c", text: `"Hello" and "Hello"` },
    { id: "d", text: `null and false` },
  ],
  correctOptionId: "a",
  explanation: `
**Output:**
\`\`\`js
"Hello"
false
\`\`\`

---

### Explanation:

#### 1. \`false || null || "Hello"\`

- The **logical OR ( \`||\` )** operator returns the **first truthy** value.
- It evaluates left to right:

\`\`\`js
false    // falsy
null     // falsy
"Hello"  // truthy → returned
\`\`\`

✅ So the result is: \`"Hello"\`

---

#### 2. \`false && null && "Hello"\`

- The **logical AND ( \`&&\` )** operator returns the **first falsy** value.
- It evaluates left to right:

\`\`\`js
false    // falsy → returned immediately
\`\`\`

✅ So the result is: \`false\`

---

### 🔑 Key Rules to Remember:

- \`||\` (OR):
  - Returns the **first truthy** value.
  - If none are truthy, returns the **last falsy** value.

- \`&&\` (AND):
  - Returns the **first falsy** value.
  - If none are falsy, returns the **last truthy** value.

These operators are commonly used in JavaScript for setting defaults or short-circuit evaluation.
`
},
    {
  id: "medium_11",
  questionText: "Guess the output?",
  codeSnippet: `const numbers = [1, 2, 3, 4, 5];
const [x, ...y] = numbers;
console.log(x, y);`,

  options: [
    { id: "a", text: `1 [2, 3, 4, 5]` },
    { id: "b", text: `[1] [2, 3, 4, 5]` },
    { id: "c", text: `1 undefined` },
    { id: "d", text: `1 [1, 2, 3, 4, 5]` },
  ],
  correctOptionId: "a",
  explanation: `
**Output:**
\`\`\`js
1 [2, 3, 4, 5]
\`\`\`

---

### Explanation:

#### 1. **Array Destructuring**:
\`\`\`js
const [x, ...y] = [1, 2, 3, 4, 5];
\`\`\`

- \`x\` is assigned the **first element** of the array → \`1\`.
- \`...y\` uses the **rest operator** to collect the remaining elements into a new array → \`[2, 3, 4, 5]\`.

---

### 🔑 Key Concepts:

- The **rest operator** (\`...y\`) must always be the **last element** in destructuring.
- It collects all **remaining elements** of the array into a **new array**.
- This is a common pattern for extracting the head and tail of an array.

---

✅ So, \`console.log(x, y)\` outputs:
\`\`\`js
1 [2, 3, 4, 5]
\`\`\`
`
},
    {
  id: "medium_12",
  questionText: "Guess the output?",
  codeSnippet: `const str = "abc" + + "def";
console.log(str);`,

  options: [
    { id: "a", text: `"abcdef"` },
    { id: "b", text: `"abcNaN"` },
    { id: "c", text: `"abcundefined"` },
    { id: "d", text: `"abc[object Object]"` },
  ],
  correctOptionId: "b",
  explanation: `
**Output:**
\`\`\`js
"abcNaN"
\`\`\`

---

### Explanation:

#### 1. Code Breakdown:
\`\`\`js
const str = "abc" + + "def";
\`\`\`

- The tricky part is: \`+ + "def"\`
  - The **first +** is a string concatenation operator.
  - The **second +** is a **unary plus operator** that attempts to convert the string \`"def"\` into a number.

#### 2. Unary Plus on Non-Numeric String:
\`\`\`js
+ "def" // → NaN
\`\`\`

- Since \`"def"\` is **not a valid number**, the unary plus results in **NaN** (Not-a-Number).

#### 3. Final Concatenation:
\`\`\`js
"abc" + NaN // → "abcNaN"
\`\`\`

- JavaScript automatically converts **NaN** to the string **"NaN"** during string concatenation.

---

### 🔑 Key Takeaways:

- **Unary +** tries to convert a value to a number.
- **Invalid conversions** (like \`+ "def"\`) result in **NaN**.
- When **NaN is concatenated with a string**, it behaves like a normal string → \`"abcNaN"\`.

✅ So the final output is:
\`\`\`js
"abcNaN"
\`\`\`
`
},
    {
  id: "medium_13",
  questionText: "Guess the output?",
  codeSnippet: `let newlist = [1].push(2);
console.log(newlist.push(3));`,

  options: [
    { id: "a", text: `[1, 2, 3]` },
    { id: "b", text: `3` },
    { id: "c", text: `TypeError: newlist.push is not a function` },
    { id: "d", text: `undefined` },
  ],
  correctOptionId: "c",
  explanation: `
**Output:**
\`\`\`js
TypeError: newlist.push is not a function
\`\`\`

---

### ✅ Explanation:

#### Step-by-Step Breakdown:

1. **Line 1:**
\`\`\`js
let newlist = [1].push(2);
\`\`\`

- \`push(2)\` adds \`2\` to the array \`[1]\`, making it \`[1, 2]\`.
- BUT, \`push()\` returns the **new length** of the array, **not** the updated array itself.
- So:
\`\`\`js
newlist = 2;
\`\`\`

2. **Line 2:**
\`\`\`js
console.log(newlist.push(3));
\`\`\`

- Now, \`newlist\` is just the **number \`2\`**.
- Numbers **do not** have a \`push()\` method.
- This causes a **TypeError**.

---

### 🧠 Key Concepts:

- \`Array.prototype.push()\` returns the **new length** of the array.
- It does **not** return the updated array itself.
- So:
\`\`\`js
let arr = [1];
let result = arr.push(2); // result = 2 (new length)
\`\`\`

---

### 🚫 Common Mistake:

Trying to chain or reuse the result of \`push()\` directly as if it were the updated array.

---

### ✅ Final Output:

\`\`\`js
TypeError: newlist.push is not a function
\`\`\`
`
},
   {
  id: "medium_14",
  questionText: "Guess the output?",
  codeSnippet: `console.log(0 || 1);
console.log(1 || 2);

console.log(0 && 1);
console.log(1 && 2);`,

  options: [
    { id: "a", text: `1, 1, 0, 2` },
    { id: "b", text: `0, 2, 1, 2` },
    { id: "c", text: `1, 2, 0, 1` },
    { id: "d", text: `1, 1, 1, 2` },
  ],
  correctOptionId: "a",
  explanation: `
**Output:**
\`\`\`js
1
1
0
2
\`\`\`

---

### ✅ Explanation:

#### 1. \`console.log(0 || 1);\`

- \`0\` is **falsy**, so we check the next value.
- \`1\` is **truthy**, so the result is:
\`\`\`js
1
\`\`\`

---

#### 2. \`console.log(1 || 2);\`

- \`1\` is **truthy**, so the OR short-circuits and returns:
\`\`\`js
1
\`\`\`

---

#### 3. \`console.log(0 && 1);\`

- \`0\` is **falsy**, so AND short-circuits and returns:
\`\`\`js
0
\`\`\`

---

#### 4. \`console.log(1 && 2);\`

- \`1\` is **truthy**, so we check the next.
- \`2\` is **also truthy**, so AND returns the **last value**:
\`\`\`js
2
\`\`\`

---

### 🧠 Key Logical Operator Rules:

#### OR (\`||\`)
- Returns the **first truthy** value.
- If **none** are truthy, returns the **last falsy** value.

#### AND (\`&&\`)
- Returns the **first falsy** value.
- If **all are truthy**, returns the **last truthy** value.

---

### ✅ Final Output:

\`\`\`js
1
1
0
2
\`\`\`
`
},
    {
  id: "medium_15",
  questionText: "Guess the output?",
  codeSnippet: `console.log(data());
var data = function(){
  return "1";
};`,

  options: [
    { id: "a", text: `"1"` },
    { id: "b", text: `undefined` },
    { id: "c", text: `ReferenceError: data is not defined` },
    { id: "d", text: `TypeError: data is not a function` },
  ],
  correctOptionId: "d",
  explanation: `
**❌ Output:**
\`\`\`js
TypeError: data is not a function
\`\`\`

---

### 🧠 Explanation:

#### 🔹 What happens here?

\`\`\`js
console.log(data()); // ❌ Trying to call \`data()\` before assignment

var data = function() {
  return "1";
};
\`\`\`

---

### 🔸 Explaination:

The code throws an error:

> \`TypeError: data is not a function\`

---

#### 🔹 Why This Happens:

##### 1. **Variable Hoisting**:
JavaScript hoists the **declaration** of \`data\` (because it's declared with \`var\`) to the top of the scope, but **not the initialization**.

So at the time of \`console.log(data())\`:

- \`data\` exists (hoisted as \`undefined\`)
- But it's still not a function — it's just \`undefined\`
- Calling \`undefined()\` throws a **TypeError**

##### 2. **Execution Order**:

\`\`\`js
console.log(data()); // ❌ Called BEFORE \`data\` is assigned a function

var data = function() { // Function expression (not hoisted)
  return "1";
};
\`\`\`

---

### ✅ Key Fix:

Use a **function declaration** (which is fully hoisted):

\`\`\`js
console.log(data()); // ✅ Works — prints "1"

function data() {
  return "1";
}
\`\`\`

---

### 🔁 Comparison:

| Scenario                  | Hoisting Behavior                 | Result                      |
|---------------------------|------------------------------------|-----------------------------|
| \`var data = function()\`  | Only variable name hoisted as \`undefined\` | ❌ Error (not a function)   |
| \`function data()\`        | Full function hoisted             | ✅ Callable before definition |

---

### 💡 Key Takeaway:

- Function **expressions** assigned to variables (\`var x = function(){}\`) are **not hoisted** as callable functions.
- Function **declarations** (\`function x(){}\`) are **fully hoisted**, so they can be called before they are defined.
`
},
   {
  id: "medium_16",
  questionText: "Guess the output?",
  codeSnippet: `const arr = [1, 2, 3];
arr[5] = 6;
console.log(arr.length);`,

  options: [
    { id: "a", text: "3" },
    { id: "b", text: "4" },
    { id: "c", text: "6" },
    { id: "d", text: "5" },
  ],
  correctOptionId: "c",
  explanation: `
**✅ Output:**
\`\`\`js
6
\`\`\`

---

### 🧠 Explanation:

#### 🔹 Initial Array:

\`\`\`js
const arr = [1, 2, 3]; 
// arr.length === 3
\`\`\`

This array has elements at indexes: 0, 1, and 2.

---

#### 🔹 Assigning to Index 5:

\`\`\`js
arr[5] = 6;
\`\`\`

- You're directly assigning a value to the 6th position (index 5).
- JavaScript expands the array to fit this index.
- The intermediate slots (index 3 and 4) are created as **"empty slots"**.

Resulting array:

\`\`\`js
[1, 2, 3, <empty>, <empty>, 6]
\`\`\`

---

#### 🔹 Array Length:

- JavaScript array length is always **highest index + 1**
- Here, the highest index is **5**
- So: \`length = 5 + 1 = 6\`

---

#### 🧩 Key Takeaways:

- JavaScript arrays are **dynamic** – they auto-expand when you assign values to non-existing indexes.
- **Empty slots ≠ undefined**  
  - \`undefined\` is an actual value.
  - An **empty slot** is a hole — it's uninitialized.
- \`.length\` reflects the **largest index + 1**, even if there are gaps.

---

✅ Final Output:

\`\`\`js
console.log(arr.length); // 6
\`\`\`
`
},
   {
  id: "medium_17",
  questionText: "Guess the output?",
  codeSnippet: `const obj = {
  a: 1
}
obj.a = 2;
console.log(obj);`,

  options: [
    { id: "a", text: "{ a: 1 }" },
    { id: "b", text: "{ a: 2 }" },
    { id: "c", text: "ReferenceError" },
    { id: "d", text: "TypeError" },
  ],
  correctOptionId: "b",
  explanation: `
**✅ Output:**
\`\`\`js
{ a: 2 }
\`\`\`

---

### 🧠 Explanation:

#### 1. Object Creation:
\`\`\`js
const obj = { a: 1 };
\`\`\`
An object \`obj\` is created with a property \`a\` set to \`1\`.

#### 2. Modifying the Property:
\`\`\`js
obj.a = 2;
\`\`\`
- The \`const\` keyword prevents reassignment of the variable \`obj\` itself.
- However, it **does NOT make the object immutable**.
- You can still update the properties inside the object.
- So, \`a\` is updated from \`1\` to \`2\`.

#### 3. Final Output:
\`\`\`js
console.log(obj); // { a: 2 }
\`\`\`

---

### 🔑 Key Takeaways:
- \`const\` protects the variable binding, **not** the object contents.
- Objects declared with \`const\` can have their properties modified freely.

`
},
    {
  id: "medium_18",
  questionText: "Guess the output?",
  codeSnippet: `let x = {
  a: undefined,
  b: null
}
console.log(JSON.stringify(x))`,

  options: [
    { id: "a", text: '{"a":undefined,"b":null}' },
    { id: "b", text: '{"a":null,"b":null}' },
    { id: "c", text: '{"b":null}' },
    { id: "d", text: '{}'},
  ],
  correctOptionId: "c",
  explanation: `
**✅ Output:**
\`\`\`json
{"b":null}
\`\`\`

---

### 🧠 Explanation:

1. Object \`x\` is defined as:
\`\`\`js
let x = {
  a: undefined,
  b: null
};
\`\`\`

2. Behavior of \`JSON.stringify()\`:
- Properties with the value \`undefined\` are **ignored** and excluded from the JSON output.
- Properties with the value \`null\` are **included** as \`null\` in the JSON output.

3. Result:
- Property \`a\` (which is \`undefined\`) is removed.
- Property \`b\` (which is \`null\`) is kept.

---

### 🔑 Key Takeaways:
- \`JSON.stringify()\` omits properties with \`undefined\` values.
- \`null\` is a valid JSON value and remains in the serialized output.
`
},
    {
  id: "medium_19",
  questionText: "Guess the output?",
  codeSnippet: `console.log(true + 1);
console.log(true + "1");`,

  options: [
    { id: "a", text: "2 and 'true1'" },
    { id: "b", text: "1 and 'true1'" },
    { id: "c", text: "true1 and 2" },
    { id: "d", text: "true2 and 11" },
  ],
  correctOptionId: "a",
  explanation: `
**✅ Output:**
\`\`\`
2
true1
\`\`\`

---

### 🧠 Explanation:

1. \`console.log(true + 1);\`
- **Boolean Conversion:** JavaScript converts \`true\` to its numeric equivalent \`1\`.
- **Addition:** 1 (from \`true\`) + 1 = 2.
- **Output:** 2

2. \`console.log(true + "1");\`
- **String Concatenation:** When \`+\` is used with a string, JavaScript converts all operands to strings.
- \`true\` → \`"true"\`
- \`"1"\` stays \`"1"\`
- **Concatenation:** "true" + "1" = "true1"
- **Output:** "true1"

---

### 🔑 Key Rules:
- \`+\` with numbers: Booleans convert to numbers (\`true → 1\`, \`false → 0\`).
- \`+\` with strings: Converts all operands to strings and concatenates them.
`
},
    {
  id: "medium_20",
  questionText: "Guess the output?",
  codeSnippet: `const str = "hello";
str.data = "val";
console.log(str.data);`,

  options: [
    { id: "a", text: `"val"` },
    { id: "b", text: `undefined` },
    { id: "c", text: `null` },
    { id: "d", text: `TypeError` },
  ],
  correctOptionId: "b",
  explanation: `
**✅ Output:**
\`\`\`
undefined
\`\`\`

---

### 🧠 Explanation:

1. **Primitive Strings vs. String Objects:**
- \`"hello"\` is a primitive string, not an object.
- Primitive values in JavaScript (string, number, boolean, etc.) cannot have properties added to them.

2. **What Happens When You Try to Add a Property:**
- When you do \`str.data = "val"\`, JavaScript temporarily wraps the primitive string in a String object to allow property assignment.
- However, this wrapper object is temporary and discarded immediately after the assignment.
- As a result, the property \`data\` is **not saved** on the primitive string.

3. **Accessing \`str.data\`:**
- When you access \`str.data\`, JavaScript again creates a new temporary String object.
- This new object does **not** have the \`data\` property.
- So, \`console.log(str.data)\` outputs \`undefined\`.

---

### 🔑 Key Takeaway:
Primitive strings cannot hold custom properties. If you need to associate properties, use an object (e.g., \`const obj = {}\`) instead of a primitive.
`
},
    // Add up to 20 questions similarly
  ],
};

export default javascriptMediumQuiz;
