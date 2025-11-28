export const dsaRecursionQuestions = [
  // ✅ DAY 1 — Recursion Basics (Numbers & Arrays)
  {
    id: 1,
    day: 1,
    topicGroup: "Recursion Basics",
    difficulty: "Easy",
    tags: ["recursion", "math", "factorial"],
    ques: "Factorial of a Number (Recursive)",
    quesLink:
      "https://www.geeksforgeeks.org/program-for-factorial-of-a-number/",
    pattern: "Simple Recurrence, n * f(n-1)",
    solution:
      "Base case: n == 0 or 1 → return 1. Recursive case: return n * fact(n-1). Watch for stack overflow on big n.",
  },
  {
    id: 2,
    day: 1,
    topicGroup: "Recursion Basics",
    difficulty: "Easy",
    tags: ["recursion", "math", "fibonacci"],
    ques: "Nth Fibonacci Number (Recursive)",
    quesLink: "https://leetcode.com/problems/fibonacci-number/",
    pattern: "Simple Recurrence, f(n-1) + f(n-2)",
    solution:
      "Base: f(0)=0, f(1)=1. For n>1, return f(n-1)+f(n-2). Use memoization/top-down DP to avoid exponential time.",
  },
  {
    id: 3,
    day: 1,
    topicGroup: "Recursion Basics",
    difficulty: "Easy",
    tags: ["recursion", "array", "sum"],
    ques: "Sum of Array Elements Using Recursion",
    quesLink:
      "https://www.geeksforgeeks.org/sum-of-array-elements-using-recursion/",
    pattern: "Divide Problem, Sum of Prefix",
    solution:
      "Base: when index == n, return 0. Recursive: return arr[i] + recurse(i+1). Or split array into halves and sum both sides.",
  },
  {
    id: 4,
    day: 1,
    topicGroup: "Recursion Basics",
    difficulty: "Easy",
    tags: ["recursion", "array", "search"],
    ques: "Linear Search Using Recursion",
    quesLink:
      "https://www.geeksforgeeks.org/recursive-program-for-linear-search/",
    pattern: "Check Current & Recurse on Rest",
    solution:
      "Base: if index == n, return -1. If arr[i]==target, return i; else recurse with i+1.",
  },
  {
    id: 5,
    day: 1,
    topicGroup: "Recursion Basics",
    difficulty: "Easy",
    tags: ["recursion", "string", "reverse"],
    ques: "Reverse a String Using Recursion",
    quesLink: "https://www.geeksforgeeks.org/reverse-a-string-using-recursion/",
    pattern: "Take Last + Reverse of Prefix",
    solution:
      "Base: empty or length 1 → return string. Recursive: lastChar + reverse(remainingPrefix).",
  },
  {
    id: 6,
    day: 1,
    topicGroup: "Recursion Basics",
    difficulty: "Easy",
    tags: ["recursion", "math", "power"],
    ques: "Power Function (x^n) using Recursion",
    quesLink: "https://leetcode.com/problems/powx-n/",
    pattern: "Divide & Conquer, Fast Power",
    solution:
      "Base: n==0 → 1. Recursively compute half = pow(x, n/2); if n even, half*half; if odd, half*half*x; handle negative n by inverting x.",
  },

  // ✅ DAY 2 — Subsets, Combinations & Power Set
  {
    id: 7,
    day: 2,
    topicGroup: "Subsets & Combinations",
    difficulty: "Medium",
    tags: ["recursion", "backtracking", "subsets"],
    ques: "Subsets (Power Set)",
    quesLink: "https://leetcode.com/problems/subsets/",
    pattern: "Backtracking, Include/Exclude",
    solution:
      "Use backtracking: at each index choose to include or exclude element; add current path to result at each step.",
  },
  {
    id: 8,
    day: 2,
    topicGroup: "Subsets & Combinations",
    difficulty: "Medium",
    tags: ["recursion", "backtracking", "subsets", "duplicates"],
    ques: "Subsets II (With Duplicates)",
    quesLink: "https://leetcode.com/problems/subsets-ii/",
    pattern: "Backtracking with Duplicate Skip",
    solution:
      "Sort array; in DFS, when looping over choices at same level, skip nums[i] if equal to nums[i-1] to avoid duplicate subsets.",
  },
  {
    id: 9,
    day: 2,
    topicGroup: "Subsets & Combinations",
    difficulty: "Medium",
    tags: ["recursion", "backtracking", "combination-sum"],
    ques: "Combination Sum",
    quesLink: "https://leetcode.com/problems/combination-sum/",
    pattern: "Backtracking, Reuse Elements",
    solution:
      "DFS with index and current sum; at each step either take current candidate (stay at same index) or skip to next; stop when sum>target.",
  },
  {
    id: 10,
    day: 2,
    topicGroup: "Subsets & Combinations",
    difficulty: "Medium",
    tags: ["recursion", "backtracking", "combination-sum"],
    ques: "Combination Sum II",
    quesLink: "https://leetcode.com/problems/combination-sum-ii/",
    pattern: "Backtracking, Each Element Once, Skip Duplicates",
    solution:
      "Sort nums; DFS with index; at each level skip same value you already tried, and move index+1 after using an element.",
  },
  {
    id: 11,
    day: 2,
    topicGroup: "Subsets & Combinations",
    difficulty: "Medium",
    tags: ["recursion", "backtracking", "k-combinations"],
    ques: "Combinations (n choose k)",
    quesLink: "https://leetcode.com/problems/combinations/",
    pattern: "Backtracking, Choose/Skip",
    solution:
      "DFS over numbers 1..n; at each step choose current number or skip; stop when built combination size == k.",
  },
  {
    id: 12,
    day: 2,
    topicGroup: "Subsets & Combinations",
    difficulty: "Medium",
    tags: ["recursion", "backtracking", "palindrome"],
    ques: "Palindrome Partitioning",
    quesLink: "https://leetcode.com/problems/palindrome-partitioning/",
    pattern: "Backtracking with Palindrome Check",
    solution:
      "At each index, try all end positions where s[i..j] is palindrome and recurse from j+1; add path when at end of string.",
  },

  // ✅ DAY 3 — Permutations & String Recursion
  {
    id: 13,
    day: 3,
    topicGroup: "Permutations & String Recursion",
    difficulty: "Medium",
    tags: ["recursion", "backtracking", "permutations"],
    ques: "Permutations",
    quesLink: "https://leetcode.com/problems/permutations/",
    pattern: "Backtracking, Swap or Visited Array",
    solution:
      "Either swap current index with i and recurse on next index, or use a visited boolean array and build permutation list.",
  },
  {
    id: 14,
    day: 3,
    topicGroup: "Permutations & String Recursion",
    difficulty: "Medium",
    tags: ["recursion", "backtracking", "permutations", "duplicates"],
    ques: "Permutations II (Unique Permutations)",
    quesLink: "https://leetcode.com/problems/permutations-ii/",
    pattern: "Backtracking, Skip Duplicate Choices",
    solution:
      "Sort array; in DFS, when looping, skip nums[i] if i>0 and nums[i]==nums[i-1] and nums[i-1] not used in this position.",
  },
  {
    id: 15,
    day: 3,
    topicGroup: "Permutations & String Recursion",
    difficulty: "Medium",
    tags: ["recursion", "backtracking", "parentheses"],
    ques: "Generate Parentheses",
    quesLink: "https://leetcode.com/problems/generate-parentheses/",
    pattern: "Backtracking with Constraints",
    solution:
      "Track counts of open and close used; can add '(' if open<n, can add ')' if close<open; when length==2n, add result.",
  },
  {
    id: 16,
    day: 3,
    topicGroup: "Permutations & String Recursion",
    difficulty: "Medium",
    tags: ["recursion", "backtracking", "phone"],
    ques: "Letter Combinations of a Phone Number",
    quesLink:
      "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
    pattern: "Backtracking on Digits",
    solution:
      "Map each digit to letters and DFS by appending each possible letter for current digit until you reach end of digits.",
  },
  {
    id: 17,
    day: 3,
    topicGroup: "Permutations & String Recursion",
    difficulty: "Medium",
    tags: ["recursion", "backtracking", "subsequence"],
    ques: "Print All Subsequences of a String / Array",
    quesLink:
      "https://www.geeksforgeeks.org/print-subsequences-string/",
    pattern: "Include / Exclude Recurrence",
    solution:
      "At each index, branch into including current character and excluding it; base case when index==n, collect built subsequence.",
  },
  {
    id: 18,
    day: 3,
    topicGroup: "Permutations & String Recursion",
    difficulty: "Hard",
    tags: ["recursion", "backtracking", "permutation", "constraints"],
    ques: "Special Permutations (Count permutations with constraint)",
    quesLink:
      "https://leetcode.com/problems/special-permutations/",
    pattern: "Backtracking + Bitmask DP",
    solution:
      "Use recursion with bitmask state of used indices; at each step, try valid next numbers satisfying condition; memoize (index, mask).",
  },

  // ✅ DAY 4 — Classic Backtracking (Grid & Paths)
  {
    id: 19,
    day: 4,
    topicGroup: "Grid & Path Backtracking",
    difficulty: "Medium",
    tags: ["recursion", "backtracking", "grid", "search"],
    ques: "Word Search",
    quesLink: "https://leetcode.com/problems/word-search/",
    pattern: "Backtracking on Grid, DFS",
    solution:
      "DFS from each cell matching first char; recursively search neighbors while marking visited; backtrack after each path.",
  },
  {
    id: 20,
    day: 4,
    topicGroup: "Grid & Path Backtracking",
    difficulty: "Medium",
    tags: ["recursion", "backtracking", "path", "maze"],
    ques: "Rat in a Maze (All Paths)",
    quesLink:
      "https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/",
    pattern: "Backtracking, 4-Direction DFS",
    solution:
      "From start cell, explore all safe neighbors (within bounds, not blocked, not visited), mark visited before recursion and unmark after.",
  },
  {
    id: 21,
    day: 4,
    topicGroup: "Grid & Path Backtracking",
    difficulty: "Medium",
    tags: ["recursion", "backtracking", "sudoku"],
    ques: "Sudoku Solver",
    quesLink: "https://leetcode.com/problems/sudoku-solver/",
    pattern: "Backtracking with Constraint Checking",
    solution:
      "Find empty cell, try digits 1–9 that obey row/column/box constraints, recurse; if dead-end, reset cell and try next digit.",
  },
  {
    id: 22,
    day: 4,
    topicGroup: "Grid & Path Backtracking",
    difficulty: "Hard",
    tags: ["recursion", "backtracking", "n-queens"],
    ques: "N-Queens",
    quesLink: "https://leetcode.com/problems/n-queens/",
    pattern: "Backtracking by Row with Attack Sets",
    solution:
      "Place queens row by row, tracking used columns and diagonals via sets; if column/diagonal is free, place and recurse.",
  },
  {
    id: 23,
    day: 4,
    topicGroup: "Grid & Path Backtracking",
    difficulty: "Hard",
    tags: ["recursion", "backtracking", "n-queens"],
    ques: "N-Queens II (Count Solutions)",
    quesLink: "https://leetcode.com/problems/n-queens-ii/",
    pattern: "Same as N-Queens, Count Only",
    solution:
      "Same backtracking as N-Queens but instead of storing boards, increment a global/outer counter when a valid arrangement is found.",
  },
  {
    id: 24,
    day: 4,
    topicGroup: "Grid & Path Backtracking",
    difficulty: "Medium",
    tags: ["recursion", "backtracking", "combination-sum"],
    ques: "Word Search II (Using Trie + Backtracking)",
    quesLink: "https://leetcode.com/problems/word-search-ii/",
    pattern: "Trie + DFS Backtracking",
    solution:
      "Insert words into trie; DFS from each cell following trie paths, marking visited; collect words at trie terminal nodes, prune when path invalid.",
  },

  // ✅ DAY 5 — Recursion on Trees (MAANG Core)
  {
    id: 25,
    day: 5,
    topicGroup: "Tree Recursion",
    difficulty: "Easy",
    tags: ["recursion", "tree", "depth"],
    ques: "Maximum Depth of Binary Tree",
    quesLink: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    pattern: "DFS, Post-order",
    solution:
      "Base: null node → 0. Recursive: return 1 + max(depth(left), depth(right)).",
  },
  {
    id: 26,
    day: 5,
    topicGroup: "Tree Recursion",
    difficulty: "Easy",
    tags: ["recursion", "tree", "symmetry"],
    ques: "Symmetric Tree",
    quesLink: "https://leetcode.com/problems/symmetric-tree/",
    pattern: "Mirror Recursion",
    solution:
      "Check if left and right subtrees are mirrors: root values equal and outer/inner children symmetric (left.left vs right.right, left.right vs right.left).",
  },
  {
    id: 27,
    day: 5,
    topicGroup: "Tree Recursion",
    difficulty: "Medium",
    tags: ["recursion", "tree", "path-sum"],
    ques: "Path Sum",
    quesLink: "https://leetcode.com/problems/path-sum/",
    pattern: "DFS, Decrement Target",
    solution:
      "At each node subtract value from target; if leaf and target becomes 0, path exists; recurse left and right.",
  },
  {
    id: 28,
    day: 5,
    topicGroup: "Tree Recursion",
    difficulty: "Medium",
    tags: ["recursion", "tree", "all-paths"],
    ques: "Path Sum II",
    quesLink: "https://leetcode.com/problems/path-sum-ii/",
    pattern: "Backtracking on Tree Paths",
    solution:
      "Similar to Path Sum but maintain current path list; when reaching leaf with target 0, push copy of path; backtrack on return.",
  },
  {
    id: 29,
    day: 5,
    topicGroup: "Tree Recursion",
    difficulty: "Medium",
    tags: ["recursion", "tree", "diameter"],
    ques: "Diameter of Binary Tree",
    quesLink: "https://leetcode.com/problems/diameter-of-binary-tree/",
    pattern: "Depth Recursion + Global Max",
    solution:
      "DFS returns depth; at each node, candidate diameter is leftDepth + rightDepth; track maximum globally.",
  },
  {
    id: 30,
    day: 5,
    topicGroup: "Tree Recursion",
    difficulty: "Hard",
    tags: ["recursion", "tree", "dp"],
    ques: "Binary Tree Maximum Path Sum",
    quesLink: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    pattern: "DFS, Return Max Gain, Track Global",
    solution:
      "For each node, compute max gain from left/right (ignore negative), update global max with left+right+node.val, and return node.val + max(leftGain, rightGain).",
  },

  // ✅ DAY 6 — Advanced Recursion & Recurrence Tricks
  {
    id: 31,
    day: 6,
    topicGroup: "Advanced Recursion & Tricks",
    difficulty: "Medium",
    tags: ["recursion", "math", "grammar"],
    ques: "K-th Symbol in Grammar",
    quesLink: "https://leetcode.com/problems/k-th-symbol-in-grammar/",
    pattern: "Recursive Relation on Row & Position",
    solution:
      "Observe recurrence: each row derived from previous by 0→01, 1→10; use recursion on (n-1, (k+1)/2) and flip based on parent & whether k is odd/even.",
  },
  {
    id: 32,
    day: 6,
    topicGroup: "Advanced Recursion & Tricks",
    difficulty: "Medium",
    tags: ["recursion", "math", "bit"],
    ques: "Gray Code",
    quesLink: "https://leetcode.com/problems/gray-code/",
    pattern: "Recursive / Reflect & Prefix",
    solution:
      "Generate gray code for n-1 bits, then reflect list and prefix '1' to reflected values while prefix '0' to original.",
  },
  {
    id: 33,
    day: 6,
    topicGroup: "Advanced Recursion & Tricks",
    difficulty: "Medium",
    tags: ["recursion", "divide-and-conquer", "sort"],
    ques: "Merge Sort (Recursive)",
    quesLink:
      "https://www.geeksforgeeks.org/merge-sort/",
    pattern: "Divide & Conquer, Merge Two Sorted",
    solution:
      "Recursively split array into halves until size 1, then merge sorted halves using two-pointer merge procedure.",
  },
  {
    id: 34,
    day: 6,
    topicGroup: "Advanced Recursion & Tricks",
    difficulty: "Medium",
    tags: ["recursion", "divide-and-conquer", "sort"],
    ques: "Quick Sort (Recursive)",
    quesLink: "https://www.geeksforgeeks.org/quick-sort/",
    pattern: "Partition + Recurse Left/Right",
    solution:
      "Partition array around pivot into elements < and > pivot; recursively sort left and right partitions.",
  },
  {
    id: 35,
    day: 6,
    topicGroup: "Advanced Recursion & Tricks",
    difficulty: "Medium",
    tags: ["recursion", "math", "hanoi"],
    ques: "Tower of Hanoi",
    quesLink: "https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/",
    pattern: "Classic 3-Step Recurrence",
    solution:
      "Move n-1 disks from source to aux, move nth disk from source to dest, then move n-1 disks from aux to dest; base case n==1.",
  },
  {
    id: 36,
    day: 6,
    topicGroup: "Advanced Recursion & Tricks",
    difficulty: "Hard",
    tags: ["recursion", "memoization", "dp"],
    ques: "Unique Paths III",
    quesLink: "https://leetcode.com/problems/unique-paths-iii/",
    pattern: "Backtracking with Visit Count",
    solution:
      "Count empty cells, DFS from start visiting each cell once; when you reach end cell, path is valid only if all empty cells have been visited exactly once.",
  },
];
