import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  { title: "Array Polyfills", type: "array" },
  { title: "String Polyfills", type: "string" },
  { title: "Object Polyfills", type: "object" },
  { title: "Advanced Polyfills", type: "advanced" },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const Polyfillpage = () => {
  const navigate = useNavigate();

  const handleNavigate = (level, type) => {
    navigate(`/polyfills/${type}/${level}`);
  };

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        minHeight: "100vh",
        bgcolor: "linear-gradient(135deg, #dfefff, #b5dfff)",
        color: "#00334d",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 3, md: 5 },
          fontWeight: "bold",
          textAlign: "center",
          fontSize: { xs: "1.8rem", md: "2.2rem" },
          color: "#002244",
        }}
        component={motion.div}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🌊 Practice Polyfills
      </Typography>

      {/* Categories Grid */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ width: "100%", maxWidth: "1200px" }}
      >
        {categories.map((cat, i) => (
          <Grid item xs={12} sm={6} md={4} key={cat.type}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: i * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card
                sx={{
                  bgcolor: "#f5fbff",
                  color: "#00334d",
                  borderRadius: "20px",
                  p: 2,
                  textAlign: "center",
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
                  minHeight: { xs: "200px", md: "220px" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: "1px solid #b0d4f1",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 3,
                      fontWeight: "600",
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                    }}
                  >
                    {cat.title}
                  </Typography>

                  {/* Beginner Button */}
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      mr: 1,
                      mb: { xs: 1, md: 0 },
                      bgcolor: "#4da6ff",
                      fontSize: { xs: "0.75rem", md: "0.85rem" },
                      px: { xs: 2, md: 3 },
                      borderRadius: "12px",
                      textTransform: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "#3399ff",
                        transform: "scale(1.05)",
                      },
                    }}
                    onClick={() => handleNavigate("beginner", cat.type)}
                  >
                    Beginner
                  </Button>

                  {/* Intermediate Button */}
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      color: "#00334d",
                      borderColor: "#66c2ff",
                      fontSize: { xs: "0.75rem", md: "0.85rem" },
                      px: { xs: 2, md: 3 },
                      borderRadius: "12px",
                      textTransform: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "#3399ff",
                        transform: "scale(1.05)",
                        backgroundColor: "rgba(102,194,255,0.1)",
                      },
                    }}
                    onClick={() => handleNavigate("intermediate", cat.type)}
                  >
                    Intermediate
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Polyfillpage;
