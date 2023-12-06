// src/pages/FirstPage/FirstPage.tsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const FirstPage: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = () => {
    // Basic validation
    if (!name || !phoneNumber || !email) {
      setError('Please fill in all fields');
      return;
    }

    // Save user data to local storage or perform any other necessary actions
    // For demonstration, storing in local storage
    localStorage.setItem('userData', JSON.stringify({ name, phoneNumber, email }));

    // Redirect to the second page
    history.push('/second');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          First Page
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit();
          }}
          sx={{
            mt: 1,
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phoneNumber"
            label="Phone Number"
            name="phoneNumber"
            autoComplete="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Continue to Second Page
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default FirstPage;
