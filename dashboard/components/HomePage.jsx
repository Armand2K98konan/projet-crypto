import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Typography from '@mui/material/Typography';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// Composant Sitemark simplifié
const Sitemark = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
      <Box 
        component="img"
        src="/src/assets/IMG-20250320-WA0000[1].jpg"
        alt="SANGBE GROUPE EXCHANGE Logo"
        sx={{ height: 40, mr: 1 , borderRadius: '50%' }}
      />
      <Typography
        variant="h6"
        noWrap
        component={RouterLink}
        to="/"
        sx={{
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.1rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        SANGBE GROUPE EXCHANGE
      </Typography>
    </Box>
  );
};

// Composant ColorModeIconDropdown simplifié
const ColorModeIconDropdown = ({ size = "small" }) => {
  const [mode, setMode] = React.useState('light');
  
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    // Ici vous pourriez implémenter votre propre logique de changement de thème
  };

  return (
    <IconButton 
      onClick={toggleColorMode} 
      color="inherit"
      size={size}
    >
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function HomePage() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Sitemark />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button component={RouterLink} to="/" variant="text" color="info" size="small">
                Accueil
              </Button>
              <Button component={RouterLink} to="/services" variant="text" color="info" size="small">
                Services
              </Button>
              <Button component={RouterLink} to="/about" variant="text" color="info" size="small">
                À propos
              </Button>
              <Button component={RouterLink} to="/pricing" variant="text" color="info" size="small">
                Tarifs
              </Button>
              <Button component={RouterLink} to="/faq" variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                FAQ
              </Button>
              <Button component={RouterLink} to="/contact" variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                Contact
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Button 
              component={RouterLink} 
              to="/connexion" 
              color="primary" 
              variant="text" 
              size="small"
            >
              Connexion
            </Button>
            <Button 
              component={RouterLink} 
              to="/inscription" 
              color="primary" 
              variant="contained" 
              size="small"
            >
              Inscription
            </Button>
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem component={RouterLink} to="/">Accueil</MenuItem>
                <MenuItem component={RouterLink} to="#services">Services</MenuItem>
                <MenuItem component={RouterLink} to="/about">À propos</MenuItem>
                <MenuItem component={RouterLink} to="/pricing">Tarifs</MenuItem>
                <MenuItem component={RouterLink} to="/faq">FAQ</MenuItem>
                <MenuItem component={RouterLink} to="/contact">Contact</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button 
                    component={RouterLink} 
                    to="/inscription" 
                    color="primary" 
                    variant="contained" 
                    fullWidth
                  >
                    Inscription
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button 
                    component={RouterLink} 
                    to="/connexion" 
                    color="primary" 
                    variant="outlined" 
                    fullWidth
                  >
                    Connexion
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}