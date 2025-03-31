import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Card,
  CardContent,
  Grid,
  Divider,
  IconButton,
  Paper,
  Alert,
  CircularProgress,
  InputAdornment
} from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// Données des cryptomonnaies (à remplacer par des données réelles de votre API)
const cryptoData = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', rate: 1, icon: '₿' },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', rate: 17.5, icon: 'Ξ' },
  { id: 'tether', name: 'Tether', symbol: 'USDT', rate: 40500, icon: '₮' },
  { id: 'binancecoin', name: 'Binance Coin', symbol: 'BNB', rate: 110, icon: 'BNB' },
  { id: 'solana', name: 'Solana', symbol: 'SOL', rate: 520, icon: 'SOL' },
  { id: 'cardano', name: 'Cardano', symbol: 'ADA', rate: 30000, icon: 'ADA' },
  { id: 'ripple', name: 'XRP', symbol: 'XRP', rate: 60000, icon: 'XRP' },
];

const Echanger = () => {
  const [fromCrypto, setFromCrypto] = useState('bitcoin');
  const [toCrypto, setToCrypto] = useState('ethereum');
  const [amount, setAmount] = useState('');
  const [estimatedAmount, setEstimatedAmount] = useState('');
  const [exchangeRate, setExchangeRate] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Simuler l'obtention des taux d'échange (à remplacer par une API réelle)
  useEffect(() => {
    if (fromCrypto && toCrypto && amount) {
      setLoading(true);
      // Simuler un appel API
      setTimeout(() => {
        try {
          const fromRate = cryptoData.find(crypto => crypto.id === fromCrypto).rate;
          const toRate = cryptoData.find(crypto => crypto.id === toCrypto).rate;
          const rate = toRate / fromRate;
          
          setExchangeRate(rate);
          setEstimatedAmount((parseFloat(amount) * rate).toFixed(8));
          setError('');
        } catch (err) {
          setError('Erreur lors du calcul du taux d\'échange');
        } finally {
          setLoading(false);
        }
      }, 500);
    } else {
      setEstimatedAmount('');
      setExchangeRate(0);
    }
  }, [fromCrypto, toCrypto, amount]);

  const handleSwapCurrencies = () => {
    const temp = fromCrypto;
    setFromCrypto(toCrypto);
    setToCrypto(temp);
    setAmount('');
    setEstimatedAmount('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) {
      setError('Veuillez entrer un montant valide');
      return;
    }
    
    setLoading(true);
    // Simuler un traitement d'échange
    setTimeout(() => {
      alert(`Échange initié: ${amount} ${cryptoData.find(c => c.id === fromCrypto).symbol} vers ${cryptoData.find(c => c.id === toCrypto).symbol}`);
      setLoading(false);
    }, 1500);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          Échange de Cryptomonnaies
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Sélection de la cryptomonnaie source */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                Vous envoyez
              </Typography>
              <TextField
                select
                fullWidth
                value={fromCrypto}
                onChange={(e) => setFromCrypto(e.target.value)}
                variant="outlined"
                sx={{ mb: 2 }}
              >
                {cryptoData.map((crypto) => (
                  <MenuItem key={crypto.id} value={crypto.id} disabled={crypto.id === toCrypto}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography sx={{ mr: 1, fontSize: '1.2rem' }}>{crypto.icon}</Typography>
                      {crypto.name} ({crypto.symbol})
                    </Box>
                  </MenuItem>
                ))}
              </TextField>
              
              <TextField
                fullWidth
                label="Montant"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                variant="outlined"
                placeholder="0.00"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {cryptoData.find(c => c.id === fromCrypto)?.symbol}
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            
            {/* Icône de conversion */}
            <Grid item xs={12} sx={{ textAlign: 'center', my: -1 }}>
              <IconButton 
                onClick={handleSwapCurrencies}
                sx={{ 
                  bgcolor: 'primary.main', 
                  color: 'white',
                  '&:hover': { bgcolor: 'primary.dark' },
                  height: 40, 
                  width: 40
                }}
              >
                <SwapVertIcon />
              </IconButton>
            </Grid>
            
            {/* Sélection de la cryptomonnaie de destination */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                Vous recevez
              </Typography>
              <TextField
                select
                fullWidth
                value={toCrypto}
                onChange={(e) => setToCrypto(e.target.value)}
                variant="outlined"
                sx={{ mb: 2 }}
              >
                {cryptoData.map((crypto) => (
                  <MenuItem key={crypto.id} value={crypto.id} disabled={crypto.id === fromCrypto}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography sx={{ mr: 1, fontSize: '1.2rem' }}>{crypto.icon}</Typography>
                      {crypto.name} ({crypto.symbol})
                    </Box>
                  </MenuItem>
                ))}
              </TextField>
              
              <TextField
                fullWidth
                label="Montant estimé"
                value={estimatedAmount}
                variant="outlined"
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      {cryptoData.find(c => c.id === toCrypto)?.symbol}
                    </InputAdornment>
                  ),
                  startAdornment: loading ? (
                    <InputAdornment position="start">
                      <CircularProgress size={20} />
                    </InputAdornment>
                  ) : null
                }}
              />
            </Grid>
            
            {/* Taux d'échange */}
            {exchangeRate > 0 && (
              <Grid item xs={12}>
                <Box sx={{ bgcolor: 'action.hover', p: 1.5, borderRadius: 1, mt: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Taux d'échange: 1 {cryptoData.find(c => c.id === fromCrypto)?.symbol} = {exchangeRate.toFixed(6)} {cryptoData.find(c => c.id === toCrypto)?.symbol}
                  </Typography>
                </Box>
              </Grid>
            )}
            
            {/* Messages d'erreur */}
            {error && (
              <Grid item xs={12}>
                <Alert severity="error" sx={{ mt: 1 }}>{error}</Alert>
              </Grid>
            )}
            
            {/* Bouton de soumission */}
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                disabled={!amount || loading || parseFloat(amount) <= 0}
                sx={{ 
                  py: 1.5,
                  bgcolor: 'primary.main',
                  fontWeight: 'bold',
                  '&:hover': { bgcolor: 'primary.dark' }
                }}
                startIcon={<SyncAltIcon />}
              >
                {loading ? 'Traitement en cours...' : 'Échanger maintenant'}
              </Button>
            </Grid>
          </Grid>
        </form>
        
        <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
            <InfoOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
            Les taux d'échange sont indicatifs et peuvent varier au moment de la transaction.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Echanger;