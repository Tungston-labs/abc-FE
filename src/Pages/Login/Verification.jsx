import React, { useEffect,useState } from 'react';
import {
  Background, FormCard, LogoWrapper, Title, Label,
  Subtitle, InputField, FieldGroup, SubmitButton, OtpContainer, OtpInput
} from './Login.Styles';

// import { verifyOtp } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

export default function VerificationForm() {
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
//   useEffect(() => {
//     const storedEmail = localStorage.getItem('resetEmail');
//     if (storedEmail) {
//       setEmail(storedEmail);
//     } else {
//       // Redirect back if email is not available
//       navigate('/forget-password');
//     }
//   }, [navigate]);

//   const handleChange = (value, index) => {
//     if (!/^\d*$/.test(value)) return; // Only allow numbers
//     const updatedOtp = [...otp];
//     updatedOtp[index] = value;
//     setOtp(updatedOtp);

//     // Auto move to next box
//     if (value && index < 4) {
//       const nextInput = document.getElementById(`otp-${index + 1}`);
//       if (nextInput) nextInput.focus();
//     }
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp.length !== 5) {
      alert('Please enter the 5-digit code.');
      return;
    }

    try {
      await verifyOtp({email, code: enteredOtp });
      alert('OTP verified successfully!');
      navigate('/reset-password'); // or dashboard
    } catch (err) {
      alert(err.response?.data?.detail || 'Invalid verification code.');
    }
  };

  return (
    <Background>
      <FormCard>
        <LogoWrapper>
          <p>Logo</p>
        </LogoWrapper>

        <Title>Verification</Title>
        <Subtitle>We sent a code to <strong>{email}</strong></Subtitle>

        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Label>Enter Verification Code</Label>
            <OtpContainer>
              {otp.map((digit, index) => (
                <OtpInput
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                />
              ))}
            </OtpContainer>
          </FieldGroup>

          <SubmitButton type="submit">Verify</SubmitButton>
        </form>
      </FormCard>
    </Background>
  );
}
