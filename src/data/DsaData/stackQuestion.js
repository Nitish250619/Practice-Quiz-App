export const dsaStackQuestions = [
  // ✅ DAY 1 — Stack Basics & Implementation
  {
    id: 1,
    day: 1,
    topicGroup: "Stack Basics & Implementation",
    difficulty: "Easy",
    tags: ["stack", "implementation", "array-stack"],
    ques: "Implement Stack using Arrays",
    quesLink:
      "https://www.geeksforgeeks.org/stack-data-structure-introduction-program/",
    pattern: "Array-based Stack, Push/Pop/Top",
    solution:
      "Maintain an array and a top index. Push increments top and writes value; pop returns value at top and decrements top; check underflow/overflow.",
  },
  {
    id: 2,
    day: 1,
    topicGroup: "Stack Basics & Implementation",
    difficulty: "Easy",
    tags: ["stack", "implementation", "linked-list-stack"],
    ques: "Implement Stack using Linked List",
    quesLink:
      "https://www.geeksforgeeks.org/implement-a-stack-using-singly-linked-list/",
    pattern: "Linked List as Stack",
    solution:
      "Use head as top of stack. Push by inserting at head; pop by removing head; this gives O(1) operations.",
  },
  {
    id: 3,
    day: 1,
    topicGroup: "Stack Basics & Implementation",
    difficulty: "Easy",
    tags: ["stack", "parsing", "string"],
    ques: "Implement Stack using Queues",
    quesLink: "https://leetcode.com/problems/implement-stack-using-queues/",
    pattern: "Queue Rotation Trick",
    solution:
      "Use one queue. On push, enqueue element then rotate previous elements to move new element to front; pop is dequeue.",
  },
  {
    id: 4,
    day: 1,
    topicGroup: "Stack Basics & Implementation",
    difficulty: "Easy",
    tags: ["stack", "design", "min-stack"],
    ques: "Min Stack",
    quesLink: "https://leetcode.com/problems/min-stack/",
    pattern: "Stack with Extra Min Stack / Encoding",
    solution:
      "Use one stack for values and another for current min; on push/pop update min stack; top of min stack is O(1) minimum.",
  },
  {
    id: 5,
    day: 1,
    topicGroup: "Stack Basics & Implementation",
    difficulty: "Medium",
    tags: ["stack", "design", "max-stack"],
    ques: "Max Stack",
    quesLink: "https://www.lintcode.com/problem/859/",
    pattern: "Stack + Extra Max Stack",
    solution:
      "Similar to Min Stack; maintain parallel stack of max so far at each level to support O(1) max retrieval.",
  },

  // ✅ DAY 2 — Parentheses, Validity & Simplification
  {
    id: 6,
    day: 2,
    topicGroup: "Parentheses & Validity",
    difficulty: "Easy",
    tags: ["stack", "parentheses", "string"],
    ques: "Valid Parentheses",
    quesLink: "https://leetcode.com/problems/valid-parentheses/",
    pattern: "Stack Matching",
    solution:
      "Traverse string; push opening brackets; on closing, check stack top is matching opening. Valid if stack empty at end.",
  },
  {
    id: 7,
    day: 2,
    topicGroup: "Parentheses & Validity",
    difficulty: "Medium",
    tags: ["stack", "parentheses", "string"],
    ques: "Minimum Add to Make Parentheses Valid",
    quesLink:
      "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/",
    pattern: "Balance Counter / Stack",
    solution:
      "Track balance of open brackets; increment answer when you see an unmatched ')' or leftover open at end.",
  },
  {
    id: 8,
    day: 2,
    topicGroup: "Parentheses & Validity",
    difficulty: "Hard",
    tags: ["stack", "parentheses", "substring"],
    ques: "Longest Valid Parentheses",
    quesLink: "https://leetcode.com/problems/longest-valid-parentheses/",
    pattern: "Stack of Indices / DP",
    solution:
      "Use stack storing indices; push -1 initially. On '(', push index. On ')', pop; if stack empty push index; else update maxLen = i - stackTop.",
  },
  {
    id: 9,
    day: 2,
    topicGroup: "Parentheses & Validity",
    difficulty: "Medium",
    tags: ["stack", "string", "path"],
    ques: "Simplify Path",
    quesLink: "https://leetcode.com/problems/simplify-path/",
    pattern: "Stack of Directory Names",
    solution:
      "Split by '/'; push normal folder names; pop on '..'; ignore '.' and empty; join stack with '/' for canonical path.",
  },
  {
    id: 10,
    day: 2,
    topicGroup: "Parentheses & Validity",
    difficulty: "Medium",
    tags: ["stack", "string", "decode"],
    ques: "Decode String",
    quesLink: "https://leetcode.com/problems/decode-string/",
    pattern: "Two Stacks (count + string)",
    solution:
      "Traverse chars; on '[', push current string & count; on ']', pop and repeat substring; on digit build count; on letter append to current string.",
  },

  // ✅ DAY 3 — Monotonic Stack Basics (Next Greater / Smaller)
  {
    id: 11,
    day: 3,
    topicGroup: "Monotonic Stack Basics",
    difficulty: "Medium",
    tags: ["stack", "monotonic", "next-greater"],
    ques: "Next Greater Element I",
    quesLink: "https://leetcode.com/problems/next-greater-element-i/",
    pattern: "Monotonic Decreasing Stack",
    solution:
      "Traverse nums2, keep decreasing stack; when current > stack top, pop and mark it’s next greater as current. Use map for queries from nums1.",
  },
  {
    id: 12,
    day: 3,
    topicGroup: "Monotonic Stack Basics",
    difficulty: "Medium",
    tags: ["stack", "monotonic", "next-greater", "circular"],
    ques: "Next Greater Element II",
    quesLink: "https://leetcode.com/problems/next-greater-element-ii/",
    pattern: "Monotonic Stack + Circular Array",
    solution:
      "Traverse array twice using i % n; maintain decreasing stack of indices, assign next greater using modulo index trick.",
  },
  {
    id: 13,
    day: 3,
    topicGroup: "Monotonic Stack Basics",
    difficulty: "Medium",
    tags: ["stack", "monotonic", "temperature"],
    ques: "Daily Temperatures",
    quesLink: "https://leetcode.com/problems/daily-temperatures/",
    pattern: "Monotonic Decreasing Stack of Indices",
    solution:
      "Maintain stack of indices with decreasing temperatures; when current temperature is higher, pop and set answer as index difference.",
  },
  {
    id: 14,
    day: 3,
    topicGroup: "Monotonic Stack Basics",
    difficulty: "Medium",
    tags: ["stack", "monotonic", "stock-span"],
    ques: "Online Stock Span",
    quesLink: "https://leetcode.com/problems/online-stock-span/",
    pattern: "Monotonic Stack (price, span)",
    solution:
      "For each price, pop all smaller/equal prices accumulating span, then push (price, span); returned span is answer.",
  },
  {
    id: 15,
    day: 3,
    topicGroup: "Monotonic Stack Basics",
    difficulty: "Medium",
    tags: ["stack", "monotonic", "previous-next-smaller"],
    ques: "Previous and Next Smaller Element",
    quesLink:
      "https://www.geeksforgeeks.org/previous-smaller-element/",
    pattern: "Monotonic Increasing Stack",
    solution:
      "For each element, pop from stack until top is smaller; top (if any) is previous smaller. Similar idea for next smaller with reverse traversal.",
  },

  // ✅ DAY 4 — Stack + Arrays / Histogram / Subarrays
  {
    id: 16,
    day: 4,
    topicGroup: "Histogram & Subarray Patterns",
    difficulty: "Hard",
    tags: ["stack", "monotonic", "histogram"],
    ques: "Largest Rectangle in Histogram",
    quesLink: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    pattern: "Monotonic Increasing Stack",
    solution:
      "Maintain increasing stack of indices; when current bar is lower, pop and compute area as height[pop] * (i - stackTop - 1). Flush stack at end.",
  },
  {
    id: 17,
    day: 4,
    topicGroup: "Histogram & Subarray Patterns",
    difficulty: "Hard",
    tags: ["stack", "matrix", "histogram"],
    ques: "Maximal Rectangle",
    quesLink: "https://leetcode.com/problems/maximal-rectangle/",
    pattern: "Histogram per Row + Largest Rectangle",
    solution:
      "Treat each row as base; build height array of consecutive 1s; for each row run Largest Rectangle in Histogram using stack.",
  },
  {
    id: 18,
    day: 4,
    topicGroup: "Histogram & Subarray Patterns",
    difficulty: "Medium",
    tags: ["stack", "subarray", "min-sum"],
    ques: "Sum of Subarray Minimums",
    quesLink: "https://leetcode.com/problems/sum-of-subarray-minimums/",
    pattern: "Monotonic Stack, Contribution Technique",
    solution:
      "Use previous less and next less elements using monotonic stack; contribution of each element = value * leftCount * rightCount.",
  },
  {
    id: 19,
    day: 4,
    topicGroup: "Histogram & Subarray Patterns",
    difficulty: "Medium",
    tags: ["stack", "subarray", "max-sum"],
    ques: "Sum of Subarray Ranges",
    quesLink: "https://leetcode.com/problems/sum-of-subarray-ranges/",
    pattern: "Monotonic for Min and Max",
    solution:
      "Compute contribution as max minus min over all subarrays using two monotonic stack passes: one for max, one for min, then subtract.",
  },
  {
    id: 20,
    day: 4,
    topicGroup: "Histogram & Subarray Patterns",
    difficulty: "Medium",
    tags: ["stack", "array", "nge", "pge"],
    ques: "Next Greater Element III (Closest Greater with Same Digits)",
    quesLink: "https://leetcode.com/problems/next-greater-element-iii/",
    pattern: "Permutation Next Greater, Stack/Scan",
    solution:
      "Scan from right to find first decreasing digit. Then find just larger digit to its right, swap, and reverse suffix (similar to next permutation).",
  },

  // ✅ DAY 5 — Expression Evaluation & Polish Notations
  {
    id: 21,
    day: 5,
    topicGroup: "Expression Evaluation & Notation",
    difficulty: "Medium",
    tags: ["stack", "expression", "postfix"],
    ques: "Evaluate Reverse Polish Notation",
    quesLink: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    pattern: "Stack, Postfix Evaluation",
    solution:
      "Traverse tokens; push numbers; on operator, pop two numbers, apply operator, push result; final stack top is answer.",
  },
  {
    id: 22,
    day: 5,
    topicGroup: "Expression Evaluation & Notation",
    difficulty: "Medium",
    tags: ["stack", "expression", "infix-to-postfix"],
    ques: "Infix to Postfix Conversion",
    quesLink:
      "https://www.geeksforgeeks.org/convert-infix-expression-to-postfix-expression/",
    pattern: "Shunting Yard, Operator Stack",
    solution:
      "Use operator stack, output queue; push operands directly; manage precedence/associativity and parentheses when pushing/popping operators.",
  },
  {
    id: 23,
    day: 5,
    topicGroup: "Expression Evaluation & Notation",
    difficulty: "Medium",
    tags: ["stack", "expression", "calculator"],
    ques: "Basic Calculator II",
    quesLink: "https://leetcode.com/problems/basic-calculator-ii/",
    pattern: "Stack of Numbers, Last Operator",
    solution:
      "Scan string building numbers; when operator or end reached, apply previous operator to number using stack (for * and / immediately), then sum all.",
  },
  {
    id: 24,
    day: 5,
    topicGroup: "Expression Evaluation & Notation",
    difficulty: "Hard",
    tags: ["stack", "expression", "parentheses"],
    ques: "Basic Calculator (with parentheses)",
    quesLink: "https://leetcode.com/problems/basic-calculator/",
    pattern: "Stack for Sign & Previous Result",
    solution:
      "Maintain current result and sign; on '(', push result and sign, reset; on ')', pop and combine; handle +/− and digits.",
  },
  {
    id: 25,
    day: 5,
    topicGroup: "Expression Evaluation & Notation",
    difficulty: "Medium",
    tags: ["stack", "string", "backspace"],
    ques: "Backspace String Compare",
    quesLink: "https://leetcode.com/problems/backspace-string-compare/",
    pattern: "Stack Simulation / Two Pointers from End",
    solution:
      "Use stack or two-pointer with skip counters to simulate typing with '#' as backspace, then compare resulting strings.",
  },

  // ✅ DAY 6 — MAANG Favorite Stack Patterns
  {
    id: 26,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Medium",
    tags: ["stack", "string", "remove-duplicates"],
    ques: "Remove All Adjacent Duplicates in String II",
    quesLink:
      "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/",
    pattern: "Stack of (char, count)",
    solution:
      "Use stack storing (character, count). Increment count when same char appears; when count reaches k, pop entry.",
  },
  {
    id: 27,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Medium",
    tags: ["stack", "array", "span", "nge"],
    ques: "Next Greater Node in Linked List",
    quesLink: "https://leetcode.com/problems/next-greater-node-in-linked-list/",
    pattern: "Monotonic Stack on Array Values",
    solution:
      "Convert list to array; use stack of indices storing decreasing values; when current value is greater, pop and set result.",
  },
  {
    id: 28,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Medium",
    tags: ["stack", "binary-tree", "dfs"],
    ques: "Binary Tree Inorder Traversal (Iterative)",
    quesLink: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    pattern: "Stack-based DFS",
    solution:
      "Use stack and pointer; go left pushing nodes; when null, pop, process node, then go right.",
  },
  {
    id: 29, 
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Medium",
    tags: ["stack", "graph", "topo-sort"],
    ques: "Course Schedule II (Kahn or DFS)",
    quesLink: "https://leetcode.com/problems/course-schedule-ii/",
    pattern: "DFS + Stack (Topo Order) or BFS",
    solution:
      "DFS approach: perform DFS and add node to stack after exploring neighbors; final stack in reverse is topological order if no cycle.",
  },
  {
    id: 30,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Medium",
    tags: ["stack", "game", "array"],
    ques: "Asteroid Collision",
    quesLink: "https://leetcode.com/problems/asteroid-collision/",
    pattern: "Stack Simulation of Collisions",
    solution:
      "Traverse asteroids; push when moving right or stack empty; when left-moving hits right-moving stack top, resolve collision by comparing sizes and popping/keeping.",
  },
];
