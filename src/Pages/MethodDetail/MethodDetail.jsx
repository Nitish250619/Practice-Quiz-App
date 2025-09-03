// src/Pages/Methods/MethodDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Paper, Button, Divider } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";
import { methodsData } from "../../data/methodsData"; // <-- your data file

const MethodDetail = () => {
  const { category, level } = useParams();
  const methods = methodsData[category]?.[level] || [];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#0d0d0d", // Dark black background
        color: "#e6f1ff", // Pale bluish text
        p: { xs: 2, md: 4 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: "bold",
          textAlign: "center",
          color: "#b0c4de", // Pale blue
        }}
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)} –{" "}
        {level.charAt(0).toUpperCase() + level.slice(1)} Methods
      </Typography>

      {methods.length > 0 ? (
        methods.map((method, idx) => <MethodCard key={idx} method={method} />)
      ) : (
        <Typography textAlign="center" color="gray">
          ❌ No methods found for this category and level.
        </Typography>
      )}
    </Box>
  );
};

const MethodCard = ({ method }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        mb: 3,
        p: 3,
        borderRadius: "16px",
        bgcolor: "#1a1a1a", // Dark card
        color: "#f5f5f5",
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
      }}
    >
      {/* Method Title */}
      <Typography variant="h6" sx={{ color: "#b0c4de", fontSize: "1.2rem" }}>
        🔹 {method.name}
      </Typography>
      <Divider sx={{ my: 1, borderColor: "#2f4f4f" }} />

      {/* Definition */}
      <Typography variant="body1" sx={{ mb: 1, fontSize: "1rem" }}>
        <strong>Definition:</strong> {method.definition}
      </Typography>

      {/* Explanation */}
      {method.explanation && (
        <Typography variant="body2" sx={{ mb: 2, color: "#cfd8dc" }}>
          💡 {method.explanation}
        </Typography>
      )}

      {/* Challenge */}
      {method.challenge && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ color: "#9acd32", mb: 1 }}>
            🏆 Challenge: {method.challenge.question}
          </Typography>
          <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            customStyle={{
              borderRadius: "12px",
              padding: "12px",
              fontSize: "0.9rem",
              background: "#101820",
            }}
          >
            {method.challenge.data}
          </SyntaxHighlighter>
        </Box>
      )}

      {/* Project */}
      {method.project && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ color: "#ffa500", mb: 1 }}>
            🛠 Project: {method.project.question}
          </Typography>
          <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            customStyle={{
              borderRadius: "12px",
              padding: "12px",
              fontSize: "0.9rem",
              background: "#101820",
            }}
          >
            {method.project.data}
          </SyntaxHighlighter>
        </Box>
      )}

      {/* Usecase */}
      {method.usecase && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ color: "#00ced1", mb: 1 }}>
            🌍 Usecase: {method.usecase.question}
          </Typography>
          <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            customStyle={{
              borderRadius: "12px",
              padding: "12px",
              fontSize: "0.9rem",
              background: "#101820",
            }}
          >
            {method.usecase.data}
          </SyntaxHighlighter>
        </Box>
      )}

      {/* Toggle Answer Button */}
      <Button
        variant="contained"
        onClick={() => setShowAnswer((prev) => !prev)}
        sx={{
          mt: 2,
          backgroundColor: showAnswer ? "#556b2f" : "#4682b4", // Olive green / Pale blue
          "&:hover": {
            backgroundColor: showAnswer ? "#6b8e23" : "#5f9ea0",
          },
        }}
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </Button>

      {/* Answer */}
      {showAnswer && (
        <Box sx={{ mt: 2 }}>
          {method.challenge?.answer && (
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{
                borderRadius: "12px",
                padding: "16px",
                fontSize: "0.95rem",
                background: "#101820",
              }}
            >
              {method.challenge.answer}
            </SyntaxHighlighter>
          )}

          {method.project?.answer && (
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{
                borderRadius: "12px",
                padding: "16px",
                fontSize: "0.95rem",
                background: "#101820",
              }}
            >
              {method.project.answer}
            </SyntaxHighlighter>
          )}

          {method.usecase?.answer && (
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              customStyle={{
                borderRadius: "12px",
                padding: "16px",
                fontSize: "0.95rem",
                background: "#101820",
              }}
            >
              {method.usecase.answer}
            </SyntaxHighlighter>
          )}
        </Box>
      )}
    </Paper>
  );
};

export default MethodDetail;
