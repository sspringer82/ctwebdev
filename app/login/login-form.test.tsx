import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoginForm from './login-form';

describe('Login Form', () => {
  it('should render', () => {
    render(<LoginForm />);
  });
});
