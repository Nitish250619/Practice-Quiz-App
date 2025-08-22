import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Stack,
  Paper,
  Divider,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import quizzes from "../../data/quizzes"; // Adjust path as needed

const ReviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);

  const {
    score = 0,
    totalQuestions = 0,
    quizName = "",
    userAnswers = [],
    quizId = "",
  } = location.state || {};

  // Load full quiz details to get questions and options text
  useEffect(() => {
    if (!location.state) {
      navigate("/");
      return;
    }
    const foundQuiz = quizzes.find((q) => q.id === quizId);
    if (foundQuiz) setQuiz(foundQuiz);
    else navigate("/");
  }, [location.state, navigate, quizId]);

  if (!quiz) {
    return (
      <Container sx={{ mt: 8 }}>
        <Typography variant="h6" align="center" color="text.secondary">
          Loading review...
        </Typography>
      </Container>
    );
  }

  // Helper to get question details by id
  const getQuestionById = (id) => quiz.questions.find((q) => q.id === id);

  // Helper to get option text by question and option id
  const getOptionText = (question, optionId) => {
    const option = question.options.find((opt) => opt.id === optionId);
    return option ? option.text : "N/A";
  };

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md" sx={{ mt: 6, mb: 8 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
        >
          Quiz Review - {quizName}
        </Typography>

        <Typography
          variant="h6"
          color="primary"
          textAlign="center"
          gutterBottom
        >
          Your Score: {score} / {totalQuestions} (
          {((score / totalQuestions) * 100).toFixed(2)}%)
        </Typography>

        <Box sx={{ mt: 4 }}>
          {userAnswers.map((answer, index) => {
            const question = getQuestionById(answer.questionId);
            if (!question) return null;

            const userAnswerText = getOptionText(
              question,
              answer.selectedOptionId
            );
            const correctAnswerText = getOptionText(
              question,
              question.correctOptionId
            );

            return (
              <Paper
                key={answer.questionId}
                variant="outlined"
                sx={{
                  p: 3,
                  mb: 3,
                  bgcolor: answer.isCorrect ? "success.light" : "error.light",
                  borderColor: answer.isCorrect ? "success.main" : "error.main",
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Q{index + 1}: {question.questionText}
                </Typography>

                <Typography sx={{ mb: 1 }}>
                  <strong>Your Answer:</strong> {userAnswerText}
                </Typography>

                {!answer.isCorrect && (
                  <Typography sx={{ mb: 1, color: "success.dark" }}>
                    <strong>Correct Answer:</strong> {correctAnswerText}
                  </Typography>
                )}

                <Divider sx={{ my: 1 }} />

                <Typography variant="body2" color="text.secondary">
                  <strong>Explanation:</strong> {question.explanation}
                </Typography>
              </Paper>
            );
          })}
        </Box>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          <Button variant="contained" onClick={() => navigate("/")}>
            Back to Home
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate(`/quiz/${quizId}`)}
          >
            Retake Quiz
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default ReviewPage;
