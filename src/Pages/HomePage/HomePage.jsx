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
          p: { xs: 1.5, sm: 2, md: 3 }, // responsive padding
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

        {/* 🔹 Other Buttons (centered below quizzes) */}
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
