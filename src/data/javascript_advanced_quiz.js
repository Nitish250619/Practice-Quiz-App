const javascriptAdvancedQuiz = {
  id: 'javascript_advanced',
  name: 'JavaScript Advanced Quiz',
  description: 'Covers advanced concepts like closures, prototypes, and async patterns.',
  questions: [
    {
      id: 'adv_1',
      questionText: 'What is a closure in JavaScript?',
      options: [
        { id: 'a', text: 'A block scope' },
        { id: 'b', text: 'A function having access to its outer function scope' },
        { id: 'c', text: 'An object with private members' },
        { id: 'd', text: 'A loop with a function inside' },
      ],
      correctOptionId: 'b',
      explanation: 'Closure is when a function remembers its lexical scope even when invoked outside.',
    },
    {
      id: 'adv_2',
      questionText: 'Which of the following best describes the prototype chain?',
      options: [
        { id: 'a', text: 'A chain of DOM elements' },
        { id: 'b', text: 'The path used to resolve methods/properties in JS inheritance' },
        { id: 'c', text: 'A recursion of constructor calls' },
        { id: 'd', text: 'A hierarchy of ES modules' },
      ],
      correctOptionId: 'b',
      explanation: 'JavaScript uses a prototype chain to resolve property lookups.',
    },
    {
      id: 'adv_3',
      questionText: 'What is the output of `await Promise.resolve(5)` in async function?',
      options: [
        { id: 'a', text: 'Promise { 5 }' },
        { id: 'b', text: '5' },
        { id: 'c', text: 'undefined' },
        { id: 'd', text: 'Error' },
      ],
      correctOptionId: 'b',
      explanation: '`await` unwraps the promise, so it returns the resolved value: 5.',
    },
    // Add up to 20 questions similarly
  ],
};

export default javascriptAdvancedQuiz;
