// src/components/LoginForm.styles.js
import styled from 'styled-components';

export const Background = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: url('images/login.png') no-repeat center center;
  background-size: cover;
  font-family: sans-serif;
`;

export const FormCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  // box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 15.5px 0px rgba(0, 0, 0, 0.55);
  border: 0.2px solid #e5e7eb;
  text-align: center;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 1.5rem;
  svg {
    width: 4rem;
    height: 4rem;
    margin: 0 auto;
    color: #8b5cf6;
  }
  p {
    margin-top: 0.25rem;
    color: #8b5cf6;
    font-size: 0.75rem;
    font-weight: 600;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
    font-family: 'Urbanist';
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  color: #9F9F9F;
  font-size: 23px;
  margin-bottom: 2rem;
    font-family: 'Urbanist';
 
`;

export const InputField = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 7px;
  margin-bottom: 1.25rem;
  font-size:20px;
  color: #374151;
 font-family: 'Urbanist';
  &:focus {
    outline: none;
    border-color: #8b5cf6;
    box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.4);
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

// export const ForgotLink = styled.a`
//   position: absolute;
//   right: 0.75rem;
//   top: 50%;
//   transform: translateY(-50%);
//   font-size: 0.75rem;
//   color: #8b5cf6;
//   text-decoration: none;
//   font-weight: 500;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #8b5cf6;
  color: white;
  border-radius: 7px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color:#794AFF;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.4);
  }
`;
export const FieldGroup = styled.div`
  text-align: left;
  margin-bottom: 1rem;
`;

export const PasswordLabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 0.9rem;
`;

export const ForgotLink = styled.a`
  font-size: 0.8rem;
  color: #8c52ff;
  text-decoration: none;
 font-family: 'Urbanist';
  &:hover {
    text-decoration: underline;
  }
`;