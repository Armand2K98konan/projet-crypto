import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardMedia, 
  Container, 
  Grid,
  useMediaQuery,
  useTheme
  
} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

const Acceuil = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Partie texte à gauche */}
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
              Bienvenue sur SANGBE GROUPE EXCHANGE
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              Votre platforme de vente,d'échange et d'achat de cryptomonnaie .
              Nous travaillons avec passion pour offrir des services de qualité et 
              accompagner nos clients dans tous leurs demarche de cryptomonnaie.
            </Typography>
            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
           
              <Button 
              component={RouterLink}
              to="/connexion"
              variant="contained" 
              color="primary"
               size="large">
                Se connecter 
              </Button>
          
              <Button
              component={RouterLink}
              to="/achat"
               variant="outlined" 
               color="primary"
                size="large">
                Acheter
              </Button>
            </Box>
          </Box>
        </Grid>
        
        {/* Image à droite */}
        <Grid item xs={12} md={6}>
          <Card elevation={isMobile ? 2 : 5}>
            <CardMedia
              component="img"
              height="500"
              image="/src/assets/minimalistic-still-life-assortment-with-cryptocurrency.jpg"
              alt=""
              sx={{ objectFit: 'cover' }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Acceuil;