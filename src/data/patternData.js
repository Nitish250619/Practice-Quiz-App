export const patternData = [
  // 1️⃣ TWO POINTERS
  {
    id: 1,
    name: "Two Pointers",
    slug: "two-pointers",
    headline: "Use two fingers to scan from ends or same side instead of checking everything.",
    level: "Easy → Medium",
    category: ["Array", "String"],
    whyItMatters:
      "Two pointers appears in almost every MAANG round for arrays/strings. It turns O(n²) brute force into O(n).",
    ideaInSimpleWords:
      "Imagine you have a line of numbers. Instead of using two loops to check all pairs, you keep two fingers (pointers) and move them smartly.",
    whenToUse: [
      "Array or string is sorted OR can be sorted.",
      "You are searching for pairs/triples with some condition (sum, difference, etc.).",
      "You are moving elements around (remove duplicates, move zeros, partition).",
      "You are checking from both ends (palindrome, container with most water)."
    ],
    commonShapes: [
      "Left & right pointers starting at array ends.",
      "Slow & fast pointers starting from the beginning.",
      "One pointer for 'write position', one for 'read position'."
    ],
    flowchartSteps: [
      "START",
      "👉 Decide how pointers should start (both at start? or start+end?).",
      "👉 Check the current pair (or current window).",
      "👉 If condition is too small → move left pointer.",
      "👉 If condition is too large → move right pointer.",
      "👉 If condition is perfect → record answer, move pointers to continue.",
      "STOP when left crosses right (or fast pointer reaches end)."
    ],
    miniExample: {
      title: "Two Sum II (sorted array)",
      input: "nums = [1, 3, 4, 5, 7, 10], target = 9",
      thinking:
        "Start left = 0 (1), right = 5 (10). 1+10=11 > 9 → move right--. 1+7=8 < 9 → move left++. 3+7=10>9 → right--. 3+5=8<9 → left++. 4+5=9✅",
      output: "Indices of numbers 4 and 5."
    },
    pseudoCode: `function twoPointers(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return [-1, -1];
}`,
    commonMistakes: [
      "Forgetting to sort when the logic assumes sorted order.",
      "Infinite loops when left/right are not updated properly.",
      "Using <= instead of < in the while and double-counting pairs."
    ],
    tipsToRemember: [
      "Think: 'Can I solve this with two smart walkers instead of double for-loops?'",
      "Every time you see 'pair from sorted array', try two pointers first."
    ],
    relatedPatterns: ["Sliding Window", "Sorting + Two Pointers"],
    watchVideos: [
      {
        title: "Two Pointers Explained (NeetCode style)",
        url: "https://www.youtube.com/watch?v=HxWHQ0chT7U"
      }
    ]
  },

  // 2️⃣ SLIDING WINDOW
  {
    id: 2,
    name: "Sliding Window",
    slug: "sliding-window",
    headline: "Move a window over array/string to track subarrays/substrings efficiently.",
    level: "Medium",
    category: ["Array", "String"],
    whyItMatters:
      "Used for longest/shortest substring or subarray questions. Avoids recalculating from scratch every time.",
    ideaInSimpleWords:
      "Think of a flashlight sliding over a line of numbers/letters. The light covers a window. You move its left/right edges instead of restarting.",
    whenToUse: [
      "Question talks about subarray/substring (continuous part).",
      "You need max/min length, or max/min sum, or at most K distinct characters.",
      "You can maintain some running information (sum, counts, freq) as you move."
    ],
    types: [
      "Fixed-size window (e.g., every window of size K).",
      "Variable-size window (expand & shrink based on condition)."
    ],
    flowchartSteps: [
      "START",
      "👉 Set left = 0.",
      "👉 For each right from 0..n-1:",
      "    • Add nums[right] or s[right] to your state (sum/map).",
      "    • WHILE condition is broken: shrink from left (remove nums[left]) and left++.",
      "    • Update answer using current window [left, right].",
      "STOP when right reaches end."
    ],
    miniExample: {
      title: "Longest substring without repeating characters",
      input: 's = "abcabcbb"',
      thinking:
        "Use a map for counts/index. Expand right, and when char repeats, move left until it's valid again.",
      output: 'Answer length = 3 for "abc".'
    },
    pseudoCode: `function longestUniqueSubstring(s) {
  let left = 0, best = 0;
  const seen = new Map();
  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (seen.has(ch) && seen.get(ch) >= left) {
      left = seen.get(ch) + 1; // shrink
    }
    seen.set(ch, right);
    best = Math.max(best, right - left + 1);
  }
  return best;
}`,
    commonMistakes: [
      "Not shrinking the window properly when condition breaks.",
      "Forgetting that left should never move backward.",
      "Recomputing things from scratch instead of updating incrementally."
    ],
    tipsToRemember: [
      "Continuous segment? Think sliding window.",
      "Ask: 'What condition makes window valid/invalid?' then expand/shrink accordingly."
    ],
    relatedPatterns: ["Two Pointers", "Monotonic Deque"],
    watchVideos: [
      {
        title: "Sliding Window Technique",
        url: "https://www.youtube.com/watch?v=wiGpQwVHdE0"
      }
    ]
  },

  // 3️⃣ PREFIX SUM
  {
    id: 3,
    name: "Prefix Sum",
    slug: "prefix-sum",
    headline: "Precompute running totals so any range sum is O(1).",
    level: "Easy → Medium",
    category: ["Array"],
    whyItMatters:
      "Very common trick for subarray sums and counting problems. It also appears inside more advanced patterns like hashing.",
    ideaInSimpleWords:
      "Instead of adding numbers again and again for each query, you keep a 'scoreboard' of sums up to each index.",
    whenToUse: [
      "You need sum or count over many subarrays.",
      "Question mentions 'how many subarrays...' or 'sum from i to j many times'.",
      "You see formula like sum(i..j) = prefix[j] - prefix[i-1]."
    ],
    flowchartSteps: [
      "START",
      "👉 Build prefix array where prefix[i] = sum of nums[0..i].",
      "👉 For a query (l, r), answer = prefix[r] - prefix[l-1].",
      "👉 For 'count subarrays with sum K', use hashmap of prefix sums.",
      "STOP"
    ],
    miniExample: {
      title: "Subarray Sum Equals K (high level idea)",
      input: "nums = [1,2,3], k = 3",
      thinking:
        "prefix: [1,3,6]. We want prefix[j] - prefix[i] = k ⇒ prefix[i] = prefix[j] - k. So for each prefix, check how many times (prefix - k) occurred before.",
      output: "Subarrays: [1,2], [3]"
    },
    pseudoCode: `function countSubarraysWithSumK(nums, k) {
  const freq = new Map();
  freq.set(0, 1);
  let prefix = 0, count = 0;
  for (const num of nums) {
    prefix += num;
    if (freq.has(prefix - k)) {
      count += freq.get(prefix - k);
    }
    freq.set(prefix, (freq.get(prefix) || 0) + 1);
  }
  return count;
}`,
    tipsToRemember: [
      "Think 'difference of prefix sums = subarray sum'.",
      "Hashmap + prefix sum is a deadly combo for many problems."
    ],
    relatedPatterns: ["Hashing", "Sliding Window"]
  },

  // 4️⃣ BINARY SEARCH
  {
    id: 4,
    name: "Binary Search",
    slug: "binary-search",
    headline: "Divide the search space in half again and again.",
    level: "Easy → Hard",
    category: ["Array", "Math"],
    whyItMatters:
      "Used in almost all tech interviews, both directly on sorted arrays and indirectly on answers.",
    ideaInSimpleWords:
      "If your answer lies in a sorted or monotonic zone, you can always throw away half the options with one comparison.",
    whenToUse: [
      "Array is sorted or can be considered sorted.",
      "Or you can check 'is answer ≥ X?' with some function (monotonic).",
      "You want to minimise/maximise something with constraints."
    ],
    flowchartSteps: [
      "START",
      "👉 Set low and high (range of indexes or possible answers).",
      "👉 While low ≤ high:",
      "    • mid = (low + high) // 2",
      "    • If mid is good enough, move high = mid - 1 (for first good).",
      "    • Else move low = mid + 1.",
      "👉 Answer is low or high depending on problem.",
      "STOP"
    ],
    miniExample: {
      title: "Search Insert Position",
      input: "nums = [1,3,5,6], target = 5",
      thinking:
        "Classic binary search. If not found, 'low' will end at position where target should go.",
      output: "Index = 2"
    },
    pseudoCode: `function binarySearch(nums, target) {
  let low = 0, high = nums.length - 1;
  while (low <= high) {
    const mid = (low + high) >> 1;
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return low; // insert position
}`,
    commonMistakes: [
      "Infinite loops because of wrong mid or low/high update.",
      "Overflow (in some languages) when doing (low+high)/2.",
      "Not thinking about what to return: low or high or mid."
    ],
    tipsToRemember: [
      "Always ask: what does low and high mean exactly?",
      "Binary search on answer feels like 'guess answer and check if possible'."
    ],
    relatedPatterns: ["Two Pointers", "Prefix Sum"]
  },

  // 5️⃣ SORTING + TWO POINTERS
  {
    id: 5,
    name: "Sorting + Two Pointers",
    slug: "sort-two-pointers",
    headline: "Sort first, then use two pointers to solve pair/triple problems.",
    level: "Medium",
    category: ["Array"],
    whyItMatters:
      "Classic for 2Sum/3Sum/4Sum, meeting in middle, and reducing complexity.",
    ideaInSimpleWords:
      "You create order by sorting. Once things are in order, two pointers can move intelligently.",
    whenToUse: [
      "Need unique pairs/triples (sum, product, difference).",
      "Order doesn't matter in final answer (you can sort)."
    ],
    miniExample: {
      title: "3Sum high level",
      input: "nums = [-1,0,1,2,-1,-4]",
      thinking:
        "Sort → [-4,-1,-1,0,1,2]. Fix each i, then do two pointers on remaining part for target = -nums[i].",
      output: "[[-1,-1,2],[-1,0,1]]"
    },
    pseudoCode: `// outline, not full code
sort(nums)
for i from 0..n-1:
  if i>0 and nums[i]==nums[i-1]: continue
  left = i+1, right = n-1
  while left < right:
    sum = nums[i] + nums[left] + nums[right]
    // move pointers based on sum`,
    relatedPatterns: ["Two Pointers", "Greedy"]
  },

  // 6️⃣ CYCLIC SORT
  {
    id: 6,
    name: "Cyclic Sort / Index Placement",
    slug: "cyclic-sort",
    headline: "Place each value in its correct index using swaps.",
    level: "Medium",
    category: ["Array"],
    ideaInSimpleWords:
      "If numbers are from 1..N, ideally number x should be at index x-1. Keep swapping until each value is in its home.",
    whenToUse: [
      "Array elements are from 1..N or near that.",
      "Asked: 'first missing positive', 'find duplicates in-place'."
    ],
    flowchartSteps: [
      "START",
      "👉 i = 0",
      "👉 while i < n:",
      "    • correctIndex = nums[i] - 1",
      "    • if nums[i] in [1..n] AND nums[i] != nums[correctIndex]: swap",
      "    • else i++",
      "👉 After loop, first index i where nums[i] != i+1 is your answer.",
      "STOP"
    ],
    relatedPatterns: ["Index Marking", "Prefix Sum"]
  },

  // 7️⃣ GREEDY
  {
    id: 7,
    name: "Greedy",
    slug: "greedy",
    headline: "Always take the best-looking move right now.",
    level: "Medium",
    category: ["Array", "Intervals", "Graph"],
    ideaInSimpleWords:
      "Like choosing always the largest piece of cake now, hoping it leads to best result at the end.",
    whenToUse: [
      "You can sort by some key (end time, start time, profit, etc.).",
      "Local best choices seem to lead to global best (must prove or know problem pattern)."
    ],
    commonExamples: ["Activity selection", "Jump Game", "Gas Station"],
    commonMistakes: ["Using greedy without proof", "Not sorting correctly first"],
    relatedPatterns: ["Intervals & Merge", "Heap"]
  },

  // 8️⃣ INTERVALS & MERGE
  {
    id: 8,
    name: "Intervals & Merge",
    slug: "intervals",
    headline: "Sort intervals and merge or count overlaps.",
    level: "Medium",
    category: ["Array", "Math"],
    ideaInSimpleWords:
      "You have time slots or ranges. Sort them by start, then see where they overlap or fit.",
    whenToUse: [
      "Meeting rooms, booking, ranges on number line.",
      "Merging overlapping events."
    ],
    flowchartSteps: [
      "START",
      "👉 Sort intervals by start.",
      "👉 Keep 'current' interval.",
      "👉 For each next interval:",
      "    • If next.start <= current.end → merge by extending end.",
      "    • Else push current to answer and set current = next.",
      "👉 Push last current.",
      "STOP"
    ],
    relatedPatterns: ["Greedy", "Sweep Line"]
  },

  // 9️⃣ MONOTONIC STACK
  {
    id: 9,
    name: "Monotonic Stack",
    slug: "monotonic-stack",
    headline: "Stack where values are sorted (increasing/decreasing) to answer next greater/smaller queries.",
    level: "Medium → Hard",
    category: ["Array", "Stack"],
    ideaInSimpleWords:
      "Imagine plates stacked so that each plate is smaller than the one below. When you see a bigger plate, you pop until the rule is OK.",
    whenToUse: [
      "Next greater element / next smaller element.",
      "Largest rectangle in histogram.",
      "Sum of subarray mins/max."
    ],
    flowchartSteps: [
      "START",
      "👉 Have an empty stack (store index or value).",
      "👉 For each element:",
      "    • While stack not empty AND current breaks monotonic rule → pop & process.",
      "    • Push current index/value.",
      "👉 After loop, process remaining stack if needed.",
      "STOP"
    ],
    relatedPatterns: ["Monotonic Deque", "Contribution Technique"]
  },

  // 🔟 MONOTONIC DEQUE
  {
    id: 10,
    name: "Monotonic Deque (Sliding Window)",
    slug: "monotonic-deque",
    headline: "Deque that keeps useful candidates at front for each window.",
    level: "Medium",
    category: ["Array", "Queue"],
    ideaInSimpleWords:
      "You keep a line of candidates where bad ones are kicked out from the back so the best one stays at the front.",
    whenToUse: [
      "Sliding window maximum/minimum.",
      "Any problem asking for max/min in every window."
    ],
    flowchartSteps: [
      "START",
      "👉 For each index i:",
      "    • Remove indices from front which are out of window.",
      "    • Remove from back while current value is better (e.g., larger for max).",
      "    • Add current index to back.",
      "    • Front of deque is answer for this window.",
      "STOP"
    ],
    relatedPatterns: ["Sliding Window", "Monotonic Stack"]
  },

  // 1️⃣1️⃣ DYNAMIC PROGRAMMING
  {
    id: 11,
    name: "Dynamic Programming",
    slug: "dp",
    headline: "Remember answers to smaller problems so you don't solve them again.",
    level: "Medium → Hard",
    category: ["Array", "String", "Tree"],
    ideaInSimpleWords:
      "Like solving a big puzzle by first solving small pieces and then reusing those small pieces again and again.",
    whenToUse: [
      "There is 'choice' + 'overlapping subproblems'.",
      "You see recursive definition like f(n) depends on f(n-1), f(n-2)..."
    ],
    basicFlow: [
      "1. Define state (what does dp[i] mean?).",
      "2. Find relation (how to get dp[i] from previous states?).",
      "3. Set base cases.",
      "4. Decide iteration order (bottom-up) or recursion + memo (top-down).",
      "5. Return final dp[end]."
    ],
    tinyExample: {
      title: "Climbing Stairs",
      explanation: "dp[i] = ways to reach step i, dp[i] = dp[i-1]+dp[i-2]."
    },
    relatedPatterns: ["Recursion", "Greedy (sometimes alternative)"]
  },

  // 1️⃣2️⃣ STRING HASHING / ANAGRAMS
  {
    id: 12,
    name: "String Hashing / Anagrams",
    slug: "string-hashing",
    headline: "Represent strings by small signatures (count or hash) to compare fast.",
    level: "Medium",
    category: ["String"],
    ideaInSimpleWords:
      "Instead of comparing whole words all the time, you compare a short summary of the word (like letter count).",
    whenToUse: [
      "Group anagrams.",
      "Check if two strings are made of same letters.",
      "Find anagram substrings."
    ],
    commonTechniques: [
      "Frequency array of size 26.",
      "Sorted characters as key.",
      "Rolling hash (Rabin-Karp) for substring search."
    ],
    relatedPatterns: ["Sliding Window", "HashMap"]
  },

  // 1️⃣3️⃣ PALINDROME EXPAND CENTER
  {
    id: 13,
    name: "Palindrome Expand Center",
    slug: "palindrome-center",
    headline: "Try each position as the middle and expand outwards.",
    level: "Medium",
    category: ["String"],
    ideaInSimpleWords:
      "You put your finger in the center and expand left and right as long as characters match.",
    whenToUse: [
      "Longest palindromic substring.",
      "Counting palindromic substrings."
    ],
    flowchartSteps: [
      "START",
      "👉 For each index i:",
      "    • Expand for odd-length (i, i).",
      "    • Expand for even-length (i, i+1).",
      "    • Track longest or count.",
      "STOP"
    ],
    relatedPatterns: ["Two Pointers", "DP on Strings"]
  },

  // 1️⃣4️⃣ GRAPH BFS / DFS
  {
    id: 14,
    name: "Graph BFS / DFS",
    slug: "graph-traversal",
    headline: "Explore all nodes using a queue (BFS) or recursion/stack (DFS).",
    level: "Medium → Hard",
    category: ["Graph", "Grid"],
    ideaInSimpleWords:
      "Think of rooms connected with doors. BFS explores level by level, DFS goes deep down one path then backtracks.",
    whenToUse: [
      "Grid problems (islands, shortest path).",
      "Word ladder / transformation steps.",
      "Connected components."
    ],
    relatedPatterns: ["Queue", "Recursion", "Topological Sort"]
  },

  // 1️⃣5️⃣ HEAP / PRIORITY QUEUE
  {
    id: 15,
    name: "Heap / Priority Queue",
    slug: "heap",
    headline: "Always pull out the largest/smallest item efficiently.",
    level: "Medium",
    category: ["Array", "Greedy"],
    ideaInSimpleWords:
      "Like a VIP queue where most important person is always at front, and when they leave, next VIP comes automatically.",
    whenToUse: [
      "Kth largest/smallest problems.",
      "Merging K sorted lists.",
      "Scheduling tasks with priorities."
    ],
    relatedPatterns: ["Greedy", "Sorting"]
  }
];
