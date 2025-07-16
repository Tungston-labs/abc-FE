// src/components/LoginForm.jsx
import React, { useState } from 'react';
import {
  Background,
  FormCard,
  LogoWrapper,
  Title,Label,
  Subtitle,
  InputField,FieldGroup,
  PasswordWrapper,PasswordLabelRow,
  ForgotLink,
  SubmitButton,
} from './Login.Styles';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    alert('Login Attempt!');
  };

  return (
    <Background>
      <FormCard>
        <LogoWrapper>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 014.94 2.83L15 14m0 0l2 2m-2-2l-2 2M12 18h.01" />
          </svg>
          <p>Logo</p>
        </LogoWrapper>

        <Title>Welcome back !</Title>
        <Subtitle>Log in to your account</Subtitle>

        <form onSubmit={handleSubmit}>
  <FieldGroup>
    <Label htmlFor="username">Username</Label>
    <InputField
      id="username"
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
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
