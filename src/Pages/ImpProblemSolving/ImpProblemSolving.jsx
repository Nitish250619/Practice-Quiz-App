import React, { useMemo, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  TextField,
  Chip,
  Stack,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CodeIcon from "@mui/icons-material/Code";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

import { motion, AnimatePresence } from "framer-motion";

// Adjust the import path to where you stored the data file
import mainProblemSolvingData from "../../data/mainProblemSolvingData.js";

/**
 * Derive category from id, e.g. "arrays-1" => "arrays"
 */
const getCategoryKey = (id) => id.split("-")[0];

/**
 * Human-friendly labels for categories
 */
const CATEGORY_LABELS = {
  arrays: "Arrays",
  functions: "Functions",
  numbers: "Numbers",
  objects: "Objects",
  promises: "Promises",
  strings: "Strings",
  web: "Web",
  misc: "Miscellaneous",
};

const ImpProblemSolving = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchText, setSearchText] = useState("");

  // Collect categories from data
  const categories = useMemo(() => {
    const set = new Set();
    mainProblemSolvingData.forEach((item) => {
      const key = getCategoryKey(item.id);
      if (key) set.add(key);
    });
    return Array.from(set);
  }, []);

  // Filter questions based on selectedCategory + search
  const filteredQuestions = useMemo(() => {
    const q = searchText.toLowerCase();
    return mainProblemSolvingData.filter((item) => {
      const itemCategory = getCategoryKey(item.id);
      const matchCategory =
        selectedCategory === "all" || itemCategory === selectedCategory;

      const matchSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.hint.toLowerCase().includes(q) ||
        item.explanation.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchText]);

  /**
   * Optional math snippets for some questions,
   * just to showcase react-katex usage.
   */
  const renderMathForQuestion = (id) => {
    if (id === "arrays-18") {
      // Missing number sum formula
      return (
        <Box mt={1.5}>
          <Typography variant="subtitle2" color="text.secondary">
            Formula used:
          </Typography>
          <BlockMath math={"\\sum_{k=0}^{n} k = \\frac{n(n+1)}{2}"} />
        </Box>
      );
    }
    if (id === "numbers-3") {
      // Power of two bit trick
      return (
        <Box mt={1.5}>
          <Typography variant="subtitle2" color="text.secondary">
            Bit trick:
          </Typography>
          <InlineMath math={"n \\text{ is power of two } \\iff n > 0 \\land (n \\& (n-1)) = 0"} />
        </Box>
      );
    }
    return null;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        mb={4}
      >
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Important Problem Solving
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Practice JavaScript / React-style questions with hints, code answers,
          and deep explanations. Use filters to focus on specific topics.
        </Typography>
      </Box>

      {/* Filters row */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        mb={3}
      >
        <Paper
          elevation={0}
          sx={{
            p: 2,
            borderRadius: 3,
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <FilterAltIcon fontSize="small" color="primary" />
              <Typography variant="subtitle1" fontWeight={600}>
                Filters
              </Typography>
            </Stack>

            <Tabs
              value={selectedCategory}
              onChange={(_, val) => setSelectedCategory(val)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ minHeight: 0 }}
            >
              <Tab
                label="All"
                value="all"
                sx={{ textTransform: "none", minHeight: 0 }}
              />
              {categories.map((key) => (
                <Tab
                  key={key}
                  label={CATEGORY_LABELS[key] || key}
                  value={key}
                  sx={{ textTransform: "none", minHeight: 0 }}
                />
              ))}
            </Tabs>

            <TextField
              size="small"
              variant="outlined"
              placeholder="Search by question, hint, explanation..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              InputProps={{
                startAdornment: (
                  <Box component="span" sx={{ mr: 1, color: "text.secondary" }}>
                    <HelpOutlineIcon fontSize="small" />
                  </Box>
                ),
              }}
              sx={{ minWidth: { xs: "100%", md: 280 } }}
            />
          </Stack>
        </Paper>
      </Box>

      {/* Questions list */}
      <AnimatePresence>
        <Stack spacing={2}>
          {filteredQuestions.map((item, index) => {
            const categoryKey = getCategoryKey(item.id);
            const categoryLabel = CATEGORY_LABELS[categoryKey] || categoryKey;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, delay: index * 0.01 }}
              >
                <Accordion
                  disableGutters
                  sx={{
                    borderRadius: 3,
                    border: `1px solid ${theme.palette.divider}`,
                    overflow: "hidden",
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      px: 2,
                      py: 1.5,
                      "& .MuiAccordionSummary-content": {
                        alignItems: "center",
                      },
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      sx={{ width: "100%" }}
                    >
                      <Chip
                        label={categoryLabel}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle1" fontWeight={600}>
                          {item.question}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ mt: 0.5, display: "block" }}
                        >
                          ID: {item.id}
                        </Typography>
                      </Box>
                      <IconButton size="small">
                        <CodeIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                  </AccordionSummary>

                  <AccordionDetails sx={{ px: 2, pb: 2 }}>
                    <Stack spacing={2}>
                      {/* Hint */}
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <LightbulbIcon
                          fontSize="small"
                          sx={{ color: "warning.main" }}
                        />
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                        >
                          Hint:
                        </Typography>
                        <Chip
                          label={item.hint}
                          variant="outlined"
                          size="small"
                        />
                      </Stack>

                      {/* Code answer */}
                      <Box>
                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="center"
                          mb={0.5}
                        >
                          <CodeIcon
                            fontSize="small"
                            sx={{ color: "primary.main" }}
                          />
                          <Typography variant="subtitle2">
                            Answer (JavaScript):
                          </Typography>
                        </Stack>
                        <SyntaxHighlighter
                          language="javascript"
                          style={vscDarkPlus}
                          wrapLines
                          wrapLongLines
                          customStyle={{
                            borderRadius: 12,
                            fontSize: 13,
                            maxHeight: 400,
                          }}
                        >
                          {item.answer}
                        </SyntaxHighlighter>
                      </Box>

                      {/* Explanation */}
                      <Box>
                        <Typography variant="subtitle2" gutterBottom>
                          Explanation:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.explanation}
                        </Typography>

                        {/* Optional math using react-katex for some questions */}
                        {renderMathForQuestion(item.id)}
                      </Box>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            );
          })}

          {filteredQuestions.length === 0 && (
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              mt={4}
              textAlign="center"
            >
              <Typography variant="body1" color="text.secondary">
                No questions match your filters. Try changing the category or
                search text.
              </Typography>
            </Box>
          )}
        </Stack>
      </AnimatePresence>
    </Container>
  );
};

export default ImpProblemSolving;
