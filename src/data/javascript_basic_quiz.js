const javascriptBasicQuiz = {
  id: "javascript_basic",
  name: "JavaScript Basic Quiz",
  description: "Covers foundational JavaScript concepts.",
  questions: [
    {
      id: "basic_1",
      questionText: "What is the output of 3+2+”7” ?",
      codeSnippet: `3 + 2 + "7"`,
      options: [
        { id: "a", text: "327" },
        { id: "b", text: "57" },
        { id: "c", text: "12" },
        { id: "d", text: "37" },
      ],
      correctOptionId: "b",
      explanation: `In JavaScript, the addition operator is evaluated from left to right. 
So, 3 + 2 = 5, then 5 + "7" results in "57" due to string coercion.`,
    },
    {
      id: "basic_2",
      questionText: "What is the output of the below logic?",
      codeSnippet: `const a = 1 < 2 < 3;
const b = 1 > 2 > 3;
console.log(a, b);`,
      options: [
        { id: "a", text: "false false" },
        { id: "b", text: "true true" },
        { id: "c", text: "true false" },
        { id: "d", text: "false true" },
      ],
      correctOptionId: "c",
      explanation: `In JavaScript, the comparison operators < and > have left-to-right
associativity. So, 1 < 2 < 3 is evaluated as (1 < 2) < 3 , which becomes true <
3 . When comparing a boolean value ( true ) with a number ( 3 ),
JavaScript coerces the boolean to a number, which is 1 . So, true < 3
evaluates to 1 < 3 , which is true .
Similarly, 1 > 2 > 3 is evaluated as (1 > 2) > 3 , which becomes false > 3 .
When comparing a boolean value ( false ) with a number ( 3 ),
JavaScript coerces the boolean to a number, which is 0 . So, false > 3
evaluates to 0 > 3 , which is false .
That's why console.log(a, b) prints true false .
`,
    },

    {
      id: "basic_3",
      questionText: "Guess the ouput ?",
      codeSnippet: `const p = { k: 1, l: 2 };
const q = { k: 1, l: 2 };
let isEqual = p==q;
let isStartEqual = p=== q;
console.log(isEqual, isStartEqual)`,
      options: [
        { id: "a", text: "false false" },
        { id: "b", text: "true true" },
        { id: "c", text: "true false" },
        { id: "d", text: "false true" },
      ],
      correctOptionId: "a",
      explanation: `
In JavaScript, when you compare objects using \`==\` or \`===\`, you're comparing their **references in memory**, not their actual contents.  
Even if two objects have the **same properties and values**, they are considered unequal unless they **reference the exact same object** in memory.

In the code:

- \`isEqual\` will be \`false\` because \`p\` and \`q\` are two **different objects** in memory.
- \`isStrictEqual\` will also be \`false\` for the same reason. The \`===\` operator checks for **strict equality**, meaning both **type and reference** must be the same.

🔚 So, \`console.log(isEqual, isStrictEqual)\` will output: **false false**
`,
    },
    // You can continue adding more questions with `codeSnippet` like this
    {
      id: "basic_4",
      questionText: "Guess the output ?",
      codeSnippet: `a) 2+2 = ?
b) "2"+"2" = ?
c) 2+2-2 = ?
d) "2"+"2"-"2" = ? (tricky remember this)
e) 4+"2"+2+4+"25"+2+2 ?`,
      options: [
        { id: "a", text: "4 , 22 , 3 , 20 , 42242522" },
        { id: "b", text: "4 , 4 , 2 , 0 , 12" },
        { id: "c", text: "5 , 22 , 2 , 20 , 57" },
        { id: "d", text: "4 , 22 , 2 , 20 , 42242522" },
      ],
      correctOptionId: "a",
      explanation: `
Here's the detailed breakdown of each expression:

a) 2 + 2 = 4  
Simple numeric addition.

b) "2" + "2" = "22"  
String concatenation of two strings.

c) 2 + 2 - 2 = 2  
Addition and subtraction of numbers: (2 + 2) = 4, then 4 - 2 = 2.

d) "2" + "2" - "2" = 20  
"2" + "2" results in "22" (string). Then "22" - "2" coerces both to numbers: 22 - 2 = 20.

e) 4 + "2" + 2 + 4 + "25" + 2 + 2 = "42242522"  
Evaluated left to right:  
4 + "2" = "42" (string)  
"42" + 2 = "422"  
"422" + 4 = "4224"  
"4224" + "25" = "422425"  
"422425" + 2 = "4224252"  
"4224252" + 2 = "42242522"
`,
    },

    {
      id: "basic_5",
      questionText: "What is the output of below logic ?",
      codeSnippet: `let a = 'jscafe'
a[0] = 'c'
console.log(a)`,
      options: [
        { id: "a", text: "cscafe" },
        { id: "b", text: "jscafe" },
        { id: "c", text: "undefined" },
        { id: "d", text: "Error" },
      ],
      correctOptionId: "b",
      explanation: `Strings are immutable in JavaScript, so we cannot change individual
characters by index. Although we attempt a[0] = 'c', it does not modify the string.
If you want to change the string, you can create a new one like:
a = "cscafe" // outputs "cscafe"`,
    },
    {
      id: "basic_6",
      questionText: "Output of below logic ?",
      codeSnippet: `var x=10;
function foo(){
  var x = 5;
  console.log(x)
}

foo();
console.log(x)`,
      options: [
        { id: "a", text: "5 and 10" },
        { id: "b", text: "5 and 12" },
        { id: "c", text: "10 and 5" },
        { id: "d", text: "10 and 10" },
      ],
      correctOptionId: "a",
      explanation: `In JavaScript, this code demonstrates variable scoping. When you declare a
variable inside a function using the var keyword, it creates a new variable
scoped to that function, which may shadow a variable with the same name in
an outer scope. Here's what happens step by step:
1. var x = 10; : Declares a global variable x and initializes it with the value 10.
2. function foo() { ... } : Defines a function named foo.
3. var x = 5; : Inside the function foo, declares a local variable x and initializes
it with the value 5. This x is scoped to the function foo and is different
from the global x.
4. console.log(x); : Logs the value of the local variable x (which is 5) to the
console from within the foo function.
5. foo(); : Calls the foo function.
6. console.log(x); : Logs the value of the global variable x (which is still 10) to
the console outside the foo function.`,
    },

    {
      id: "basic_7",
      questionText: "Guess the output ?",
      codeSnippet: `console.log("Start");
setTimeout(() => {
  console.log("Timeout");
});
Promise.resolve().then(() => console.log("Promise"));
console.log("End");`,
      options: [
        { id: "a", text: "Start, Timeout, Promise, End" },
        { id: "b", text: "Promise, Start, End, Timeout" },
        { id: "c", text: "End, Start, Promise, Timeout" },
        { id: "d", text: "Start, End, Promise, Timeout" },
      ],
      correctOptionId: "d",
      explanation: `"Start" is logged first because it's a synchronous operation.
Then, "End" is logged because it's another synchronous operation.
"Promise" is logged because Promise.resolve().then() is a microtask and
will be executed before the next tick of the event loop.
Finally, "Timeout" is logged. Even though it's a setTimeout with a
delay of 0 milliseconds, it's still a macrotask and will be executed in
the next tick of the event loop after all microtasks have been
executed.`,
    },

    {
      id: "basic_8",
      questionText:
        "This code prints 6 every time. How to print 1,2,3,4,5,6 ? (Most asked)",
      codeSnippet: `function x(){
  for(var i=1; i<=5; i++){
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
x();`,
      options: [
        {
          id: "a",
          text: `Use 'let' instead of 'var' in the loop:
for(let i=1; i<=5; i++){
  setTimeout(() => console.log(i), i*1000);
}`,
        },
        {
          id: "b",
          text: `Wrap setTimeout in a closure to capture current i:
function x() {
  function closur(x) {
    setTimeout(() => {
      console.log(x);
    }, x * 1000);
  }
  for (var i = 1; i <= 5; i++) {
    closur(i);
  }
}
x();`,
        },
        {
          id: "c",
          text: `Use a global variable instead of loop variable (doesn't fix issue):
var i = 1;
for(; i <= 5; i++){
  setTimeout(() => console.log(i), i*1000);
}`,
        },
        {
          id: "d",
          text: `Use setInterval instead of setTimeout (not suitable here):
var i = 1;
var interval = setInterval(() => {
  console.log(i);
  if(i++ === 5) clearInterval(interval);
}, 1000);`,
        },
      ],
      correctOptionId: "b",
      explanation: `The function we have written defines an inner function closur which is
supposed to log the value of x after x seconds. The outer function x calls
this inner function for values from 1 to 5.
The code will log the values 1 to 5 after 1 to 5 seconds respectively. Here's an
explanation of how it works:
1. The outer function x is called.
2. Inside x, a loop runs from i=1 to i=5.
3. For each iteration of the loop, the inner function closur is called with the
current value of i.
4. Inside closur, a setTimeout is set to log the value of x after x seconds.
Each call to closur(i) creates a new closure that captures the current value of i
and sets a timeout to log that value after i seconds.
When you run this code, the output will be:
1 (after 1 second)
2 (after 2 seconds)
3 (after 3 seconds)
4 (after 4 seconds)
5 (after 5 seconds)
This happens because each iteration of the loop calls closur with a different
value of i, and each setTimeout inside closur is set to log that value after i
seconds.`,
    },

    {
      id: "basic_9",
      questionText: "What’s the output of the below logic?",
      codeSnippet: `getData1();
getData();

function getData1(){
  console.log("getData11");
}

var getData = () => {
  console.log("Hello");
}

/* 
Here declaring getData with let causes ReferenceError:
"Cannot access 'getData' before initialization."

As we are declaring it with var, it throws a TypeError as shown below.
*/`,
      options: [
        { id: "a", text: "Uncaught TypeError: getData is not a function" },
        { id: "b", text: "getData11\nHello" },
        { id: "c", text: "undefined\nHello" },
        { id: "d", text: "Hello\ngetData11" },
      ],
      correctOptionId: "a",
      explanation: `In JavaScript, function declarations are **hoisted** to the top of their scope, while variable declarations using \`var\` are also hoisted but only **initialized as \`undefined\`**.

### Breakdown:
1. \`getData1()\` is a function declaration, so it is fully hoisted — both the name and the function body. Calling it before its declaration works fine.
2. \`getData\` is declared using \`var\`, so its **declaration** is hoisted, but **not the arrow function assigned to it**. Until the line where it’s defined, it holds the value \`undefined\`.
3. When \`getData()\` is invoked before the assignment, JavaScript throws:
   \`Uncaught TypeError: getData is not a function\`

### To avoid the error:
Either:
- Move the \`getData()\` call **after** the definition, or
- Use a **function declaration** instead of a variable with an arrow function.

### Modified Safe Code:
\`\`\`js
function getData1() {
  console.log("getData11");
}
var getData = () => {
  console.log("Hello");
};
getData1(); // logs "getData11"
getData();  // logs "Hello"
\`\`\``,
    },

    {
      id: "basic_10",
      questionText: "What is the output of the following code?",
      codeSnippet: `function x(){
  let a = 10;
  function d(){
    console.log(a);
  }
  a = 500;
  return d;
}
var z = x();
z();`,
      options: [
        { id: "a", text: "10" },
        { id: "b", text: "500" },
        { id: "c", text: "undefined" },
        { id: "d", text: "ReferenceError" },
      ],
      correctOptionId: "b",
      explanation: `In JavaScript, this code demonstrates lexical scoping and closure. Let's break it down:

1. \`function x() { ... }\` : Defines a function named \`x\`.
2. \`let a = 10;\` : Declares a variable \`a\` inside the function \`x\` and initializes it with the value \`10\`.
3. \`function d() { ... }\` : Defines a nested function named \`d\` inside the function \`x\`.
4. \`console.log(a);\` : Logs the value of the variable \`a\` to the console. Since \`d\` is defined within the scope of \`x\`, it has access to the variable \`a\` defined in \`x\`.
5. \`a = 500;\` : Changes the value of the variable \`a\` to \`500\`.
6. \`return d;\` : Returns the function \`d\` from the function \`x\`.
7. \`var z = x();\` : Calls the function \`x\` and assigns the returned function \`d\` to the variable \`z\`.
8. \`z();\` : Calls the function \`d\` through the variable \`z\`.

**When you run this code, it will log \`500\`**, because:
- The function \`d\` forms a closure and retains access to the variable \`a\` even after \`x\` has finished executing.
- Closures in JavaScript capture variables by **reference**, not by value, so the updated value \`500\` is used.`,
    },
    {
      id: "basic_11",
      questionText: "What's the output of the below code?",
      codeSnippet: `function func() {
  try {
    console.log(1);
    return;
  } catch (e) {
    console.log(2);
  } finally {
    console.log(3);
  }
  console.log(4);
}
func();`,
      options: [
        { id: "a", text: "1 and 3" },
        { id: "b", text: "1 and 4" },
        { id: "c", text: "2 and 3" },
        { id: "d", text: "ReferenceError" },
      ],
      correctOptionId: "a",
      explanation: `1. The function \`func()\` is defined.
2. Inside the \`try\` block:
   - \`console.log(1)\` is executed, printing 1 to the console.
   - \`return\` is encountered, which immediately exits the function.
3. The \`finally\` block is executed regardless:
   - \`console.log(3)\` is executed, printing 3 to the console.
4. The \`catch\` block is skipped since no errors occurred.
5. The code after \`finally\` (i.e., \`console.log(4)\`) is not executed because of the \`return\`.

Therefore, when you run this code, it prints:
1  
3`,
    },

    {
      id: "basic_12",
      questionText: "What’s the output of the below code?",
      codeSnippet: `const nums = [1,2,3,4,5,6,7];
nums.forEach((n) => {
  if (n % 2 === 0) {
    break;
  }
  console.log(n);
});`,
      options: [
        { id: "a", text: "1 3 5 7" },
        { id: "b", text: "Uncaught SyntaxError: Illegal break statement" },
        { id: "c", text: "1 2 3 4 5 6 7" },
        { id: "d", text: "No output" },
      ],
      correctOptionId: "b",
      explanation: `Many of you might think the output would be numbers until the break condition, like 1, 2, 3, etc. 
However, the "break" statement only works inside loop constructs such as for, while, and do...while loops. 
It does not work inside functions like forEach(), which is essentially a function that takes a callback.
Using "break" inside forEach() results in a syntax error: "Uncaught SyntaxError: Illegal break statement".`,
    },

    {
      id: "basic_13",
      questionText: "Whats the output of below code ?",
      codeSnippet: `let a = true;
setTimeout(() => {
  a = false;
}, 2000)

while(a) {
  console.log(' -- inside whilee -- ');
}
`,
      options: [
        { id: "a", text: "No output" },
        { id: "b", text: "Code runs and exits after 2 seconds" },
        { id: "c", text: "Throws an error" },
        { id: "d", text: "' -- inside whilee -- ' printed infinitely" },
      ],
      correctOptionId: "d",
      explanation: `This code snippet creates an infinite loop. Let's break it down:
1. let a = true; : This declares a variable a and initializes it to true.
2. setTimeout(() => { a = false; }, 2000) : Sets a timer to update a to false after 2 seconds.
3. while(a) { console.log(' -- inside whilee -- '); } : This loop runs as long as a is true.
The problem is that the while loop blocks the JavaScript event loop, preventing the setTimeout callback from executing and changing the value of a.
So, the loop runs infinitely, continuously printing ' -- inside whilee -- '.
To fix this, consider using asynchronous constructs like Promises or async/await to avoid blocking the event loop.`,
    },

    {
      id: "basic_14",
      questionText: "Whats the output of below code ?",
      codeSnippet: `setTimeout(() => console.log(1), 0);

console.log(2);

new Promise(res => {
  console.log(3)
  res();
}).then(() => console.log(4));

console.log(5);`,

      options: [
        { id: "a", text: "1 2 3 4 5" },
        { id: "b", text: "3 2 5 1 4" },
        { id: "c", text: "2 3 5 4 1" },
        { id: "d", text: "3 2 5 4 1" },
      ],
      correctOptionId: "c",
      explanation: `This code demonstrates how the JavaScript event loop handles different types of tasks.

Breakdown:

1. \`setTimeout(() => console.log(1), 0);\`  
   - This schedules a **macrotask** to run after 0ms. But it gets queued behind all synchronous code and any **microtasks**.

2. \`console.log(2);\`  
   - Synchronous: Executes immediately → logs \`2\`.

3. \`new Promise(res => { console.log(3); res(); }).then(() => console.log(4));\`  
   - The executor logs \`3\` immediately (synchronous).
   - Then queues a **microtask** (the \`.then()\` callback to log \`4\`).

4. \`console.log(5);\`  
   - Synchronous: Executes immediately → logs \`5\`.

After synchronous code:
- Microtasks are executed next → \`console.log(4)\`.
- Finally, macrotasks (like setTimeout) → \`console.log(1)\`.

**Final Output (in order):**  
\`2\`  
\`3\`  
\`5\`  
\`4\`  
\`1\`

Hence, correct answer is **"2 3 5 4 1"**.`,
    },
    {
      id: "basic_15",
      questionText: "Output of below logic ?",
      codeSnippet: `async function foo() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
  await new Promise(resolve => setTimeout(resolve, 0));
  console.log("C");
}
 
console.log("D");
foo();
console.log("E");`,

      options: [
        { id: "a", text: "D A E B C" },
        { id: "b", text: "A D E B C" },
        { id: "c", text: "D A B E C" },
        { id: "d", text: "A D B E C" },
      ],
      correctOptionId: "a",
      explanation: `This code demonstrates how JavaScript's async/await and event loop behave.

### Breakdown of execution:

1. \`console.log("D")\`:  
   - Runs first (synchronous) → logs \`D\`

2. \`foo()\` is called:
   - Enters the async function → logs \`A\`
   - Encounters \`await Promise.resolve()\`, which pauses the function
   - Control returns to main thread immediately

3. Back in main thread:
   - \`console.log("E")\`: Logs \`E\`

4. The first \`await\` resolves (microtask), and foo resumes:
   - \`console.log("B")\`: Logs \`B\`

5. Then it encounters:
   - \`await new Promise(resolve => setTimeout(resolve, 0));\`
   - This schedules a macrotask (timer), so foo pauses again

6. After macrotasks begin:
   - \`console.log("C")\`: Logs \`C\`

### Final Output:
\`\`\`
D
A
E
B
C
\`\`\`

The order shows how microtasks and macrotasks interact in the JS event loop.`,
    },

    {
      id: "basic_16",
      questionText: "Guess the output?",
      codeSnippet: `let output = (function(x) {
  delete x;
  return x;
})(3);
console.log(output);`,

      options: [
        { id: "a", text: "undefined" },
        { id: "b", text: "null" },
        { id: "c", text: "ReferenceError" },
        { id: "d", text: "3" },
      ],
      correctOptionId: "d",
      explanation: `### Let's break it down:

1. An **Immediately Invoked Function Expression (IIFE)** is defined and executed:  
   \`(function(x) { delete x; return x; })(3);\`

2. The function receives **3** as the argument for \`x\`.

3. Inside the function:
   - \`delete x;\` is executed.  
   - But \`delete\` is **meant for object properties**, not local variables or function parameters.
   - So \`delete x;\` does **nothing** here — \`x\` is still 3.

4. Then \`return x;\` is executed → returns **3**

5. The result is assigned to \`output\` and logged.

✅ So, the output is: **3**

🧠 **Note:**  
- In strict mode, \`delete x;\` would throw a SyntaxError.  
- In non-strict mode (like here), it's simply ignored when used on a local variable or function parameter.`,
    },

    {
      id: "basic_17",
      questionText: "Guess the output of the below code?",
      codeSnippet: `for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 + i);
}`,

      options: [
        { id: "a", text: "0 1 2" },
        { id: "b", text: "3 3 3" },
        { id: "c", text: "undefined undefined undefined" },
        { id: "d", text: "1 2 3" },
      ],
      correctOptionId: "b",
      explanation: `### Explanation:

🔁 The loop runs from \`i = 0\` to \`i < 3\`, creating **3 setTimeout callbacks**.

📌 All the setTimeouts are scheduled asynchronously, but they **capture the same variable** \`i\`, declared using \`var\`, which is function-scoped.

⏱ Delays:
- First timeout at 1000ms
- Second at 1001ms
- Third at 1002ms

💡 At the time each timeout callback runs, the loop has already completed and \`i = 3\`.

Therefore, **all three callbacks print: \`3 3 3\`**

✅ Output: **3 3 3**

---

🧠 **Bonus Tip (interview use case):**
To fix this and get \`0 1 2\`, you could use:
- \`let i\` instead of \`var i\`, or
- Use an IIFE or block-scoped closure to capture each value of \`i\` properly.
`,
    },

    {
      id: "basic_18",
      questionText: "Guess the output of the following code?",
      codeSnippet: `let output = (function(x){
  delete x;
  return x;
})(3);
console.log(output);`,

      options: [
        { id: "a", text: "undefined" },
        { id: "b", text: "ReferenceError" },
        { id: "c", text: "3" },
        { id: "d", text: "null" },
      ],
      correctOptionId: "c",
      explanation: `### Explanation:

1️⃣ This code uses an **Immediately Invoked Function Expression (IIFE)** that takes \`x\` as a parameter with value \`3\`.

2️⃣ Inside the function, \`delete x;\` is executed.  
The **\`delete\` operator** is used to remove **object properties**, not local variables or function parameters.

🔍 In this case:
- \`x\` is a parameter, not a property of an object.
- \`delete x;\` has **no effect**, and **\`x\` remains unchanged**.
- In **strict mode**, it would throw an error. But here it's not in strict mode.

3️⃣ \`return x;\` still returns the value \`3\`.

4️⃣ That returned value is stored in \`output\` and logged using \`console.log(output);\`.

✅ **Final Output:** \`3\`
`,
    },
    {
      id: "basic_19",
      questionText: "Guess the output of the following code?",
      codeSnippet: `let c = 0;
let id = setInterval(() => {
  console.log(c++);
}, 10);

setTimeout(() => {
  clearInterval(id);
}, 2000);`,

      options: [
        { id: "a", text: "Logs values from 0 to 19" },
        { id: "b", text: "Logs values from 0 to 200" },
        { id: "c", text: "Logs values from 0 to 199" },
        {
          id: "d",
          text: "Logs values from 0 to ~199 depending on system performance",
        },
      ],
      correctOptionId: "d",
      explanation: `### Explanation:

🔁 \`setInterval\` and 🕒 \`setTimeout\` are used to create a repeating action and to stop it after a duration.

1️⃣ \`let c = 0;\` initializes a counter.

2️⃣ \`setInterval(() => console.log(c++), 10);\`
- Logs \`c\` every **10 milliseconds**.

3️⃣ \`setTimeout(() => clearInterval(id), 2000);\`
- Stops the interval after **2000 milliseconds (2 seconds)**.

✅ So theoretically:
- 2000 / 10 = **200 logs** should be printed (from 0 to 199).
- However, JavaScript timers aren't perfectly accurate due to the **event loop and system performance**.
- As a result, the **actual count could be slightly less than 200**, especially on slower systems or heavier browser loads.

📌 **Correct Answer:**  
**"Logs values from 0 to ~199 depending on system performance"**
`,
    },
    {
      id: "basic_20",
      questionText: "What would be the output of the following code?",
      codeSnippet: `function getName1(){
  console.log(this.name);
}

Object.prototype.getName2 = () => {
  console.log(this.name);
}

let personObj = {
  name: "Tony",
  print: getName1
};

personObj.print();       // ?
personObj.getName2();    // ?`,
      options: [
        { id: "a", text: "Tony Steve" },
        { id: "b", text: "undefined undefined" },
        { id: "c", text: "Tony undefined" },
        { id: "d", text: "ReferenceError" },
      ],
      correctOptionId: "c",
      explanation: `### Explanation:

🔸 **\`getName1\` function** is a **regular function**, assigned to the \`print\` property of \`personObj\`.  
When you call \`personObj.print()\`, \`this\` refers to \`personObj\`, and so:
- \`this.name\` → **"Tony"**

🔸 **\`getName2\` is an arrow function** assigned to \`Object.prototype\`.  
Arrow functions **do not have their own \`this\`**, they inherit it from the **lexical scope** where they were defined — which is likely the global object or module scope.

- So, \`this.name\` inside \`getName2\` refers to the global scope.
- If there is no global \`name\` defined, it logs **\`undefined\`**.

📌 Therefore, the output is:

\`\`\`
Tony
undefined
\`\`\`

✅ **Correct Answer:** "Tony undefined"
`,
    },
    {
      id: "basic_21",
      questionText:
        "What would be the output of the following JavaScript code?",
      codeSnippet: `function test() {
  console.log(a);
  console.log(foo());
  
  var a = 1;
  function foo() {
    return 2;
  }
}

test();`,
      options: [
        { id: "a", text: "1 and 2" },
        { id: "b", text: "undefined and 2" },
        { id: "c", text: "undefined and ReferenceError" },
        { id: "d", text: "ReferenceError and 2" },
      ],
      correctOptionId: "b",
      explanation: `### Explanation:

JavaScript performs **hoisting** for both variable and function declarations. Here's what happens during execution:

1. **Variable Hoisting:**
   - \`var a\` is hoisted to the top of the \`test\` function's scope.
   - However, only the **declaration** is hoisted, **not the initialization**, so \`a\` is \`undefined\` when \`console.log(a)\` runs.

2. **Function Hoisting:**
   - \`function foo()\` is fully hoisted, including its definition.
   - So, \`foo()\` is safely called and returns \`2\`.

📌 Final output:

\`\`\`
undefined
2
\`\`\`

✅ **Correct Answer:** "undefined and 2"
`,
    },
    {
      id: "basic_22",
      questionText:
        "What is the output of the following JavaScript code involving promises?",
      codeSnippet: `function job(){
  return new Promise((resolve, reject) => {
    reject();
  });
}

let promise = job();

promise
  .then(() => {
    console.log("1111111111");
  })
  .then(() => {
    console.log("22222222222");
  })
  .catch(() => {
    console.log("3333333333");
  })
  .then(() => {
    console.log("4444444444");
  });`,
      options: [
        {
          id: "a",
          text: `1111111111\n22222222222\n3333333333\n4444444444`,
        },
        {
          id: "b",
          text: `3333333333\n4444444444`,
        },
        {
          id: "c",
          text: `3333333333`,
        },
        {
          id: "d",
          text: `No output, error occurs`,
        },
      ],
      correctOptionId: "b",
      explanation: `### Explanation:

This code demonstrates **promise chaining and rejection handling**.

1. \`job()\` returns a promise that **immediately rejects**.

2. The first two \`.then()\` handlers are **skipped** because the promise is rejected.

3. The \`.catch()\` block **handles the rejection**, so it logs:

   \`\`\`
   3333333333
   \`\`\`

4. After the rejection is handled, the promise is **considered resolved**, so the following \`.then()\` **does execute**, logging:

   \`\`\`
   4444444444
   \`\`\`

📌 **Final Output**:

\`\`\`
3333333333
4444444444
\`\`\`

✅ Correct Answer: "3333333333\\n4444444444"
`,
    },
    {
      id: "basic_23",
      questionText: "What will be the output of the following JavaScript code?",
      codeSnippet:
        "var a = 1;\nfunction data() {\n  if (!a) {\n    var a = 10;\n  }\n  console.log(a);\n}\ndata();\nconsole.log(a);",
      options: [
        { id: "a", text: "10\\n1" },
        { id: "b", text: "1\\n1" },
        { id: "c", text: "undefined\\n1" },
        { id: "d", text: "undefined\\nundefined" },
      ],
      correctOptionId: "a",
      explanation:
        "This code demonstrates variable hoisting and function scope of var.\\n\\nBreakdown:\\n- var a = 1; declares a global variable a.\\n\\n- Inside data(), var a is hoisted and initialized as undefined.\\n\\n- The if condition (!a) is true (because undefined is falsy), so a = 10.\\n\\n- console.log(a) inside the function prints 10.\\n\\n- console.log(a) outside prints the global a, which is still 1.\\n\\nOutput:\\n10\\n1",
    },
    {
      id: "basic_24",
      questionText:
        "Test your array basics: What is the output of the following code?",
      codeSnippet: `function guessArray() {
  let a = [1, 2];
  let b = [1, 2];
  console.log(a == b);
  console.log(a === b);
}
guessArray();`,
      options: [
        { id: "a", text: "true true" },
        { id: "b", text: "false false" },
        { id: "c", text: "true false" },
        { id: "d", text: "false true" },
      ],
      correctOptionId: "b",
      explanation: `In JavaScript, when you compare two arrays using == or ===, you're comparing their references in memory, not their contents. Even if two arrays have identical elements, they are considered unequal unless they reference the exact same array object.

In the guessArray function, a and b are two different arrays with the same elements. So both a == b and a === b return false.

To compare array contents, you need to compare each element individually or use methods like JSON.stringify() or a utility like lodash's isEqual.`,
    },
    {
      id: "basic_25",
      questionText:
        "Test your basics on comparison: What is the output of the following code?",
      codeSnippet: `let a = 3;
let b = new Number(3);
let c = 3;
console.log(a == b);
console.log(a === b);
console.log(b === c);`,
      options: [
        { id: "a", text: "true true true" },
        { id: "b", text: "true false false" },
        { id: "c", text: "false true false" },
        { id: "d", text: "false false true" },
      ],
      correctOptionId: "b",
      explanation: `
new Number() creates a Number object, which is different from a primitive number.

- a == b is true because == does type coercion and compares the values (3 == 3).
- a === b is false because === checks both value and type strictly (number vs object).
- b === c is false for the same reason (object vs number).

Therefore, the output is:
true
false
false
`,
    },
    {
      id: "basic_26",
      questionText: `Guess the output?

var x = 23;
(function(){
  var x = 43;

  (function random(){
    x++;
    console.log(x);
    var x = 21;
  })();
})();`,
      options: [
        { id: "a", text: "44" },
        { id: "b", text: "NaN" },
        { id: "c", text: "21" },
        { id: "d", text: "23" },
      ],
      correctOptionId: "b",
      explanation: `
The provided code snippet demonstrates the behavior of variable hoisting and function scope in JavaScript. Let's analyze the code step-by-step to understand the output:

1. Global Scope:
   var x = 23;
   A global variable x is declared and initialized with the value 23.

2. First IIFE (Immediately Invoked Function Expression):
   (function(){
     var x = 43;
     // ...
   })();
   A new function scope is created. Inside this function, a local variable x is declared and initialized with the value 43. This x shadows the global x.

3. Second IIFE (Nested function, named random):
   (function random(){
     x++;
     console.log(x);
     var x = 21;
   })();
   Another function scope is created inside the first IIFE. The function random is invoked immediately.

4. Inside the random function:
   x++;
   console.log(x);
   var x = 21;

   Here, variable hoisting comes into play. The declaration var x = 21; is hoisted to the top of the function random, but not its initialization. Thus, the code is interpreted as:

   var x; // x is hoisted, but not initialized
   x++;
   console.log(x);
   x = 21;

   Initially, x is undefined because the hoisted declaration of x does not include its initialization.

   x++ attempts to increment x when it is still undefined. In JavaScript, undefined++ results in NaN (Not a Number).

   Therefore, console.log(x); outputs NaN.

   After the console.log statement, x is assigned the value 21, but this assignment happens after the console.log and thus does not affect the output.

Summary:
When random function is executed, the following sequence occurs:
1. var x; (hoisting, x is undefined at this point)
2. x++; ( undefined++ results in NaN )
3. console.log(x); outputs NaN
4. x = 21; (assigns 21 to x, but this is after the console.log)

Output:
Thus, the output of the code is: NaN
`,
    },
    {
      id: "basic_27",
      questionText:
        "Answer the following queries about the typeof operator in JavaScript:",
      codeSnippet: `typeof [1,2,3,4]   // Returns ?
typeof null          // Returns ?
typeof NaN           // Returns ?
typeof 1234n         // Returns ?
typeof 3.14          // Returns ?
typeof Symbol()      // Returns ?
typeof "John"        // Returns ?
typeof 33            // Returns ?
typeof true          // Returns ?
typeof undefined     // Returns ?`,
      options: [
        {
          id: "a",
          text: `object, object, number, bigint, number, symbol, string, number, boolean, undefined`,
        },
        {
          id: "b",
          text: `array, null, NaN, bigint, float, symbol, string, int, bool, undefined`,
        },
        {
          id: "c",
          text: `object, null, NaN, bigint, number, symbol, string, number, boolean, undefined`,
        },
        {
          id: "d",
          text: `object, object, number, number, number, symbol, string, number, boolean, undefined`,
        },
      ],
      correctOptionId: "a",
      explanation: `
The typeof operator in JavaScript returns a string indicating the type of the unevaluated operand.

Here are the results for the given expressions:

- typeof [1,2,3,4] returns "object" because arrays are specialized objects.
- typeof null returns "object" due to a historic JavaScript bug.
- typeof NaN returns "number" because NaN is a special numeric value representing Not-a-Number.
- typeof 1234n returns "bigint" since it's a BigInt literal.
- typeof 3.14 returns "number" as all numeric values (integers and floats) are of type number.
- typeof Symbol() returns "symbol" which is a unique and immutable primitive.
- typeof "John" returns "string".
- typeof 33 returns "number".
- typeof true returns "boolean".
- typeof undefined returns "undefined".
`,
    },
    {
      id: "basic_28",
      questionText:
        "Is there any security issue in the following JavaScript code? Explain.",
      codeSnippet: `const data = await fetch("api");
const div = document.getElementById("todo");
div.innerHTML = data;`,
      options: [
        { id: "a", text: "No security issue, code is safe." },
        {
          id: "b",
          text: "Yes, it can lead to Cross-Site Scripting (XSS) attacks.",
        },
        { id: "c", text: "Yes, it causes memory leaks." },
        { id: "d", text: "No issue, but inefficient network usage." },
      ],
      correctOptionId: "b",
      explanation: `
The code assigns data directly to div.innerHTML. If the API returns
untrusted or user-controlled content, this can lead to Cross-Site
Scripting (XSS) vulnerabilities by executing malicious scripts in the page context.

To fix this, sanitize the input before inserting it into innerHTML,
for example by using a library like DOMPurify:

\`\`\`js
const data = await fetch("api");
const div = document.getElementById("todo");
data.text().then(text => {
  div.innerHTML = DOMPurify.sanitize(text);
});
\`\`\`

Alternatively, use safer alternatives like \`textContent\` if HTML is not
needed.

Always validate and sanitize external data before injecting into the DOM.
`,
    },
    {
      id: "basic_29",
      questionText: "Guess the output of the following code:",
      codeSnippet: `console.log(typeof typeof 1);`,
      options: [
        { id: "a", text: `"number"` },
        { id: "b", text: `"string"` },
        { id: "c", text: `"undefined"` },
        { id: "d", text: `"object"` },
      ],
      correctOptionId: "b",
      explanation: `
The \`typeof\` operator returns the type of its operand as a string.
1. First, \`typeof 1\` evaluates to the string \`"number"\`.
2. Then, \`typeof "number"\` evaluates to \`"string"\` because the operand is a string.
Thus, \`console.log(typeof typeof 1)\` outputs \`"string"\`.
`,
    },
    {
      id: "basic_30",
      questionText: "Guess the output of the following code?",
      codeSnippet: `
x++;
console.log(x);
var x = 21;
`,
      options: [
        { id: "a", text: "21" },
        { id: "b", text: "undefined" },
        { id: "c", text: "NaN" },
        { id: "d", text: "ReferenceError" },
      ],
      correctOptionId: "c",
      explanation: `
In JavaScript, variables declared with \`var\` are hoisted to the top of their scope and initialized with \`undefined\`. Here’s what happens step-by-step:
1. \`var x\` is hoisted and initialized as \`undefined\`.
2. The statement \`x++\` tries to increment \`x\`, but since \`x\` is \`undefined\`, it is coerced to \`NaN\`.
3. \`console.log(x)\` prints \`NaN\`.
4. Later, \`x = 21\` is executed, but this happens after the \`console.log\`.

So the output is \`NaN\`.
`,
    },
  ],
};

export default javascriptBasicQuiz;
