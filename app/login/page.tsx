import { Container } from '@mui/material';
import LoginForm from './login-form';

export default async function LoginPage() {
  return (
    <Container maxWidth="sm">
      <LoginForm />
    </Container>
  );
}
