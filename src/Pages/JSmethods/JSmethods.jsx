import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import FunctionsIcon from "@mui/icons-material/Functions";
import StorageIcon from "@mui/icons-material/Storage";
import StarIcon from "@mui/icons-material/Star";
import BuildIcon from "@mui/icons-material/Build";
import { useNavigate } from "react-router-dom";
import arrayImage from "../../assets/array_method.svg"
import objectImage from "../../assets/object_method.svg"
import stringImage from "../../assets/string_method.svg"
import advanceImage from "../../assets/advance_method.svg"
import importantImage from "../../assets/important_method.svg"

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1c1c1c", // dark grey
      paper: "#b0c4de", // pale blue
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
    },
  },
});

const methods = [
  {
    title: "Array Methods",
    description: "Learn essential array manipulation techniques.",
    icon: <FunctionsIcon fontSize="large" />,
    image: arrayImage
  },
  {
    title: "String Methods",
    description: "Master string operations and manipulations.",
    icon: <CodeIcon fontSize="large" />,
    image: stringImage
  },
  {
    title: "Object Methods",
    description: "Explore powerful object manipulation methods.",
    icon: <StorageIcon fontSize="large" />,
    image: objectImage
  },
  {
    title: "Important Methods",
    description: "Key JavaScript methods you must know.",
    icon: <StarIcon fontSize="large" />,
    image: importantImage
  },
  {
    title: "Advanced Methods",
    description: "Dive into advanced JavaScript methods and patterns.",
    icon: <BuildIcon fontSize="large" />,
    image: advanceImage
  },
];

const JSmethods = () => {
  const navigate = useNavigate();

  const handleNavigate = (level, type) => {
    // Example: /methods/array/advanced OR /polyfills/array/beginner
    navigate(`/methods/${type}/${level}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          minHeight: "100vh",
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <Typography variant="h3" gutterBottom>
          JavaScript Methods
        </Typography>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {methods.map((method, index) => (
            <FlipCard
              key={index}
              method={method}
              handleNavigate={handleNavigate}
            />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};

const FlipCard = ({ method, handleNavigate }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      style={{
        perspective: 1000,
        width: "100%",
        height: "350px",
      }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)} // works on mobile tap
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
          }}
        >
          <Card
            sx={{
              height: "100%",
              background: theme.palette.background.paper,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "1rem",
            }}
          >
            <CardMedia
              component="img"
              image={method.image}
              alt={method.title}
              loading="lazy"
              sx={{ height: 140, borderRadius: "8px" }}
            />
            <CardContent>
              {method.icon}
              <Typography variant="h6">{method.title}</Typography>
              <Typography variant="body2">{method.description}</Typography>
            </CardContent>
          </Card>
        </div>

        {/* Back Side */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            background: "#2a2a2a",
            padding: "1rem",
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "#4caf50", width: "70%" }}
            onClick={() =>
              handleNavigate(
                "beginner",
                method.title.toLowerCase().split(" ")[0],
                
              )
            }
          >
            Beginner
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#ff9800", width: "70%" }}
            onClick={() =>
              handleNavigate(
                "intermediate",
                method.title.toLowerCase().split(" ")[0],
                
              )
            }
          >
            Intermediate
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#f44336", width: "70%" }}
            onClick={() =>
              handleNavigate(
                "advanced",
                method.title.toLowerCase().split(" ")[0],
                
              )
            }
          >
            Advanced
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default JSmethods;
