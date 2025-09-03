// src/Pages/Polyfillpage/BeginnerPage.jsx
import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useParams } from "react-router-dom";
import { beginnerPolyfills } from "../../data/beginnerPolyfillsdata";
import { motion } from "framer-motion";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

// Syntax highlighter
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const BeginnerPage = () => {
  const { type } = useParams(); // e.g., "array", "string"
  const questions = beginnerPolyfills[type] || [];

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        minHeight: "100vh",
        bgcolor: "linear-gradient(135deg, #dfefff, #b5dfff)",
        color: "#00334d",
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🌱 Beginner Polyfills –{" "}
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </Typography>

      {questions.length === 0 ? (
        <Typography textAlign="center">
          ❌ No beginner questions available for {type}.
        </Typography>
      ) : (
        questions.map((q, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 2,
              borderRadius: "12px",
              bgcolor: "#f5fbff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              "&:before": { display: "none" }, // remove default line
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="600" sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" } }}>
                <BlockMath math={q.question} /> {/* Question in KaTeX */}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  fontSize: { xs: "0.8rem", md: "0.95rem" },
                }}
              >
                <SyntaxHighlighter
                  language="javascript"
                  style={vscDarkPlus}
                  wrapLongLines={true}
                  customStyle={{
                    borderRadius: "10px",
                    padding: "16px",
                  }}
                >
                  {q.answer.trim()}
                </SyntaxHighlighter>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))
      )}
    </Box>
  );
};

export default BeginnerPage;
