import React, { useState } from 'react';
import { LoginListProps } from '../../types/interfaces';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
} from '@mui/material';



const LoginForm: React.FC<LoginListProps> = ({ action }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setError('');
    action({ email, password }); // Call the passed 'action' function with email and password
  };

  return (
    <Container maxWidth="xs">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mt: 8,
        }}
      >
        <Typography variant="h4" component="h1" align="center">
          Login
        </Typography>
  
        {error && <Alert severity="error">{error}</Alert>}
  
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
        />
  
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />
  
        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginForm;
