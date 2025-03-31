
import React from 'react';
import { Box } from '@mui/material';

const Image = () => {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100%' 
        }}
      >
        <Box
          component="img"
          sx={{
            maxWidth: '100%',
            height: 'auto',
            maxHeight: 500,
            objectFit: 'contain',
            animation: 'float 3s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-20px)' }
            }
          }}
          alt="Bitcoin Illustration"
          src="src/assets/minimalistic-still-life-assortment-with-cryptocurrency (1).jpg"
        />
      </Box>
    );
  };
  export default Image;