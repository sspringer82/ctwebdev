'use client';

import { TextField, Button, Typography } from '@mui/material';
import { useFormState } from 'react-dom';
import { authenticate } from '../lib/actions';

export default function LoginForm() {
  const [code, action] = useFormState(authenticate, undefined);

  return (
    <form
      action={action}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '20px',
      }}
    >
      <Typography variant="h4" component="h1">
        Login
      </Typography>
      {code === 'CredentialSignin' && (
        <div style={{ color: 'red', fontWeight: 'bold' }}>Ungültige Daten</div>
      )}
      <TextField label="Email" variant="outlined" type="email" name="email" />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        name="password"
      />
      <Button variant="outlined" color="primary" type="submit">
        Login
      </Button>
    </form>
  );
}
