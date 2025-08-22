import React from 'react';
import { Button as MuiButton } from '@mui/material'; // Use Material-UI Button
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import an arrow icon
import { useNavigate } from 'react-router-dom';

const ProblemSolvingButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to the desired page
        navigate('/problem-solving-questions');
    };

    return (
        <MuiButton
            variant="contained" // Or "outlined", "text" as per your design
            color="secondary" // Or "primary", "success", etc.
            onClick={handleClick}
            endIcon={<ArrowForwardIcon />} // Icon at the end of the button
            sx={{
                // Custom styles for responsiveness or visual appeal
                fontSize: { xs: '0.8rem', sm: '1rem' }, // Responsive font size
                padding: { xs: '8px 12px', sm: '10px 16px' }, // Responsive padding
                '& .MuiButton-endIcon': { // Style for the icon
                    marginLeft: { xs: '4px', sm: '8px' }, // Responsive margin for icon
                },
                textTransform: 'none', // Keep text as is (not all caps)
                fontWeight: 'bold',
            }}
        >
            Problem Solving Questions
        </MuiButton>
    );
};

export default ProblemSolvingButton;
