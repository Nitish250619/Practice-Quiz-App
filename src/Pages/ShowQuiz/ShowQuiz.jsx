import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  Container,
  LinearProgress,
} from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

import { useParams, useNavigate } from "react-router-dom";
import quizzes from "../../data/quizzes";

import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

const ShowQuiz = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();

  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const foundQuiz = quizzes.find((q) => q.id === quizId);
    if (foundQuiz) {
      setCurrentQuiz(foundQuiz);
      setCurrentQuestionIndex(0);
      setSelectedOptionId(null);
      setShowFeedback(false);
      setUserAnswers([]);
      setScore(0);
    } else {
      navigate("/");
    }
  }, [quizId, navigate]);

  // Always define currentQuestion, may be null
  const currentQuestion =
    currentQuiz && currentQuiz.questions
      ? currentQuiz.questions[currentQuestionIndex]
      : null;

  // Option click handler
  const handleOptionClick = useCallback(
    (optionId) => {
      if (!currentQuestion || showFeedback) return;

      setSelectedOptionId(optionId);
      setShowFeedback(true);

      const isCorrect = optionId === currentQuestion.correctOptionId;

      const existingAnswer = userAnswers.find(
        (ua) => ua.questionId === currentQuestion.id
      );

      if (!existingAnswer) {
        if (isCorrect) setScore((prev) => prev + 1);
        setUserAnswers((prev) => [
          ...prev,
          {
            questionId: currentQuestion.id,
            selectedOptionId: optionId,
            isCorrect,
            correctOptionId: currentQuestion.correctOptionId,
          },
        ]);
      }
    },
    [currentQuestion, showFeedback, userAnswers]
  );

  // Style options based on answer and feedback
  const getOptionStyle = useCallback(
    (optionId) => {
      if (!currentQuestion) return {};

      const isSelectedByUser = selectedOptionId === optionId;
      const isCorrectOption = currentQuestion.correctOptionId === optionId;

      if (!showFeedback) {
        return isSelectedByUser
          ? { borderColor: "primary.main", backgroundColor: "primary.light" }
          : {};
      }

      if (isCorrectOption) {
        return {
          borderColor: "success.main",
          backgroundColor: "success.light",
          color: "success.dark",
          fontWeight: "bold",
        };
      }
      if (isSelectedByUser && !isCorrectOption) {
        return {
          borderColor: "error.main",
          backgroundColor: "error.light",
          color: "error.dark",
          fontWeight: "bold",
        };
      }
      return {};
    },
    [selectedOptionId, showFeedback, currentQuestion]
  );

  // Next question handler
  const handleNextQuestion = useCallback(() => {
    if (!currentQuiz) return;

    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setShowFeedback(false);
    } else {
      navigate("/results", {
        state: {
          score,
          totalQuestions: currentQuiz.questions.length,
          quizName: currentQuiz.name,
          userAnswers,
          quizId,
        },
      });
    }
  }, [currentQuestionIndex, currentQuiz, score, userAnswers, quizId, navigate]);

  // Previous question handler
  const handlePreviousQuestion = useCallback(() => {
    if (!currentQuiz) return;

    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setShowFeedback(true);

      const prevAnswer = userAnswers.find(
        (ua) =>
          ua.questionId === currentQuiz.questions[currentQuestionIndex - 1].id
      );
      setSelectedOptionId(prevAnswer ? prevAnswer.selectedOptionId : null);
    }
  }, [currentQuestionIndex, currentQuiz, userAnswers]);

  // KaTeX render helper
  const renderWithKaTeX = (text) => {
    const parts = text.split(/(\$[^\$]*\$)/g);
    return parts.map((part, index) => {
      if (part.startsWith("$") && part.endsWith("$")) {
        try {
          return <InlineMath key={index}>{part.slice(1, -1)}</InlineMath>;
        } catch (e) {
          return (
            <Typography component="span" color="error" key={index}>
              {part} (Error)
            </Typography>
          );
        }
      }
      return (
        <Typography component="span" key={index}>
          {part}
        </Typography>
      );
    });
  };

  // Loading state
  if (!currentQuiz) {
    return (
      <Container sx={{ mt: 10 }}>
        <Typography variant="h5" align="center" color="text.secondary">
          Loading quiz...
        </Typography>
        <Box mt={3} display="flex" justifyContent="center">
          <Button variant="contained" onClick={() => navigate("/")}>
            Go Home
          </Button>
        </Box>
      </Container>
    );
  }

  if (!currentQuestion) {
    return (
      <Typography variant="h6" align="center" mt={10}>
        No questions found for this quiz.
      </Typography>
    );
  }

  return (
    
      <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            {currentQuiz.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Question {currentQuestionIndex + 1} / {currentQuiz.questions.length}
          </Typography>
        </Box>

        <LinearProgress
          variant="determinate"
          value={
            ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100
          }
          sx={{ height: 10, borderRadius: 5, mb: 3 }}
        />

        <Card sx={{ mb: 3, p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
            {renderWithKaTeX(currentQuestion.questionText)}
          </Typography>

          {currentQuestion.codeSnippet && (
            <SyntaxHighlighter
              language="javascript"
              style={tomorrow}
              customStyle={{
                borderRadius: "10px",
                fontSize: "1rem",
                padding: "16px",
                backgroundColor: "#110404ff",
              }}
            >
              {currentQuestion.codeSnippet}
            </SyntaxHighlighter>
          )}

          <Stack spacing={2}>
            {currentQuestion.options.map((opt) => (
              <Button
                key={opt.id}
                variant="outlined"
                onClick={() => handleOptionClick(opt.id)}
                disabled={showFeedback}
                sx={{
                  justifyContent: "flex-start",
                  textTransform: "none",
                  textAlign: "left",
                  py: { xs: 1.5, sm: 2 },
                  px: { xs: 2, sm: 3 },
                  ...getOptionStyle(opt.id),
                  "&:hover": {
                    ...(!showFeedback && {
                      borderColor: "primary.main",
                      backgroundColor: "action.hover",
                    }),
                    ...(showFeedback && getOptionStyle(opt.id)),
                  },
                }}
              >
                {renderWithKaTeX(opt.text)}
              </Button>
            ))}
          </Stack>

          {/* {showFeedback && (
            <Box
              mt={3}
              p={2}
              bgcolor="success.light"
              borderRadius={2}
              sx={{
                border: "1px solid",
                borderColor: "success.main",
                color: "success.dark",
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                Explanation:
              </Typography>
              <Typography variant="body2">
                {renderWithKaTeX(currentQuestion.explanation)}
              </Typography>
            </Box>
          )} */}
        </Card>

        <Box
          display="flex"
          justifyContent="space-between"
          mt={3}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 0 },
          }}
        >
          <Button
            variant="outlined"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            onClick={handleNextQuestion}
            disabled={!showFeedback}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            {currentQuestionIndex + 1 === currentQuiz.questions.length
              ? "Finish Quiz"
              : "Next"}
          </Button>
        </Box>
      </Container>
    
  );
};

export default ShowQuiz;
