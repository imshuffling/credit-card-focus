import './App.css';
import { TextField, Grid } from '@mui/material';
import { useRef, useEffect, useState } from 'react';

export default function App() {
  const cardNumberRef = useRef(null);
  const expiryDateRef = useRef(null);
  const securityCodeRef = useRef(null);

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  useEffect(() => {
    if (cardNumber.length === 16) {
      expiryDateRef.current.focus();
    }
  }, [cardNumber]);

  useEffect(() => {
    if (expiryDate.length === 5) {
      securityCodeRef.current.focus();
    }
  }, [expiryDate]);

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    setCardNumber(value);
  };

  const handleExpiryDateChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    if (value.length <= 4) {
      // Format the expiry date as MM/YY
      setExpiryDate(value.replace(/(\d{2})(\d{0,2})/, '$1/$2'));
    }
  };

  const handleSecurityCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    setSecurityCode(value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          label='Card Number'
          variant='outlined'
          fullWidth
          value={cardNumber}
          onChange={handleCardNumberChange}
          inputProps={{ maxLength: 16 }}
          inputRef={cardNumberRef}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label='Expiry Date (MM/YY)'
          variant='outlined'
          fullWidth
          value={expiryDate}
          onChange={handleExpiryDateChange}
          inputProps={{ maxLength: 5 }}
          inputRef={expiryDateRef}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label='Security Code'
          variant='outlined'
          fullWidth
          value={securityCode}
          onChange={handleSecurityCodeChange}
          inputProps={{ maxLength: 3 }}
          inputRef={securityCodeRef}
        />
      </Grid>
    </Grid>
  );
}
