'use client';

import { useActionState } from 'react';
import { authenticate } from '@/app/actions/auth';

import {
  Box,
  TextField,
  Button,
  Alert,
  Typography,
  InputAdornment,
} from '@mui/material';
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Error as ErrorIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <form action={formAction}>
      <Box
        sx={{
          flex: 1,
          borderRadius: 1,
          backgroundColor: 'grey.50',
          px: 6,
          pb: 4,
          pt: 8,
        }}
      >
        <Typography variant="h4" mb={3}>
          Please log in to continue.
        </Typography>
        <Box>
          <TextField
            id="email"
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="password"
            label="Password"
            name="password"
            type="password"
            placeholder="Enter password"
            required
            fullWidth
            margin="normal"
            inputProps={{ minLength: 6 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isPending}
            endIcon={<ArrowForwardIcon />}
            sx={{ mt: 2 }}
          >
            Log in
          </Button>
          {errorMessage && (
            <Alert
              severity="error"
              icon={<ErrorIcon />}
              sx={{ mt: 2 }}
              aria-live="polite"
              aria-atomic="true"
            >
              {errorMessage}
            </Alert>
          )}
        </Box>
      </Box>
    </form>
  );
}
