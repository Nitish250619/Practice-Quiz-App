import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import quizzes from "../../data/quizzes";
import ProblemSolvingButton from "../../Components/ProblemSolvingButton/ProblemSolvingButton";
import PracticePolyfillsButton from "../../Components/PracticePolyfillsButton/PracticePolyfillsButton";
import ExploreJSMethodsButton from "../../Components/ExploreJSMethodsButton/ExploreJSMethodsButton";

const HomePage = () => {
  const navigate = useNavigate();

  const handleStartQuiz = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };

  // 🔹 DSA topic buttons config
  const dsaTopics = [
    { label: "DSA: Arrays", path: "/dsa/arrays" },
    { label: "DSA: Strings", path: "/dsa/strings" },
    { label: "DSA: Linked List", path: "/dsa/linked-list" },
    { label: "DSA: Stack", path: "/dsa/stack" },
    { label: "DSA: Queue", path: "/dsa/queue" },
    { label: "DSA: Recursion", path: "/dsa/recursion" },
  ];

  // 🔹 Pattern buttons config
  const patterns = [
  { label: "Two Pointers", path: "/patterns/two-pointers" },
  { label: "Sliding Window", path: "/patterns/sliding-window" },
  { label: "Prefix Sum", path: "/patterns/prefix-sum" },
  
  { label: "Binary Search", path: "/patterns/binary-search" },
  { label: "Sorting + Two Pointers", path: "/patterns/sort-two-pointers" },
  { label: "Cyclic Sort / Index Placement", path: "/patterns/cyclic-sort" },
  
  { label: "Greedy", path: "/patterns/greedy" },
  { label: "Intervals & Merge", path: "/patterns/intervals" },
  { label: "Monotonic Stack", path: "/patterns/monotonic-stack" },
  { label: "Monotonic Deque (Sliding Window)", path: "/patterns/monotonic-deque" },
  
  { label: "Dynamic Programming", path: "/patterns/dp" },
  { label: "String Hashing / Anagrams", path: "/patterns/string-hashing" },
  { label: "Palindrome Expand Center", path: "/patterns/palindrome-center" },
  
  { label: "Graph BFS / DFS", path: "/patterns/graph-traversal" },
  { label: "Heap / Priority Queue", path: "/patterns/heap" },
];


  // 🔹 Algorithm buttons config
  const dsaAlgorithms = [
    { label: "Searching Algorithms", path: "/algorithms/searching" },
    { label: "Sorting Algorithms", path: "/algorithms/sorting" },
    { label: "Recursion & Backtracking", path: "/algorithms/backtracking" },
    { label: "Greedy Algorithms", path: "/algorithms/greedy" },
    { label: "Graph Algorithms", path: "/algorithms/graphs" },
    { label: "Tree Algorithms", path: "/algorithms/trees" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 🔹 Top-right corner button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: { xs: 1.5, sm: 2, md: 3 },
        }}
      >
        <ExploreJSMethodsButton />
      </Box>

      {/* 🔹 Main Content */}
      <Container maxWidth="md" sx={{ flexGrow: 1 }}>
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "#0d47a1",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            🚀 Welcome to the Quiz Hub
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ mt: 1, fontSize: { xs: "1rem", sm: "1.1rem" } }}
          >
            Sharpen your knowledge across levels: Basic, Medium & Advanced.
          </Typography>
        </Box>

        {/* 🔹 Quizzes */}
        <Grid container spacing={4}>
          {quizzes.map((quiz) => (
            <Grid item xs={12} sm={6} md={4} key={quiz.id}>
              <Card
                elevation={6}
                sx={{
                  borderRadius: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#ffffff",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#1565c0", mb: 1 }}
                  >
                    {quiz.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {quiz.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleStartQuiz(quiz.id)}
                    sx={{
                      textTransform: "none",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      backgroundColor: "#1976d2",
                      borderRadius: 2,
                      py: 1,
                      "&:hover": {
                        backgroundColor: "#1565c0",
                      },
                    }}
                  >
                    Start Quiz
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* 🔹 DSA Topic Practice Buttons */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: "#0d47a1",
              mb: 2,
              textAlign: "center",
            }}
          >
            Practice DSA Topics
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {dsaTopics.map((topic) => (
              <Grid item xs={12} sm={6} md={4} key={topic.path}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleNavigate(topic.path)}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: 3,
                    py: 1.2,
                    backgroundColor: "rgba(255,255,255,0.8)",
                    "&:hover": {
                      backgroundColor: "#e3f2fd",
                    },
                  }}
                >
                  {topic.label}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 🔹 Pattern Practice Buttons */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: "#0d47a1",
              mb: 2,
              textAlign: "center",
            }}
          >
            Practice Patterns
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {patterns.map((pattern) => (
              <Grid item xs={12} sm={6} md={4} key={pattern.path}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleNavigate(pattern.path)}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: 3,
                    py: 1.2,
                    backgroundColor: "rgba(255,255,255,0.8)",
                    "&:hover": {
                      backgroundColor: "#e3f2fd",
                    },
                  }}
                >
                  {pattern.label}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 🔹 Algorithms Practice Buttons */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: "#0d47a1",
              mb: 2,
              textAlign: "center",
            }}
          >
            Practice Algorithms
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {dsaAlgorithms.map((algo) => (
              <Grid item xs={12} sm={6} md={4} key={algo.path}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleNavigate(algo.path)}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: 3,
                    py: 1.2,
                    backgroundColor: "rgba(255,255,255,0.8)",
                    "&:hover": {
                      backgroundColor: "#e3f2fd",
                    },
                  }}
                >
                  {algo.label}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 🔹 Other Buttons (centered below) */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <ProblemSolvingButton />
        </Box>
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <PracticePolyfillsButton />
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
