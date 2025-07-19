import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 24px;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
`;

export const ModalHeader = styled.h2`
  margin-bottom: 20px;
`;

export const FormGrid = styled.div`
  display: grid;
//   grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 6px;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  background-color: #f7f7fb;
  border: 1px solid #eee;
  border-radius: 6px;
  font-size: 14px;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 24px;
`;

export const CancelButton = styled.button`
  padding: 10px 24px;
  background-color: #fce5e5;
  border: 1px solid #f15b5b;
  color: #f15b5b;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #fbbcbc;
  }
`;

export const SaveButton = styled.button`
  padding: 10px 24px;
  background-color: #c6a9ff;
  border: 1px solid #4042E2;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #4042E2;
  }
`;
