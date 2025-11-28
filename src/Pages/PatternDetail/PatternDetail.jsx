import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Chip,
  Stack,
  Card,
  CardContent,
  Divider,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { patternData } from "../../data/patternData.js";

const PatternDetail = () => {
  const { name } = useParams(); // slug like "two-pointers"
  const navigate = useNavigate();

  const pattern = patternData.find((p) => p.slug === name);

  const handleBack = () => {
    navigate(-1);
  };

  if (!pattern) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
          px: 2,
        }}
      >
        <Card
          sx={{
            maxWidth: 500,
            width: "100%",
            p: 3,
            borderRadius: 3,
            boxShadow: 4,
          }}
        >
          <Typography variant="h5" fontWeight={700} color="#0d47a1" gutterBottom>
            Pattern not found 🧩
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Looks like this pattern doesn’t exist in our learning data yet.
          </Typography>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={handleBack}
            sx={{ textTransform: "none", borderRadius: 2 }}
          >
            Go Back
          </Button>
        </Card>
      </Box>
    );
  }

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
          maxWidth: "1100px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* Back button */}
        <Button
          onClick={handleBack}
          startIcon={<ArrowBackIcon />}
          sx={{
            mb: 2,
            textTransform: "none",
            borderRadius: 999,
          }}
        >
          Back
        </Button>

        {/* Main Card */}
        <Card
          elevation={5}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            background: "rgba(255,255,255,0.98)",
            border: "1px solid rgba(25,118,210,0.08)",
          }}
        >
          <Box
            sx={{
              px: { xs: 3, sm: 4 },
              pt: { xs: 3, sm: 4 },
              pb: 2,
              background:
                "linear-gradient(135deg, rgba(25,118,210,0.12), rgba(144,202,249,0.25))",
            }}
          >
            <Typography
              variant="overline"
              sx={{ letterSpacing: 1, color: "#0d47a1" }}
            >
              DSA PATTERN
            </Typography>

            <Typography
              variant="h4"
              fontWeight={700}
              sx={{ mt: 0.5, color: "#0d47a1", fontSize: { xs: "1.8rem", sm: "2.1rem" } }}
            >
              {pattern.name}
            </Typography>

            {pattern.headline && (
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ mt: 1 }}
              >
                {pattern.headline}
              </Typography>
            )}

            <Stack
              direction="row"
              spacing={1}
              mt={2}
              flexWrap="wrap"
              alignItems="center"
            >
              {pattern.level && (
                <Chip
                  label={pattern.level}
                  size="small"
                  sx={{
                    bgcolor: "#e3f2fd",
                    color: "#0d47a1",
                    fontWeight: 600,
                  }}
                />
              )}

              {Array.isArray(pattern.category) &&
                pattern.category.map((cat) => (
                  <Chip
                    key={cat}
                    label={cat}
                    size="small"
                    sx={{ bgcolor: "#f5f5f5", fontWeight: 500 }}
                  />
                ))}

              {pattern.masteryLevel && (
                <Chip
                  label={`Importance: ${pattern.masteryLevel}`}
                  size="small"
                  sx={{ bgcolor: "#fff8e1", fontWeight: 500 }}
                />
              )}
            </Stack>
          </Box>

          <CardContent sx={{ px: { xs: 3, sm: 4 }, pb: 3 }}>
            {/* Why it matters + simple idea */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              mt={2}
            >
              <Box flex={1}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Why this pattern matters in interviews 💼
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {pattern.whyItMatters}
                </Typography>
              </Box>

              {pattern.ideaInSimpleWords && (
                <Box
                  flex={1}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: "#e3f2fd",
                    border: "1px solid rgba(25,118,210,0.2)",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 700, mb: 0.5 }}
                  >
                    Idea in simple words 🧠
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {pattern.ideaInSimpleWords}
                  </Typography>
                </Box>
              )}
            </Stack>

            {/* When to use */}
            {Array.isArray(pattern.whenToUse) && pattern.whenToUse.length > 0 && (
              <Box mt={3}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  When should I think of this pattern? 🔍
                </Typography>
                <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                  {pattern.whenToUse.map((item, idx) => (
                    <li key={idx}>
                      <Typography variant="body2" color="text.secondary">
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            )}

            {/* Flowchart-style steps */}
            {Array.isArray(pattern.flowchartSteps) &&
              pattern.flowchartSteps.length > 0 && (
                <Box mt={3}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Flow of the pattern (mental flowchart) 🧭
                  </Typography>
                  <Box
                    sx={{
                      borderRadius: 2,
                      border: "1px dashed rgba(25,118,210,0.4)",
                      p: 2,
                      bgcolor: "#fafafa",
                    }}
                  >
                    {pattern.flowchartSteps.map((step, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          mb: idx === pattern.flowchartSteps.length - 1 ? 0 : 1,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 600,
                            minWidth: "24px",
                          }}
                        >
                          {idx + 1}.
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ ml: 0.5 }}
                        >
                          {step}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}

            {/* Mini Example */}
            {pattern.miniExample && (
              <Box mt={3}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Mini Example ✏️
                </Typography>
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    borderColor: "rgba(25,118,210,0.2)",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 700, mb: 1 }}
                    >
                      {pattern.miniExample.title}
                    </Typography>
                    {pattern.miniExample.input && (
                      <Typography
                        variant="body2"
                        sx={{ mb: 0.5 }}
                      >
                        <strong>Input:</strong> {pattern.miniExample.input}
                      </Typography>
                    )}
                    {pattern.miniExample.thinking && (
                      <Typography
                        variant="body2"
                        sx={{ mb: 0.5 }}
                        color="text.secondary"
                      >
                        <strong>Thinking:</strong> {pattern.miniExample.thinking}
                      </Typography>
                    )}
                    {pattern.miniExample.output && (
                      <Typography variant="body2">
                        <strong>Output:</strong> {pattern.miniExample.output}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Box>
            )}

            {/* Pseudo-code */}
            {pattern.pseudoCode && (
              <Box mt={3}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Pseudo-code / Template 🧩
                </Typography>
                <Box
                  component="pre"
                  sx={{
                    mt: 1,
                    p: 2,
                    borderRadius: 2,
                    bgcolor: "#0d1117",
                    color: "#e6edf3",
                    fontSize: "0.85rem",
                    overflowX: "auto",
                    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                  }}
                >
{pattern.pseudoCode}
                </Box>
              </Box>
            )}

            <Divider sx={{ my: 3 }} />

            {/* Mistakes & tips */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
            >
              {Array.isArray(pattern.commonMistakes) &&
                pattern.commonMistakes.length > 0 && (
                  <Box flex={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      gutterBottom
                    >
                      Common mistakes ❌
                    </Typography>
                    <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                      {pattern.commonMistakes.map((m, idx) => (
                        <li key={idx}>
                          <Typography variant="body2" color="text.secondary">
                            {m}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                )}

              {Array.isArray(pattern.tipsToRemember) &&
                pattern.tipsToRemember.length > 0 && (
                  <Box flex={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      gutterBottom
                    >
                      Tips to remember 💡
                    </Typography>
                    <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                      {pattern.tipsToRemember.map((t, idx) => (
                        <li key={idx}>
                          <Typography variant="body2" color="text.secondary">
                            {t}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                )}
            </Stack>

            {/* Related patterns */}
            {Array.isArray(pattern.relatedPatterns) &&
              pattern.relatedPatterns.length > 0 && (
                <Box mt={3}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Related patterns 🔗
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {pattern.relatedPatterns.map((rp) => (
                      <Chip
                        key={rp}
                        label={rp}
                        size="small"
                        sx={{
                          bgcolor: "#f5f5f5",
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              )}

            {/* Videos */}
            {Array.isArray(pattern.watchVideos) &&
              pattern.watchVideos.length > 0 && (
                <Box mt={4}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Learn with videos 🎥
                  </Typography>
                  <Stack direction="row" spacing={1.5} flexWrap="wrap">
                    {pattern.watchVideos.map((v) => (
                      <Button
                        key={v.url}
                        variant="outlined"
                        startIcon={<PlayCircleOutlineIcon />}
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          textTransform: "none",
                          borderRadius: 999,
                          mb: 1,
                        }}
                      >
                        {v.title}
                      </Button>
                    ))}
                  </Stack>
                </Box>
              )}
          </CardContent>
        </Card>

        {/* Placeholder for pattern-based questions later */}
        <Box mt={3} mb={1}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            📌 Soon: You’ll see questions filtered by <strong>{pattern.name}</strong> here 🚀
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PatternDetail;
