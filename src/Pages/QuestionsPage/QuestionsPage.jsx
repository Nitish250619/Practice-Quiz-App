import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  IconButton,
  Collapse,
  Box,
  Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { questionSets } from '../../data/questionsData';

const QuestionsPage = () => {
  const { topic } = useParams();
  const questions = questionSets[topic] || [];
  const [openStates, setOpenStates] = useState({});

  const toggleAnswer = (id) => {
    setOpenStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Box
      sx={{
        backgroundColor: '#e6f2ff', // Pale blue background
        minHeight: '100vh',
        py: 8,
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{
            color: '#1565c0', // Deep blue text
            fontWeight: 'bold',
            mb: 6,
            letterSpacing: 1,
          }}
        >
          {topic.replace(/([A-Z])/g, ' $1').trim()} Questions
        </Typography>

        {questions.map((item) => (
          <Paper
            key={item.id}
            elevation={4}
            sx={{
              backgroundColor: '#ffffff',
              borderLeft: '6px solid #42a5f5', // Blue accent
              borderRadius: 3,
              p: 3,
              mb: 4,
              boxShadow: '0 4px 20px rgba(66, 165, 245, 0.2)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.01)',
              },
            }}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" sx={{ fontWeight: 500, color: '#333' }}>
                {item.question}
              </Typography>
              <IconButton
                onClick={() => toggleAnswer(item.id)}
                sx={{
                  color: '#1565c0', // Icon blue
                  transform: openStates[item.id] ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <ExpandMoreIcon />
              </IconButton>
            </Box>

            <Collapse in={openStates[item.id]} timeout="auto" unmountOnExit>
              <Box mt={2}>
                <SyntaxHighlighter
                  language="javascript"
                  style={materialDark}
                  customStyle={{
                    backgroundColor: '#1e1e2f',
                    padding: '1rem',
                    borderRadius: '10px',
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                  }}
                >
                  {item.answer}
                </SyntaxHighlighter>
              </Box>
            </Collapse>
          </Paper>
        ))}
      </Container>
    </Box>
  );
};

export default QuestionsPage;
