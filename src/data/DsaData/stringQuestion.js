export const dsaStringQuestions = [
  // ✅ DAY 1 — Basics, Frequency & Anagrams
  {
    id: 1,
    day: 1,
    topicGroup: "Basics, Frequency & Anagrams",
    difficulty: "Easy",
    tags: ["string", "two-pointers", "palindrome", "cleanup"],
    ques: "Valid Palindrome",
    quesLink: "https://leetcode.com/problems/valid-palindrome/",
    pattern: "Two Pointers, Clean String",
    solution:
      "Normalize by keeping only alphanumeric chars and lowercasing. Use two pointers from both ends to compare characters.",
  },
  {
    id: 2,
    day: 1,
    topicGroup: "Basics, Frequency & Anagrams",
    difficulty: "Easy",
    tags: ["string", "anagram", "frequency", "hashmap"],
    ques: "Valid Anagram",
    quesLink: "https://leetcode.com/problems/valid-anagram/",
    pattern: "Frequency Count, Hashmap / Array",
    solution:
      "Count character frequencies of both strings using array/hashmap and compare counts for equality.",
  },
  {
    id: 3,
    day: 1,
    topicGroup: "Basics, Frequency & Anagrams",
    difficulty: "Easy",
    tags: ["string", "frequency", "index"],
    ques: "First Unique Character in a String",
    quesLink: "https://leetcode.com/problems/first-unique-character-in-a-string/",
    pattern: "Frequency Count, Two Pass",
    solution:
      "First pass: count frequency of each character. Second pass: return the index of the first char with count 1.",
  },
  {
    id: 4,
    day: 1,
    topicGroup: "Basics, Frequency & Anagrams",
    difficulty: "Easy",
    tags: ["string", "hashmap", "construction"],
    ques: "Ransom Note",
    quesLink: "https://leetcode.com/problems/ransom-note/",
    pattern: "Frequency Count",
    solution:
      "Count characters in magazine, then for each char in ransomNote ensure available count is sufficient.",
  },
  {
    id: 5,
    day: 1,
    topicGroup: "Basics, Frequency & Anagrams",
    difficulty: "Medium",
    tags: ["string", "anagram", "hashmap", "sorting"],
    ques: "Group Anagrams",
    quesLink: "https://leetcode.com/problems/group-anagrams/",
    pattern: "Hashing by Signature",
    solution:
      "Use sorted string or frequency tuple as key in hashmap and group words by their key.",
  },
  {
    id: 6,
    day: 1,
    topicGroup: "Basics, Frequency & Anagrams",
    difficulty: "Medium",
    tags: ["string", "rotation", "substring"],
    ques: "String Rotation (Check if s2 is rotation of s1)",
    quesLink:
      "https://www.geeksforgeeks.org/check-if-a-string-is-rotation-of-another-string/",
    pattern: "Concatenation Trick",
    solution:
      "Check if lengths differ. If same, see if s2 is a substring of s1 + s1.",
  },

  // ✅ DAY 2 — Palindromes & Two Pointers
  {
    id: 7,
    day: 2,
    topicGroup: "Palindromes & Two Pointers",
    difficulty: "Medium",
    tags: ["string", "palindrome", "two-pointers", "expand-center"],
    ques: "Longest Palindromic Substring",
    quesLink: "https://leetcode.com/problems/longest-palindromic-substring/",
    pattern: "Expand Around Center",
    solution:
      "For each index (and gap between indices), expand left and right while chars match. Track longest substring.",
  },
  {
    id: 8,
    day: 2,
    topicGroup: "Palindromes & Two Pointers",
    difficulty: "Medium",
    tags: ["string", "palindrome", "dp", "backtracking"],
    ques: "Palindrome Partitioning",
    quesLink: "https://leetcode.com/problems/palindrome-partitioning/",
    pattern: "Backtracking + Palindrome Check",
    solution:
      "Use DFS to try all partitions; at each step only cut if substring is palindrome; collect all valid partitions.",
  },
  {
    id: 9,
    day: 2,
    topicGroup: "Palindromes & Two Pointers",
    difficulty: "Medium",
    tags: ["string", "palindrome", "count"],
    ques: "Palindromic Substrings",
    quesLink: "https://leetcode.com/problems/palindromic-substrings/",
    pattern: "Expand Around Center, Counting",
    solution:
      "For every center (index and gap), expand outward while palindrome holds and increment count.",
  },
  {
    id: 10,
    day: 2,
    topicGroup: "Palindromes & Two Pointers",
    difficulty: "Medium",
    tags: ["string", "dp", "subsequence", "palindrome"],
    ques: "Longest Palindromic Subsequence",
    quesLink:
      "https://leetcode.com/problems/longest-palindromic-subsequence/",
    pattern: "Dynamic Programming on Subsequence",
    solution:
      "Typical LCS-style DP on string and its reverse or direct DP[i][j] representing longest palindrome in s[i..j].",
  },
  {
    id: 11,
    day: 2,
    topicGroup: "Palindromes & Two Pointers",
    difficulty: "Medium",
    tags: ["string", "two-pointers", "words"],
    ques: "Reverse Words in a String",
    quesLink: "https://leetcode.com/problems/reverse-words-in-a-string/",
    pattern: "Trim + Reverse Words",
    solution:
      "Trim spaces, split by spaces, reverse the word list and join with a single space or do in-place reverse of whole string then each word.",
  },

  // ✅ DAY 3 — Sliding Window on Strings
  {
    id: 12,
    day: 3,
    topicGroup: "Sliding Window on Strings",
    difficulty: "Medium",
    tags: ["string", "sliding-window", "hashmap", "unique"],
    ques: "Longest Substring Without Repeating Characters",
    quesLink:
      "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    pattern: "Sliding Window, HashSet/Map",
    solution:
      "Use sliding window with hashmap to store last index of each char; move left pointer when duplicate seen.",
  },
  {
    id: 13,
    day: 3,
    topicGroup: "Sliding Window on Strings",
    difficulty: "Hard",
    tags: ["string", "sliding-window", "frequency", "two-pointers"],
    ques: "Minimum Window Substring",
    quesLink: "https://leetcode.com/problems/minimum-window-substring/",
    pattern: "Sliding Window, Frequency Count",
    solution:
      "Maintain counts of chars in target. Expand right to satisfy all counts, then shrink left while still valid to minimize window.",
  },
  {
    id: 14,
    day: 3,
    topicGroup: "Sliding Window on Strings",
    difficulty: "Medium",
    tags: ["string", "sliding-window", "permutation"],
    ques: "Permutation in String",
    quesLink: "https://leetcode.com/problems/permutation-in-string/",
    pattern: "Sliding Window, Fixed Window Size",
    solution:
      "Use frequency arrays for s1 and sliding window of length s1 over s2; if frequency arrays match at any point, return true.",
  },
  {
    id: 15,
    day: 3,
    topicGroup: "Sliding Window on Strings",
    difficulty: "Medium",
    tags: ["string", "sliding-window", "frequency"],
    ques: "Find All Anagrams in a String",
    quesLink: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
    pattern: "Sliding Window, Frequency Matching",
    solution:
      "Maintain frequency counts for pattern and current window of same size over s; when counts match, record start index.",
  },
  {
    id: 16,
    day: 3,
    topicGroup: "Sliding Window on Strings",
    difficulty: "Medium",
    tags: ["string", "sliding-window", "frequency", "replacement"],
    ques: "Longest Repeating Character Replacement",
    quesLink:
      "https://leetcode.com/problems/longest-repeating-character-replacement/",
    pattern: "Sliding Window, Max Frequency",
    solution:
      "Window is valid if (windowLen - maxFreq) ≤ k. Expand right, update maxFreq, and shrink left when invalid.",
  },

  // ✅ DAY 4 — Stack, Parentheses & Decoding
  {
    id: 17,
    day: 4,
    topicGroup: "Stack, Parentheses & Decoding",
    difficulty: "Easy",
    tags: ["string", "stack", "parentheses"],
    ques: "Valid Parentheses",
    quesLink: "https://leetcode.com/problems/valid-parentheses/",
    pattern: "Stack",
    solution:
      "Use stack to push opening brackets and pop when matching closing is seen. If mismatch or leftover stack, invalid.",
  },
  {
    id: 18,
    day: 4,
    topicGroup: "Stack, Parentheses & Decoding",
    difficulty: "Medium",
    tags: ["string", "stack", "parentheses", "minimum-add"],
    ques: "Minimum Add to Make Parentheses Valid",
    quesLink:
      "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/",
    pattern: "Stack / Balance Counter",
    solution:
      "Track balance of open brackets; increment answer when a closing cannot be matched or when open remain at end.",
  },
  {
    id: 19,
    day: 4,
    topicGroup: "Stack, Parentheses & Decoding",
    difficulty: "Hard",
    tags: ["string", "stack", "parentheses", "dp"],
    ques: "Longest Valid Parentheses",
    quesLink: "https://leetcode.com/problems/longest-valid-parentheses/",
    pattern: "Stack / DP",
    solution:
      "Use stack to store indices; when valid pair found, compute current valid length using last unmatched index.",
  },
  {
    id: 20,
    day: 4,
    topicGroup: "Stack, Parentheses & Decoding",
    difficulty: "Medium",
    tags: ["string", "stack", "path", "simplify"],
    ques: "Simplify Path",
    quesLink: "https://leetcode.com/problems/simplify-path/",
    pattern: "Stack, Path Normalization",
    solution:
      "Split path by '/', push folder names to stack, pop on '..', ignore '.' and empty parts, then rebuild from stack.",
  },
  {
    id: 21,
    day: 4,
    topicGroup: "Stack, Parentheses & Decoding",
    difficulty: "Medium",
    tags: ["string", "stack", "decoding"],
    ques: "Decode String",
    quesLink: "https://leetcode.com/problems/decode-string/",
    pattern: "Stack, Nested Encoding",
    solution:
      "Use two stacks for counts and strings; on '[', push current string and count; on ']', pop and repeat substring.",
  },

  // ✅ DAY 5 — Advanced String Patterns & Matching
  {
    id: 22,
    day: 5,
    topicGroup: "Advanced String Patterns & Matching",
    difficulty: "Medium",
    tags: ["string", "two-pointers", "in-place"],
    ques: "String Compression",
    quesLink: "https://leetcode.com/problems/string-compression/",
    pattern: "Two Pointers, In-place Rewrite",
    solution:
      "Use read and write pointers; count consecutive chars and write char plus count digits at write index.",
  },
  {
    id: 23,
    day: 5,
    topicGroup: "Advanced String Patterns & Matching",
    difficulty: "Medium",
    tags: ["string", "frequency", "sorting"],
    ques: "Sort Characters By Frequency",
    quesLink: "https://leetcode.com/problems/sort-characters-by-frequency/",
    pattern: "Frequency Count, Sorting / Bucket Sort",
    solution:
      "Count each char, then either sort by frequency or use buckets where index is frequency and build result from high to low.",
  },
  {
    id: 24,
    day: 5,
    topicGroup: "Advanced String Patterns & Matching",
    difficulty: "Medium",
    tags: ["string", "implementation", "search"],
    ques: "Implement strStr()",
    quesLink: "https://leetcode.com/problems/implement-strstr/",
    pattern: "Substring Search, Optional KMP",
    solution:
      "Naive: for each index, compare substring. Optimal: precompute prefix table (LPS) using KMP and run linear-time search.",
  },
  {
    id: 25,
    day: 5,
    topicGroup: "Advanced String Patterns & Matching",
    difficulty: "Hard",
    tags: ["string", "dp", "regex"],
    ques: "Regular Expression Matching",
    quesLink: "https://leetcode.com/problems/regular-expression-matching/",
    pattern: "2D DP on Patterns",
    solution:
      "DP[i][j] means s[0..i) matches p[0..j). Handle '.', '*' cases by either using zero of previous char or one-more match.",
  },
  {
    id: 26,
    day: 5,
    topicGroup: "Advanced String Patterns & Matching",
    difficulty: "Hard",
    tags: ["string", "dp", "wildcard"],
    ques: "Wildcard Matching",
    quesLink: "https://leetcode.com/problems/wildcard-matching/",
    pattern: "DP / Greedy with Backtracking",
    solution:
      "Use DP or two pointers with last '*' position to match '?' and '*' against the string.",
  },
  {
    id: 27,
    day: 5,
    topicGroup: "Advanced String Patterns & Matching",
    difficulty: "Medium",
    tags: ["string", "comparison", "parsing"],
    ques: "Compare Version Numbers",
    quesLink: "https://leetcode.com/problems/compare-version-numbers/",
    pattern: "String Parsing, Split by '.'",
    solution:
      "Split both by '.', compare each part as integer with leading zeros ignored; pad missing parts with zero.",
  },

  // ✅ DAY 6 — MAANG Favorite String Questions
  {
    id: 28,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Hard",
    tags: ["string", "hashing", "binary-search"],
    ques: "Longest Duplicate Substring",
    quesLink: "https://leetcode.com/problems/longest-duplicate-substring/",
    pattern: "Binary Search on Length + Rolling Hash",
    solution:
      "Binary search length; for each length, use rolling hash (Rabin-Karp style) with set to detect duplicate substring of that size.",
  },
  {
    id: 29,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Medium",
    tags: ["string", "parsing", "calculator"],
    ques: "Basic Calculator II",
    quesLink: "https://leetcode.com/problems/basic-calculator-ii/",
    pattern: "String Parsing, Stack / Last Operator",
    solution:
      "Scan once, keeping current number and last operator; use stack or running result to handle +, -, *, / with precedence.",
  },
  {
    id: 30,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Medium",
    tags: ["string", "math", "conversion"],
    ques: "Integer to Roman",
    quesLink: "https://leetcode.com/problems/integer-to-roman/",
    pattern: "Greedy, Symbol Table",
    solution:
      "Use ordered list of Roman values and symbols; greedily subtract largest value and append symbol until number is zero.",
  },
  {
    id: 31,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Easy",
    tags: ["string", "math", "conversion"],
    ques: "Roman to Integer",
    quesLink: "https://leetcode.com/problems/roman-to-integer/",
    pattern: "Left-to-Right Scan, Subtractive Pairs",
    solution:
      "Map each symbol to value; if a smaller value precedes a larger one, subtract it, otherwise add it.",
  },
  {
    id: 32,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Easy",
    tags: ["string", "binary", "addition"],
    ques: "Add Binary",
    quesLink: "https://leetcode.com/problems/add-binary/",
    pattern: "Two Pointers, Carry",
    solution:
      "Traverse from end of both strings, sum bits with carry, append result bit, then reverse the built string.",
  },
  {
    id: 33,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Medium",
    tags: ["string", "big-integer", "multiplication"],
    ques: "Multiply Strings",
    quesLink: "https://leetcode.com/problems/multiply-strings/",
    pattern: "Simulated Multiplication, Array of Digits",
    solution:
      "Use an array of size m+n for digit-wise multiplication from right to left, handle carry, then convert to string and trim leading zeros.",
  },
];
