export const dsaQueueQuestions = [
  // ✅ DAY 1 — Queue Basics & Implementation
  {
    id: 1,
    day: 1,
    topicGroup: "Queue Basics & Implementation",
    difficulty: "Easy",
    tags: ["queue", "implementation", "array"],
    ques: "Implement Queue using Array",
    quesLink:
      "https://www.geeksforgeeks.org/array-implementation-of-queue-simple/",
    pattern: "Array, Front & Rear Indices",
    solution:
      "Maintain front and rear indices; enqueue adds at rear and increments it, dequeue removes from front and increments it; handle empty and full conditions.",
  },
  {
    id: 2,
    day: 1,
    topicGroup: "Queue Basics & Implementation",
    difficulty: "Easy",
    tags: ["queue", "linked-list", "implementation"],
    ques: "Implement Queue using Linked List",
    quesLink:
      "https://www.geeksforgeeks.org/queue-linked-list-implementation/",
    pattern: "Linked List, Front & Rear Pointers",
    solution:
      "Use a linked list with pointers to front and rear; enqueue inserts at rear, dequeue removes from front in O(1).",
  },
  {
    id: 3,
    day: 1,
    topicGroup: "Queue Basics & Implementation",
    difficulty: "Medium",
    tags: ["queue", "circular-queue", "array"],
    ques: "Design Circular Queue",
    quesLink: "https://leetcode.com/problems/design-circular-queue/",
    pattern: "Circular Array, Modulo Indexing",
    solution:
      "Use fixed-size array and front/rear pointers; increment pointers modulo capacity and track size to distinguish full vs empty.",
  },
  {
    id: 4,
    day: 1,
    topicGroup: "Queue Basics & Implementation",
    difficulty: "Medium",
    tags: ["queue", "circular-deque", "design"],
    ques: "Design Circular Deque",
    quesLink: "https://leetcode.com/problems/design-circular-deque/",
    pattern: "Circular Array, Double-Ended Operations",
    solution:
      "Extend circular queue idea to push/pop at both front and rear using modular arithmetic and track size.",
  },
  {
    id: 5,
    day: 1,
    topicGroup: "Queue Basics & Implementation",
    difficulty: "Easy",
    tags: ["queue", "stack", "implementation"],
    ques: "Implement Queue using Stacks",
    quesLink: "https://leetcode.com/problems/implement-queue-using-stacks/",
    pattern: "Two Stacks (in & out)",
    solution:
      "Use one stack for enqueue and another for dequeue; move elements from in to out only when out is empty to amortize O(1) operations.",
  },
  {
    id: 6,
    day: 1,
    topicGroup: "Queue Basics & Implementation",
    difficulty: "Medium",
    tags: ["queue", "design", "recent-calls"],
    ques: "Number of Recent Calls",
    quesLink: "https://leetcode.com/problems/number-of-recent-calls/",
    pattern: "Queue, Sliding Time Window",
    solution:
      "Maintain a queue of timestamps; on each ping(t), enqueue t and dequeue all times < t-3000; queue size is the answer.",
  },

  // ✅ DAY 2 — BFS on Graphs & Grids
  {
    id: 7,
    day: 2,
    topicGroup: "BFS on Trees & Graphs",
    difficulty: "Easy",
    tags: ["queue", "bfs", "tree"],
    ques: "Binary Tree Level Order Traversal",
    quesLink: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    pattern: "BFS with Level Size",
    solution:
      "Use a queue starting from root; for each level, process all nodes currently in queue and enqueue their children.",
  },
  {
    id: 8,
    day: 2,
    topicGroup: "BFS on Trees & Graphs",
    difficulty: "Medium",
    tags: ["queue", "bfs", "tree"],
    ques: "Binary Tree Right Side View",
    quesLink: "https://leetcode.com/problems/binary-tree-right-side-view/",
    pattern: "Level Order, Last Node per Level",
    solution:
      "Level-order traversal with queue; record the last node of each level to build right side view.",
  },
  {
    id: 9,
    day: 2,
    topicGroup: "BFS on Trees & Graphs",
    difficulty: "Medium",
    tags: ["queue", "bfs", "grid"],
    ques: "Rotting Oranges",
    quesLink: "https://leetcode.com/problems/rotting-oranges/",
    pattern: "Multi-source BFS on Grid",
    solution:
      "Enqueue all initially rotten oranges with time 0; BFS to rot neighbors; track time and check if any fresh remains.",
  },
  {
    id: 10,
    day: 2,
    topicGroup: "BFS on Trees & Graphs",
    difficulty: "Medium",
    tags: ["queue", "bfs", "grid"],
    ques: "Shortest Path in Binary Matrix",
    quesLink: "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
    pattern: "BFS on 8-Direction Grid",
    solution:
      "If start/target blocked return -1. BFS with queue storing (row, col, dist); first time you reach target cell is shortest path.",
  },
  {
    id: 11,
    day: 2,
    topicGroup: "BFS on Trees & Graphs",
    difficulty: "Medium",
    tags: ["queue", "bfs", "grid"],
    ques: "Walls and Gates",
    quesLink: "https://leetcode.com/problems/walls-and-gates/",
    pattern: "Multi-source BFS from Gates",
    solution:
      "Push all gates (0 distance) into queue and BFS to fill nearest distance to a gate for every empty room.",
  },
  {
    id: 12,
    day: 2,
    topicGroup: "BFS on Trees & Graphs",
    difficulty: "Medium",
    tags: ["queue", "bfs", "graph"],
    ques: "Word Ladder",
    quesLink: "https://leetcode.com/problems/word-ladder/",
    pattern: "BFS on Implicit Graph",
    solution:
      "Treat each word as node; edges between words differing by 1 letter; BFS from beginWord until endWord is reached; precompute neighbors using wildcard patterns.",
  },

  // ✅ DAY 3 — Sliding Window & Deque Patterns
  {
    id: 13,
    day: 3,
    topicGroup: "Sliding Window & Deque",
    difficulty: "Hard",
    tags: ["deque", "sliding-window", "max"],
    ques: "Sliding Window Maximum",
    quesLink: "https://leetcode.com/problems/sliding-window-maximum/",
    pattern: "Monotonic Deque",
    solution:
      "Maintain deque of indices with decreasing values; remove indices out of window and those smaller than current; deque front is max.",
  },
  {
    id: 14,
    day: 3,
    topicGroup: "Sliding Window & Deque",
    difficulty: "Medium",
    tags: ["deque", "sliding-window", "negative"],
    ques: "First Negative Integer in Every Window of Size K",
    quesLink:
      "https://www.geeksforgeeks.org/first-negative-integer-every-window-size-k/",
    pattern: "Queue of Indices of Negatives",
    solution:
      "Maintain queue of indices of negative numbers; for each window, pop indices that move out and front of queue is first negative.",
  },
  {
    id: 15,
    day: 3,
    topicGroup: "Sliding Window & Deque",
    difficulty: "Medium",
    tags: ["deque", "sliding-window", "min-max"],
    ques: "Sum of Minimum and Maximum Elements of All Subarrays of Size K",
    quesLink:
      "https://www.geeksforgeeks.org/sum-minimum-maximum-elements-subarrays-size-k/",
    pattern: "Two Deques (Min & Max)",
    solution:
      "Use one deque for min and another for max; update each while sliding window and accumulate min+max for each window.",
  },
  {
    id: 16,
    day: 3,
    topicGroup: "Sliding Window & Deque",
    difficulty: "Easy",
    tags: ["queue", "sliding-window", "moving-average"],
    ques: "Moving Average from Data Stream",
    quesLink: "https://leetcode.com/problems/moving-average-from-data-stream/",
    pattern: "Fixed-Size Queue, Running Sum",
    solution:
      "Maintain queue of last N values and running sum; on new value, enqueue and add to sum, dequeue and subtract when size exceeds window.",
  },
  {
    id: 17,
    day: 3,
    topicGroup: "Sliding Window & Deque",
    difficulty: "Medium",
    tags: ["queue", "monotonic", "max-queue"],
    ques: "Design a Max Queue",
    quesLink:
      "https://www.lintcode.com/problem/960/",
    pattern: "Normal Queue + Monotonic Deque",
    solution:
      "Keep normal queue for elements and a decreasing deque for max; on push, pop smaller elements from deque; front of deque is current max.",
  },

  // ✅ DAY 4 — Topological Sort & Course Scheduling
  {
    id: 18,
    day: 4,
    topicGroup: "Topological Sort & Scheduling",
    difficulty: "Medium",
    tags: ["queue", "topological-sort", "graph"],
    ques: "Course Schedule",
    quesLink: "https://leetcode.com/problems/course-schedule/",
    pattern: "Kahn’s Algorithm (BFS Topo)",
    solution:
      "Build adjacency list and indegree array; enqueue nodes with indegree 0 and process, reducing indegree of neighbors; if processed count < n, cycle exists.",
  },
  {
    id: 19,
    day: 4,
    topicGroup: "Topological Sort & Scheduling",
    difficulty: "Medium",
    tags: ["queue", "topological-sort", "graph"],
    ques: "Course Schedule II",
    quesLink: "https://leetcode.com/problems/course-schedule-ii/",
    pattern: "BFS Topological Order",
    solution:
      "Same as Course Schedule but record the order of nodes dequeued; if count == numCourses, order is valid topological ordering.",
  },
  {
    id: 20,
    day: 4,
    topicGroup: "Topological Sort & Scheduling",
    difficulty: "Medium",
    tags: ["queue", "graph", "bfs"],
    ques: "Minimum Height Trees",
    quesLink: "https://leetcode.com/problems/minimum-height-trees/",
    pattern: "Topological Trimming of Leaves",
    solution:
      "Peel off leaves level by level using queue; remaining 1 or 2 nodes are centroids of the tree.",
  },
  {
    id: 21,
    day: 4,
    topicGroup: "Topological Sort & Scheduling",
    difficulty: "Hard",
    tags: ["queue", "graph", "bfs"],
    ques: "Bus Routes",
    quesLink: "https://leetcode.com/problems/bus-routes/",
    pattern: "BFS on Routes as Nodes",
    solution:
      "Model each bus route as node; build mapping from stop to routes; BFS over routes from source stops to target stops.",
  },
  {
    id: 22,
    day: 4,
    topicGroup: "Topological Sort & Scheduling",
    difficulty: "Hard",
    tags: ["queue", "graph", "bfs"],
    ques: "Alien Dictionary",
    quesLink: "https://leetcode.com/problems/alien-dictionary/",
    pattern: "Topological Sort on Characters",
    solution:
      "Derive character ordering constraints from adjacent words; build graph and indegrees, then perform BFS topological sort.",
  },

  // ✅ DAY 5 — Multi-source BFS & Advanced Grids
  {
    id: 23,
    day: 5,
    topicGroup: "Multi-source BFS & Grids",
    difficulty: "Medium",
    tags: ["queue", "bfs", "grid"],
    ques: "01 Matrix",
    quesLink: "https://leetcode.com/problems/01-matrix/",
    pattern: "Multi-source BFS from Zeros",
    solution:
      "Enqueue all cells with 0 distance; BFS to fill minimum distance to nearest 0 for 1-cells.",
  },
  {
    id: 24,
    day: 5,
    topicGroup: "Multi-source BFS & Grids",
    difficulty: "Medium",
    tags: ["queue", "bfs", "grid"],
    ques: "As Far from Land as Possible",
    quesLink: "https://leetcode.com/problems/as-far-from-land-as-possible/",
    pattern: "Multi-source BFS from Land",
    solution:
      "Push all land cells into queue and BFS to compute distance to nearest land for water cells; track max distance.",
  },
  {
    id: 25,
    day: 5,
    topicGroup: "Multi-source BFS & Grids",
    difficulty: "Medium",
    tags: ["queue", "bfs", "grid"],
    ques: "Shortest Path to Get Food",
    quesLink: "https://leetcode.com/problems/shortest-path-to-get-food/",
    pattern: "BFS on Grid with Obstacles",
    solution:
      "Start BFS from the starting cell, move in four directions, avoid blocked cells; first time you reach food is the shortest path.",
  },
  {
    id: 26,
    day: 5,
    topicGroup: "Multi-source BFS & Grids",
    difficulty: "Medium",
    tags: ["queue", "bfs", "grid"],
    ques: "Open the Lock",
    quesLink: "https://leetcode.com/problems/open-the-lock/",
    pattern: "BFS on State Space",
    solution:
      "Each lock combination is a node; from current combination generate next by turning wheels ±1; BFS until target, avoiding deadends.",
  },
  {
    id: 27,
    day: 5,
    topicGroup: "Multi-source BFS & Grids",
    difficulty: "Hard",
    tags: ["queue", "bfs", "grid"],
    ques: "Escape the Ghosts / Escape Maze Variants",
    quesLink:
      "https://leetcode.com/problems/escape-the-ghosts/",
    pattern: "Shortest Path / Distance Comparison",
    solution:
      "Reason with Manhattan distances or BFS shortest paths; check if you can reach target strictly before any ghost or obstacle.",
  },

  // ✅ DAY 6 — MAANG Favorite Queue & Simulation Problems
  {
    id: 28,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Medium",
    tags: ["queue", "simulation", "game"],
    ques: "Dota2 Senate",
    quesLink: "https://leetcode.com/problems/dota2-senate/",
    pattern: "Simulation with Queues per Party",
    solution:
      "Use two queues to store indices of each party; repeatedly pop smaller index, banning the other and re-enqueueing with index + n.",
  },
  {
    id: 29,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Medium",
    tags: ["queue", "simulation", "round-robin"],
    ques: "Time Needed to Buy Tickets",
    quesLink: "https://leetcode.com/problems/time-needed-to-buy-tickets/",
    pattern: "Simulation / Math, Queue Interpretation",
    solution:
      "Either simulate queue operations or compute total time by summing min(tickets[i], tickets[k]) with adjustments after index k.",
  },
  {
    id: 30,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Medium",
    tags: ["queue", "design", "hit-counter"],
    ques: "Design Hit Counter",
    quesLink: "https://leetcode.com/problems/design-hit-counter/",
    pattern: "Queue of Timestamps, Sliding Window",
    solution:
      "Maintain queue of hit timestamps; on hit, add timestamp; on getHits(t), remove all timestamps < t-300; size is count.",
  },
  { 
    id: 31,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Medium",
    tags: ["queue", "greedy", "frequency"],
    ques: "Task Scheduler",
    quesLink: "https://leetcode.com/problems/task-scheduler/",
    pattern: "Greedy + Max-Heap + Cooldown Queue",
    solution:
      "Use max-heap for task frequencies and queue to hold tasks in cooldown with their available time; simulate time units scheduling most frequent allowed task.",
  },
  {
    id: 32,
    day: 6,
    topicGroup: "MAANG Favorites",
    difficulty: "Medium",
    tags: ["queue", "bfs", "graph"],
    ques: "Snakes and Ladders",
    quesLink: "https://leetcode.com/problems/snakes-and-ladders/",
    pattern: "BFS on Board Positions",
    solution:
      "Flatten board to 1D; BFS from square 1, for each position try dice moves 1..6, jump via snakes/ladders, and count levels as number of moves.",
  },
];
