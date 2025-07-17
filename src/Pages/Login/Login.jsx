import React, { useState } from 'react';
import {
  Background, FormCard, LogoWrapper, Title, Label,
  Subtitle, InputField, FieldGroup, PasswordWrapper,
  PasswordLabelRow, ForgotLink, SubmitButton
} from './Login.Styles';

import { loginUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');  // Use email instead of username
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({ email, password });
      localStorage.setItem('token', data.access);        // Save access token
      localStorage.setItem('refresh', data.refresh);     // Optional: save refresh token
      navigate('/app');                                  // Go to dashboard layout
    } catch (err) {
      alert(err.response?.data?.detail || 'Login failed!');
    }
  };

  return (
    <Background>
      <FormCard>
        <LogoWrapper>
          {/* SVG logo */}
          <p>Logo</p>
        </LogoWrapper>

        <Title>Welcome back!</Title>
        <Subtitle>Log in to your account</Subtitle>

        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Label htmlFor="email">Email</Label>
            <InputField
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FieldGroup>

          <FieldGroup>
            <PasswordLabelRow>
              <Label htmlFor="password">Password</Label>
              <ForgotLink href="#">Forgot password?</ForgotLink>
            </PasswordLabelRow>
            <InputField
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FieldGroup>

          <SubmitButton type="submit">Log In</SubmitButton>
        </form>
      </FormCard>
    </Background>
  );
}
