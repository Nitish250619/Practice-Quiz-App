import React from 'react';
import { Button as MuiButton } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@mui/system';

const popAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
`;

const ExploreProblemSolving = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/explore-problem-solving');
  };

  return (
    <MuiButton
      variant="contained"
      color="primary"
      onClick={handleClick}
      endIcon={<ExploreIcon />}
      sx={{
        backgroundColor: '#4c5bafff', // custom green theme
        '&:hover': {
          backgroundColor: '#383e8eff',
          animation: `${popAnimation} 0.4s ease-in-out`,
        },
        fontSize: { xs: '0.8rem', sm: '1rem' },
        padding: { xs: '8px 12px', sm: '10px 16px' },
        '& .MuiButton-endIcon': {
          marginLeft: { xs: '4px', sm: '8px' },
        },
        textTransform: 'none',
        fontWeight: 'bold',
        borderRadius: '12px',
        transition: 'all 0.3s ease-in-out',
        boxShadow: '0 4px 10px rgba(0,0,0,0.6)',
      }}
    >
      Explore Problem Solving
    </MuiButton>
  );
};

export default ExploreProblemSolving