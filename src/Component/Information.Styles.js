// src/components/Information.Styles.js
import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  max-width: 960px;
  margin: 2rem auto;
  justify-content:center;
`;

export const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 2rem 0 1rem;
  color: #374151;
`;

export const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  min-width: 120px;
`;

export const Label = styled.label`
  font-size: 0.95rem;
  color: #4b5563;
  margin-left: 0.5rem;
  cursor: pointer;
`;



export const LockIcon = styled.span`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  color: #83B1C9; 

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #83B1C9; /* purple-600 */
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #83B1C9; /* darker purple */
  }
`;
export const Button = styled.button`
  background-color: #83B1C9; /* purple-600 */
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #83B1C9; /* darker purple */
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #83B1C9;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s ease-in-out;

  &:checked {
    background-color: #83B1C9;
  }

  &:checked::after {
    content: '✔';
    color: white;
    font-size: 12px;
    position: absolute;
    top: 0;
    left: 3px;
  }
`;
