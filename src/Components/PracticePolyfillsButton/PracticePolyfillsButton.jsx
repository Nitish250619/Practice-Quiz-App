import React from 'react';
import { Button as MuiButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const PracticePolyfillsButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/practice-polyfills');
  };

  return (
    <MuiButton
      variant="contained"
      color="secondary"
      onClick={handleClick}
      endIcon={<ArrowForwardIcon />}
      sx={{
        fontSize: { xs: '0.8rem', sm: '1rem' },
        padding: { xs: '8px 12px', sm: '10px 16px' },
        '& .MuiButton-endIcon': {
          marginLeft: { xs: '4px', sm: '8px' },
        },
        textTransform: 'none',
        fontWeight: 'bold',
      }}
    >
      Practice Polyfills
    </MuiButton>
  );
};

export default PracticePolyfillsButton;
