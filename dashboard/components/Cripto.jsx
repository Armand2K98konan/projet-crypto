import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Button, 
  Container 
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {Link as RouterLink} from 'react-router-dom';

import { 
  CurrencyBitcoin, 
  PaymentOutlined, 
  PhoneAndroidOutlined 
} from '@mui/icons-material';

const Crypto = () => {
  return (
    <Container maxWidth="lg">
      <Typography 
                variant="h4" 
                component="h3" 
                align="center" 
                gutterBottom 
                sx={{ 
                  fontWeight: 'bold', 
                  mb: 6, 
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '4px',
                    backgroundColor: '#f7931a',
                    borderRadius: '2px'
                  }
                }}
              >
                Achat et Tarifs
              </Typography>
      <Grid container spacing={4} alignItems="center">
        {/* Section de description à gauche */}
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              backgroundColor: '#f4f4f4',
              borderRadius: 2
            }}
          >
            <Typography 
              variant="h4" 
              color="primary" 
              gutterBottom 
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <CurrencyBitcoin sx={{ mr: 2, fontSize: 40 }} />
              Bitcoin : Acheter en toute securité
            </Typography>
            
            <Typography variant="body1" paragraph>
              Le Bitcoin est une cryptomonnaie révolutionnaire qui permet des transactions 
              sécurisées et décentralisées à travers le monde, sans intermediaires bancaires.
            </Typography>
            
            <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
              Méthodes de Paiement Mobile
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                variant="contained" 
                color="primary" 
                startIcon={<PhoneAndroidOutlined />}
              >
                Orange Money
              </Button>
              <Button 
                variant="contained" 
                color="secondary" 
                startIcon={<PhoneAndroidOutlined />}
              >
                MTN Money
              </Button>
              <Button 
                variant="contained" 
                color="success" 
                startIcon={<PhoneAndroidOutlined />}
              >
                Wave
              </Button>
              <Button 
                variant="contained" 
                color="success" 
                startIcon={<PhoneAndroidOutlined />}
              >
                Moov Money
              </Button>
            </Box>
          </Paper>
        </Grid>
        
        {/* Section image à droite */}
        <Grid item xs={12} md={6}>
          <Box 
            sx={{ 
              width: '100%', 
              height: 350, 
              backgroundColor: '#e0e0e0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 2,
              overflow: 'hidden'
            }}
          >
            <img 
              src="src/assets/minimalistic-still-life-assortment-with-cryptocurrency (1).jpg" 
              alt="Paiement Crypto" 
              style={{ 
                width: '100%', 
                height: 350, 
                objectFit: 'cover' 
              }}
            />
          </Box>
        </Grid>
        <Button
           component={RouterLink}
           to="/achat" 
            variant="contained"
             endIcon={<SendIcon />}
             sx={{
              mt:5,
              marginLeft:30
             }}>
            Acheter maintenant
          </Button>
          <Button
          component={RouterLink}
          to="/echanger" 
            variant="contained"
             endIcon={<SendIcon />}
             sx={{
              mt:5,
              marginLeft:30
             }}>
            Echanger
          </Button>
      </Grid>
        
    </Container>
  );
};

export default Crypto;