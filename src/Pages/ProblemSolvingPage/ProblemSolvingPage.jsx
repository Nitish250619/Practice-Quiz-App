import React from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProblemSolvingPage = () => {
  const navigate = useNavigate();

  const problems = [
    { id: 1, title: 'Problem Solving Set 1', key: 'problem_solving_set_1' },
    { id: 2, title: 'Problem Solving Set 2', key: 'problem_solving_set_2' },
    { id: 3, title: 'Problem Solving Set 3', key: 'problem_solving_set_3' },
    { id: 4, title: 'Problem Solving Set 4', key: 'problem_solving_set_4' },
  ];

  return (
    <Box sx={{ backgroundColor: '#f0f4f8', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            gutterBottom
            sx={{ fontSize: { xs: '1.8rem', sm: '2.5rem' } }}
          >
            Welcome to Problem Solving Questions!
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Dive into sets of coding problems and improve your problem-solving skills. Pick a set and get started!
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {problems.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Card
                elevation={4}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: 3,
                  py: 2,
                  borderRadius: 3,
                  backgroundColor: '#ffffff', // Card background
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    fontWeight="600"
                    color="primary.main"
                    sx={{ textAlign: { xs: 'center', sm: 'left' }, mb: { xs: 1, sm: 0 } }}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: { xs: 'center', sm: 'flex-end' } }}>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      borderRadius: 20,
                      px: 3,
                      py: 1,
                      textTransform: 'none',
                      fontWeight: 'bold',
                    }}
                    onClick={() => navigate(`/questions/${item.key}`)}
                  >
                    Proceed
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProblemSolvingPage;
