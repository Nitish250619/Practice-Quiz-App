export const dsaArrayQuestions = [
  // ✅ DAY 1 — Basics + Two Pointers (10 Questions)
  {
    id: 1,
    day: 1,
    topicGroup: "Basics + Two Pointers",
    difficulty: "Easy",
    tags: ["array", "two-pointers", "reverse", "beginner"],
    ques: "Reverse Array",
    quesLink:
      "https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/",
    pattern: "Array, Two Pointers",
    solution:
      "Use two pointers at start and end, swap elements while moving inwards until the pointers cross.",
  },
  {
    id: 2,
    day: 1,
    topicGroup: "Basics + Two Pointers",
    difficulty: "Easy",
    tags: ["array", "min-max", "single-pass"],
    ques: "Find Max/Min in Array",
    quesLink: "https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/",
    pattern: "Array, Single Pass",
    solution:
      "Iterate once, track current min and max while scanning all elements.",
  },
  {
    id: 3,
    day: 1,
    topicGroup: "Basics + Two Pointers",
    difficulty: "Easy",
    tags: ["array", "two-pointers", "in-place", "move-zeroes"],
    ques: "Move Zeroes",
    quesLink: "https://leetcode.com/problems/move-zeroes/",
    pattern: "Two Pointers, In-place Stable Partition",
    solution:
      "Maintain a pointer for the next non-zero index, swap non-zero elements forward, fill remaining positions with 0.",
  },
  {
    id: 4,
    day: 1,
    topicGroup: "Basics + Two Pointers",
    difficulty: "Easy",
    tags: ["array", "two-pointers", "duplicates", "sorted"],
    ques: "Remove Duplicates from Sorted Array",
    quesLink:
      "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    pattern: "Two Pointers",
    solution:
      "Use slow pointer for the position of unique elements and fast pointer to scan; overwrite duplicates in-place.",
  },
  {
    id: 5,
    day: 1,
    topicGroup: "Basics + Two Pointers",
    difficulty: "Easy",
    tags: ["array", "hashmap", "two-sum", "maang-favorite"],
    ques: "Two Sum (Using Hashmap)",
    quesLink: "https://leetcode.com/problems/two-sum/",
    pattern: "Hashmap, Array",
    solution:
      "Use a hashmap from value to index; for each num check if target - num exists in map, else insert current.",
  },
  {
    id: 6,
    day: 1,
    topicGroup: "Basics + Two Pointers",
    difficulty: "Medium",
    tags: ["array", "two-pointers", "sorted", "two-sum"],
    ques: "Two Sum (Two Pointers on Sorted Array)",
    quesLink: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    pattern: "Two Pointers, Sorted Array",
    solution:
      "Use left and right pointers; if sum is too small increase left, if too large decrease right, stop when equals target.",
  },
  {
    id: 7,
    day: 1,
    topicGroup: "Basics + Two Pointers",
    difficulty: "Medium",
    tags: ["array", "two-pointers", "greedy", "area"],
    ques: "Container With Most Water",
    quesLink: "https://leetcode.com/problems/container-with-most-water/",
    pattern: "Two Pointers",
    solution:
      "Start with pointers at both ends, calculate area, move the pointer with smaller height to try to increase area.",
  },
  {
    id: 8,
    day: 1,
    topicGroup: "Basics + Two Pointers",
    difficulty: "Hard",
    tags: ["array", "two-pointers", "prefix-suffix", "trapping-rain-water"],
    ques: "Trapping Rain Water",
    quesLink: "https://leetcode.com/problems/trapping-rain-water/",
    pattern: "Two Pointers, Prefix/Suffix Max",
    solution:
      "Either precompute leftMax and rightMax for each index and sum trapped water, or use two-pointer technique tracking maxes.",
  },
  {
    id: 9,
    day: 1,
    topicGroup: "Basics + Two Pointers",
    difficulty: "Medium",
    tags: ["array", "dutch-flag", "three-pointers", "sorting"],
    ques: "Sort Colors (Dutch Flag Algo)",
    quesLink: "https://leetcode.com/problems/sort-colors/",
    pattern: "Dutch National Flag, Three Pointers",
    solution:
      "Maintain low, mid, high pointers; swap 0s to front and 2s to end while mid scans the array.",
  },
  {
    id: 10,
    day: 1,
    topicGroup: "Basics + Two Pointers",
    difficulty: "Easy",
    tags: ["array", "merge", "two-pointers", "sorted"],
    ques: "Merge Sorted Arrays",
    quesLink: "https://leetcode.com/problems/merge-sorted-array/",
    pattern: "Two Pointers, Merge",
    solution:
      "Start from the end of the main array and merge from back using pointers on both arrays to avoid overwriting.",
  },

  // ✅ DAY 2 — Sliding Window (8 Questions)
  {
    id: 11,
    day: 2,
    topicGroup: "Sliding Window",
    difficulty: "Easy",
    tags: ["array", "kadane", "dp", "max-subarray"],
    ques: "Maximum Subarray Sum (Kadane's Algorithm)",
    quesLink: "https://leetcode.com/problems/maximum-subarray/",
    pattern: "Kadane, DP on Array",
    solution:
      "Track current max subarray ending here and global max; curr = max(nums[i], curr + nums[i]).",
  },
  {
    id: 12,
    day: 2,
    topicGroup: "Sliding Window",
    difficulty: "Hard",
    tags: ["array", "sliding-window", "deque", "max"],
    ques: "Sliding Window Maximum",
    quesLink: "https://leetcode.com/problems/sliding-window-maximum/",
    pattern: "Sliding Window, Deque",
    solution:
      "Use a deque storing indices of useful elements in decreasing order; front of deque is max of current window.",
  },
  {
    id: 13,
    day: 2,
    topicGroup: "Sliding Window",
    difficulty: "Medium",
    tags: ["string", "sliding-window", "hashmap", "unique"],
    ques: "Longest Substring Without Repeating Characters",
    quesLink:
      "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    pattern: "Sliding Window, HashSet/Map, Strings",
    solution:
      "Use sliding window with hashmap/set to track chars; shrink from left when a duplicate appears.",
  },
  {
    id: 14,
    day: 2,
    topicGroup: "Sliding Window",
    difficulty: "Medium",
    tags: ["array", "sliding-window", "prefix-sum", "hashmap"],
    ques: "Longest Subarray with Sum K",
    quesLink:
      "https://www.geeksforgeeks.org/longest-sub-array-sum-k/",
    pattern: "Sliding Window (for positives) or Prefix Sum + Hashmap",
    solution:
      "For all positives, use two pointers window; otherwise use prefix sum and store first occurrence index in hashmap.",
  },
  {
    id: 15,
    day: 2,
    topicGroup: "Sliding Window",
    difficulty: "Hard",
    tags: ["string", "sliding-window", "hashmap", "two-pointers"],
    ques: "Minimum Window Substring",
    quesLink: "https://leetcode.com/problems/minimum-window-substring/",
    pattern: "Sliding Window, Hashmap",
    solution:
      "Expand right to cover all chars, then shrink left while still valid; track smallest valid window.",
  },
  {
    id: 16,
    day: 2,
    topicGroup: "Sliding Window",
    difficulty: "Medium",
    tags: ["array", "sliding-window", "two-distinct"],
    ques: "Fruit Into Baskets",
    quesLink: "https://leetcode.com/problems/fruit-into-baskets/",
    pattern: "Sliding Window, At most K distinct",
    solution:
      "Sliding window on array with at most 2 distinct fruit types using hashmap counts.",
  },
  {
    id: 17,
    day: 2,
    topicGroup: "Sliding Window",
    difficulty: "Medium",
    tags: ["string", "sliding-window", "frequency", "anagram"],
    ques: "Count Occurrences of Anagrams",
    quesLink:
      "https://www.geeksforgeeks.org/count-occurrences-of-anagrams/",
    pattern: "Sliding Window, Frequency Array/Map",
    solution:
      "Maintain frequency count for pattern and current window; slide window over string and compare counts.",
  },
  {
    id: 18,
    day: 2,
    topicGroup: "Sliding Window",
    difficulty: "Medium",
    tags: ["string", "sliding-window", "frequency", "replacement"],
    ques: "Longest Repeating Character Replacement",
    quesLink:
      "https://leetcode.com/problems/longest-repeating-character-replacement/",
    pattern: "Sliding Window, Frequency Tracking",
    solution:
      "Sliding window with count of most frequent char; window is valid while (windowLength - maxFreq) ≤ k, shrink otherwise.",
  },

  // ✅ DAY 3 — Prefix Sum + Hashing (8 Questions)
  {
    id: 19,
    day: 3,
    topicGroup: "Prefix Sum + Hashing",
    difficulty: "Medium",
    tags: ["array", "prefix-sum", "hashmap", "subarray-sum"],
    ques: "Subarray Sum Equals K",
    quesLink: "https://leetcode.com/problems/subarray-sum-equals-k/",
    pattern: "Prefix Sum, Hashmap",
    solution:
      "Keep running prefix sum; for each sum, check if (sum - k) exists in hashmap; store frequency of prefix sums.",
  },
  {
    id: 20,
    day: 3,
    topicGroup: "Prefix Sum + Hashing",
    difficulty: "Medium",
    tags: ["array", "prefix-sum", "modulo", "hashmap"],
    ques: "Continuous Subarray Sum",
    quesLink: "https://leetcode.com/problems/continuous-subarray-sum/",
    pattern: "Prefix Sum, Modulo, Hashmap",
    solution:
      "Track prefixSum % k and first index of each modulo; if same remainder appears again with length ≥ 2, such subarray exists.",
  },
  {
    id: 21,
    day: 3,
    topicGroup: "Prefix Sum + Hashing",
    difficulty: "Medium",
    tags: ["array", "prefix-sum", "hashmap", "zero-sum"],
    ques: "Largest Subarray with 0 Sum",
    quesLink:
      "https://www.geeksforgeeks.org/length-of-the-longest-subarray-with-zero-sum/",
    pattern: "Prefix Sum, Hashmap",
    solution:
      "Use prefix sum; if same sum appears again, subarray between indices has zero sum; track max length.",
  },
  {
    id: 22,
    day: 3,
    topicGroup: "Prefix Sum + Hashing",
    difficulty: "Medium",
    tags: ["array", "product", "prefix", "suffix"],
    ques: "Product of Array Except Self",
    quesLink: "https://leetcode.com/problems/product-of-array-except-self/",
    pattern: "Prefix Product, Suffix Product",
    solution:
      "Compute prefix products and suffix products and multiply them for each index without using division.",
  },
  {
    id: 23,
    day: 3,
    topicGroup: "Prefix Sum + Hashing",
    difficulty: "Medium",
    tags: ["array", "index-marking", "duplicates", "o1-space"],
    ques: "Find All Duplicates in an Array",
    quesLink:
      "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
    pattern: "Index Marking, O(1) Extra Space",
    solution:
      "Use value as index and mark visited by negating; if you encounter an already negative index, it's a duplicate.",
  },
  {
    id: 24,
    day: 3,
    topicGroup: "Prefix Sum + Hashing",
    difficulty: "Hard",
    tags: ["array", "cyclic-sort", "index-placement", "missing-positive"],
    ques: "First Missing Positive",
    quesLink: "https://leetcode.com/problems/first-missing-positive/",
    pattern: "Index Placement, Bucket / Cyclic Sort",
    solution:
      "Place each number in its correct index (num at num-1) if in range; then first index i where nums[i] != i+1 is answer.",
  },
  {
    id: 25,
    day: 3,
    topicGroup: "Prefix Sum + Hashing",
    difficulty: "Easy",
    tags: ["array", "voting", "majority-element"],
    ques: "Majority Element",
    quesLink: "https://leetcode.com/problems/majority-element/",
    pattern: "Boyer-Moore Voting",
    solution:
      "Use Boyer-Moore algorithm, keeping a candidate and count that increments/decrements; final candidate is majority.",
  },
  {
    id: 26,
    day: 3,
    topicGroup: "Prefix Sum + Hashing",
    difficulty: "Medium",
    tags: ["array", "voting", "majority-element", "n-by-3"],
    ques: "Majority Element II",
    quesLink: "https://leetcode.com/problems/majority-element-ii/",
    pattern: "Extended Boyer-Moore Voting",
    solution:
      "Maintain up to two candidates and counts; second pass to verify any element appearing more than n/3.",
  },

  // ✅ DAY 4 — Binary Search on Arrays (7 Questions)
  {
    id: 27,
    day: 4,
    topicGroup: "Binary Search on Arrays",
    difficulty: "Easy",
    tags: ["array", "binary-search", "classic"],
    ques: "Binary Search",
    quesLink: "https://leetcode.com/problems/binary-search/",
    pattern: "Binary Search, Classic",
    solution:
      "Use low, high pointers; compute mid and move one side depending on comparison with target until found or exhausted.",
  },
  {
    id: 28,
    day: 4,
    topicGroup: "Binary Search on Arrays",
    difficulty: "Medium",
    tags: ["array", "binary-search", "rotated"],
    ques: "Search in Rotated Sorted Array",
    quesLink:
      "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    pattern: "Binary Search on Rotated Array",
    solution:
      "At each step, detect which half is sorted and decide whether target lies in that half, then adjust low/high.",
  },
  {
    id: 29,
    day: 4,
    topicGroup: "Binary Search on Arrays",
    difficulty: "Medium",
    tags: ["array", "binary-search", "rotated", "min"],
    ques: "Find Minimum in Rotated Sorted Array",
    quesLink:
      "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    pattern: "Binary Search, Rotated Array",
    solution:
      "Binary search comparing mid with right; move towards unsorted half until you find minimum.",
  },
  {
    id: 30,
    day: 4,
    topicGroup: "Binary Search on Arrays",
    difficulty: "Medium",
    tags: ["array", "binary-search", "peak-element"],
    ques: "Find Peak Element",
    quesLink: "https://leetcode.com/problems/find-peak-element/",
    pattern: "Binary Search on Answer",
    solution:
      "Binary search using mid vs mid+1; move towards the larger neighbor, a peak will be found.",
  },
  {
    id: 31,
    day: 4,
    topicGroup: "Binary Search on Arrays",
    difficulty: "Easy",
    tags: ["array", "binary-search", "lower-bound"],
    ques: "Search Insert Position",
    quesLink: "https://leetcode.com/problems/search-insert-position/",
    pattern: "Binary Search, Lower Bound",
    solution:
      "Standard binary search; when target not found, low is the insert position after loop ends.",
  },
  {
    id: 32,
    day: 4,
    topicGroup: "Binary Search on Arrays",
    difficulty: "Medium",
    tags: ["array", "binary-search", "bounds"],
    ques: "Find First and Last Position of Element in Sorted Array",
    quesLink:
      "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    pattern: "Binary Search, Bound Search",
    solution:
      "Run binary search twice: once to find the leftmost index, once for the rightmost index of target.",
  },
  {
    id: 33,
    day: 4,
    topicGroup: "Binary Search on Arrays",
    difficulty: "Hard",
    tags: ["array", "binary-search", "partition", "median"],
    ques: "Median of Two Sorted Arrays",
    quesLink:
      "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    pattern: "Binary Search on Partition, Hard",
    solution:
      "Binary search on partition of smaller array to balance left/right halves so that all left ≤ all right, then compute median.",
  },

  // ✅ DAY 5 — Hard Patterns (7 Questions)
  {
    id: 34,
    day: 5,
    topicGroup: "Hard Patterns",
    difficulty: "Medium",
    tags: ["intervals", "sorting", "merge"],
    ques: "Merge Intervals",
    quesLink: "https://leetcode.com/problems/merge-intervals/",
    pattern: "Intervals, Sorting",
    solution:
      "Sort by start time; iterate and merge overlapping intervals by extending current interval’s end.",
  },
  {
    id: 35,
    day: 5,
    topicGroup: "Hard Patterns",
    difficulty: "Medium",
    tags: ["intervals", "insertion", "merge"],
    ques: "Insert Interval",
    quesLink: "https://leetcode.com/problems/insert-interval/",
    pattern: "Intervals, Merge Style",
    solution:
      "Add intervals before new one, merge overlaps with new interval, then add remaining intervals.",
  },
  {
    id: 36,
    day: 5,
    topicGroup: "Hard Patterns",
    difficulty: "Medium",
    tags: ["array", "quickselect", "partition", "kth"],
    ques: "Kth Largest Element in an Array (Quickselect)",
    quesLink:
      "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    pattern: "Quickselect, Partition",
    solution:
      "Use partition similar to quicksort; recursively/iteratively move into side containing kth largest until pivot index is correct.",
  },
  {
    id: 37,
    day: 5,
    topicGroup: "Hard Patterns",
    difficulty: "Medium",
    tags: ["array", "two-pointers", "sorting", "3sum"],
    ques: "3Sum",
    quesLink: "https://leetcode.com/problems/3sum/",
    pattern: "Sorting, Two Pointers",
    solution:
      "Sort array, fix one element, then use two pointers to find pairs summing to -fixed while skipping duplicates.",
  },
  {
    id: 38,
    day: 5,
    topicGroup: "Hard Patterns",
    difficulty: "Medium",
    tags: ["array", "two-pointers", "sorting", "4sum"],
    ques: "4Sum",
    quesLink: "https://leetcode.com/problems/4sum/",
    pattern: "K-Sum, Sorting, Two Pointers",
    solution:
      "Sort, fix two indices (nested loops), then use two pointers for remaining pair; skip duplicates.",
  },
  {
    id: 39,
    day: 5,
    topicGroup: "Hard Patterns",
    difficulty: "Medium",
    tags: ["array", "permutation", "next-permutation"],
    ques: "Next Permutation",
    quesLink: "https://leetcode.com/problems/next-permutation/",
    pattern: "Array Manipulation",
    solution:
      "Find first decreasing index from right, swap with just larger element to its right, then reverse suffix.",
  },
  {
    id: 40,
    day: 5,
    topicGroup: "Hard Patterns",
    difficulty: "Medium",
    tags: ["array", "rotation", "reverse-technique"],
    ques: "Rotate Array",
    quesLink: "https://leetcode.com/problems/rotate-array/",
    pattern: "Array Rotation, Reverse Technique",
    solution:
      "Normalize k, reverse whole array, then reverse first k elements and reverse remaining n-k elements.",
  },

  // ✅ DAY 6 — MAANG Favorites (6 Questions)
  {
    id: 41,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Medium",
    tags: ["array", "greedy", "reachability", "jump-game"],
    ques: "Jump Game",
    quesLink: "https://leetcode.com/problems/jump-game/",
    pattern: "Greedy, Reachability",
    solution:
      "Keep track of farthest reachable index; if current index > farthest, fail; update farthest as you go.",
  },
  {
    id: 42,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Medium",
    tags: ["array", "greedy", "jump-game", "min-jumps"],
    ques: "Jump Game II",
    quesLink: "https://leetcode.com/problems/jump-game-ii/",
    pattern: "Greedy, Level BFS on Indices",
    solution:
      "Greedy: track current range (end) and farthest; when you reach end, increase jumps and update end to farthest.",
  },
  {
    id: 43,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Medium",
    tags: ["array", "greedy", "gas-station", "prefix-sum"],
    ques: "Gas Station",
    quesLink: "https://leetcode.com/problems/gas-station/",
    pattern: "Greedy, Prefix Sum",
    solution:
      "If total gas < total cost, impossible; otherwise track running tank and reset start when tank drops below 0.",
  },
  {
    id: 44,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Medium",
    tags: ["matrix", "simulation", "spiral"],
    ques: "Spiral Matrix",
    quesLink: "https://leetcode.com/problems/spiral-matrix/",
    pattern: "Matrix Traversal, Simulation",
    solution:
      "Maintain top, bottom, left, right boundaries and traverse layer by layer adjusting boundaries.",
  },
  {
    id: 45,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Medium",
    tags: ["matrix", "in-place", "markers", "zeroes"],
    ques: "Set Matrix Zeroes",
    quesLink: "https://leetcode.com/problems/set-matrix-zeroes/",
    pattern: "Matrix, In-place Marking",
    solution:
      "Use first row and first column to mark rows/cols that should be zero; then zero out based on markers.",
  },
  {
    id: 46,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Medium",
    tags: ["array", "dp", "binary-search", "lis"],
    ques: "Longest Increasing Subsequence (Patience Sorting)",
    quesLink:
      "https://leetcode.com/problems/longest-increasing-subsequence/",
    pattern: "DP, Binary Search (Patience Sorting)",
    solution:
      "Maintain an array tails; for each num, binary search its position in tails and replace; length of tails is LIS length.",
  },
];
