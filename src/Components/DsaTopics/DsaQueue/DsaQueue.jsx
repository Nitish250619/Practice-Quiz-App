import React, { useMemo, useState } from "react";
import { dsaQueueQuestions } from "../../../data/DsaData/queueQuestion.js";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Collapse,
  Chip,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Stack,
  Divider,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";
import { motion } from "framer-motion";

const DsaQueue = () => {
  const [openSolution, setOpenSolution] = useState(null);
  const [dayFilter, setDayFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSolution = (id) => {
    setOpenSolution(openSolution === id ? null : id);
  };

  const uniqueDays = useMemo(
    () =>
      Array.from(new Set(dsaQueueQuestions.map((q) => q.day))).sort(
        (a, b) => a - b
      ),
    []
  );

  const uniqueDifficulties = useMemo(
    () => Array.from(new Set(dsaQueueQuestions.map((q) => q.difficulty))),
    []
  );

  const filteredQuestions = useMemo(
    () =>
      dsaQueueQuestions.filter((q) => {
        const matchDay = dayFilter === "all" || q.day === Number(dayFilter);
        const matchDifficulty =
          difficultyFilter === "all" || q.difficulty === difficultyFilter;

        const text = `${q.ques} ${q.pattern} ${q.topicGroup} ${
          q.tags?.join(" ") ?? ""
        }`.toLowerCase();

        const matchSearch =
          searchTerm.trim() === "" ||
          text.includes(searchTerm.trim().toLowerCase());

        return matchDay && matchDifficulty && matchSearch;
      }),
    [dayFilter, difficultyFilter, searchTerm]
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
        py: { xs: 4, sm: 6 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box textAlign="center" mb={3}>
          <Typography
            variant="h4"
            fontWeight={700}
            color="#0d47a1"
            sx={{ fontSize: { xs: "1.9rem", sm: "2.3rem" } }}
          >
            🚇 DSA Queue — BFS, Deques & Simulation
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ mt: 1 }}
          >
            Practice queues, deques, BFS, sliding window & system design style problems.
          </Typography>
        </Box>

        {/* Filters */}
        <Box
          sx={{
            mb: 3,
            p: 2,
            borderRadius: 3,
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(25, 118, 210, 0.08)",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems={{ xs: "stretch", md: "center" }}
            justifyContent="space-between"
          >
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              flexWrap="wrap"
            >
              <FilterListIcon sx={{ color: "#1976d2" }} />
              <Typography variant="subtitle2" color="text.secondary">
                Filter by Day:
              </Typography>
              <ToggleButtonGroup
                size="small"
                exclusive
                value={dayFilter}
                onChange={(_, v) => v && setDayFilter(v)}
                sx={{ flexWrap: "wrap" }}
              >
                <ToggleButton value="all">All</ToggleButton>
                {uniqueDays.map((d) => (
                  <ToggleButton key={d} value={String(d)}>
                    Day {d}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Stack>

            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              flexWrap="wrap"
            >
              <Typography variant="subtitle2" color="text.secondary">
                Difficulty:
              </Typography>
              <ToggleButtonGroup
                size="small"
                exclusive
                value={difficultyFilter}
                onChange={(_, v) => v && setDifficultyFilter(v)}
              >
                <ToggleButton value="all">All</ToggleButton>
                {uniqueDifficulties.map((diff) => (
                  <ToggleButton key={diff} value={diff}>
                    {diff}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Stack>

            <TextField
              size="small"
              variant="outlined"
              label="Search (name / pattern / tag)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ minWidth: { xs: "100%", md: 260 } }}
            />
          </Stack>
        </Box>

        <Divider sx={{ mb: 3, borderColor: "rgba(25,118,210,0.15)" }} />

        {filteredQuestions.length === 0 && (
          <Box textAlign="center" mt={6}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No questions match your filters 🤔
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try resetting the filters or using a different keyword.
            </Typography>
          </Box>
        )}

        <Grid container spacing={3}>
          {filteredQuestions.map((q) => (
            <Grid item xs={12} sm={6} key={q.id}>
              <Card
                component={motion.div}
                whileHover={{
                  y: -6,
                  boxShadow: "0 12px 30px rgba(13, 71, 161, 0.25)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                elevation={3}
                sx={{
                  borderRadius: 3,
                  p: 2,
                  background: "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(25, 118, 210, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <CardContent sx={{ pb: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      mb: 1,
                      gap: 1,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="overline"
                        sx={{ color: "text.secondary" }}
                      >
                        Day {q.day} • {q.topicGroup}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "1rem", sm: "1.05rem" },
                        }}
                      >
                        {q.id}. {q.ques}
                      </Typography>
                    </Box>

                    <Stack spacing={0.5} alignItems="flex-end">
                      <Chip
                        label={q.difficulty}
                        size="small"
                        sx={{
                          bgcolor:
                            q.difficulty === "Easy"
                              ? "#e8f5e9"
                              : q.difficulty === "Medium"
                              ? "#fff8e1"
                              : "#ffebee",
                          color:
                            q.difficulty === "Easy"
                              ? "#2e7d32"
                              : q.difficulty === "Medium"
                              ? "#f9a825"
                              : "#c62828",
                          fontWeight: 600,
                        }}
                      />
                      <Chip
                        label={q.pattern}
                        size="small"
                        sx={{
                          bgcolor: "#e3f2fd",
                          color: "#0d47a1",
                          fontWeight: 500,
                          maxWidth: 180,
                        }}
                      />
                    </Stack>
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                  >
                    <LightbulbOutlinedIcon sx={{ fontSize: 18 }} /> Focus on:
                    {` ${q.pattern}`}
                  </Typography>

                  {q.tags && q.tags.length > 0 && (
                    <Box
                      sx={{
                        mt: 1,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.5,
                      }}
                    >
                      {q.tags.slice(0, 4).map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            fontSize: "0.7rem",
                            bgcolor: "rgba(144,202,249,0.25)",
                          }}
                        />
                      ))}
                    </Box>
                  )}

                  <Box
                    sx={{
                      display: "flex",
                      gap: 1.2,
                      mt: 2.2,
                      flexWrap: "wrap",
                    }}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      endIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
                      sx={{
                        textTransform: "none",
                        borderRadius: 999,
                        px: 2,
                      }}
                      href={q.quesLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solve on Site
                    </Button>

                    <Button
                      size="small"
                      variant={openSolution === q.id ? "contained" : "outlined"}
                      sx={{
                        textTransform: "none",
                        borderRadius: 999,
                        px: 2,
                      }}
                      onClick={() => toggleSolution(q.id)}
                    >
                      {openSolution === q.id
                        ? "Hide Solution"
                        : "View Solution"}
                    </Button>
                  </Box>

                  <Collapse in={openSolution === q.id}>
                    <Box
                      mt={2}
                      p={2}
                      sx={{
                        bgcolor: "#e8f5e9",
                        borderRadius: 2,
                        border: "1px solid #a5d6a7",
                        fontSize: "0.9rem",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ lineHeight: 1.5, whiteSpace: "pre-line" }}
                      >
                        {q.solution}
                      </Typography>
                    </Box>
                  </Collapse>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DsaQueue;
