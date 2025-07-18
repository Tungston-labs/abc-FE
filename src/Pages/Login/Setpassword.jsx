import React, { useState, useEffect } from 'react';
import {
  Background, FormCard, LogoWrapper, Title, Label,
  Subtitle, InputField, FieldGroup, PasswordWrapper,
  PasswordLabelRow, SubmitButton
} from './Login.Styles';

import { useNavigate } from 'react-router-dom';
// import { resetPassword } from '../../services/authService'; // Add this API in your service

export default function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

//   useEffect(() => {
//     const storedEmail = localStorage.getItem('resetEmail');
//     if (storedEmail) {
//       setEmail(storedEmail);
//     } else {
//       navigate('/forget-password');
//     }
//   }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      // await resetPassword({ email, new_password: newPassword });
      alert('Password reset successfully!');
      localStorage.removeItem('resetEmail'); // cleanup
      navigate('/'); // Go to login page
    } catch (err) {
      alert(err.response?.data?.detail || 'Reset failed!');
    }
  };

  return (
    <Background>
      <FormCard>
        <LogoWrapper>
          <p>Logo</p>
        </LogoWrapper>

        <Title>Set new Password</Title>
        <Subtitle>Enter new password</Subtitle>

        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Label htmlFor="new-password">New Password</Label>
            <InputField
              id="new-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <InputField
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </FieldGroup>

          <SubmitButton type="submit">Reset Password</SubmitButton>
        </form>
      </FormCard>
    </Background>
  );
}
