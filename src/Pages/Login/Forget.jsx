import React, { useState } from 'react';
import {
  Background, FormCard, LogoWrapper, Title, Label,
  Subtitle, InputField, FieldGroup, SubmitButton
} from './Login.Styles';

// import { sendResetEmail } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendResetEmail({ email });  // Send reset email API call
      alert('Password reset instructions sent to your email.');
      navigate('/login'); // Redirect to login or verification page
    } catch (err) {
      alert(err.response?.data?.detail || 'Failed to send reset instructions.');
    }
  };

  return (
    <Background>
      <FormCard>
        <LogoWrapper>
          <p>Logo</p>
        </LogoWrapper>

        <Title>Forgot Password?</Title>
        <Subtitle>No worries, we’ll send you reset instructions.</Subtitle>

        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Label htmlFor="email">Enter Email Address</Label>
            <InputField
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FieldGroup>

          <SubmitButton type="submit">Send Reset Link</SubmitButton>
        </form>
      </FormCard>
    </Background>
  );
}
