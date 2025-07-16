// src/components/BulkUploadModal.styles.js
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(75, 85, 99, 0.5); // Tailwind's gray-600 @ 50%
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 1rem;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 600px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937; // Tailwind's gray-800
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151; // gray-700
  margin-bottom: 0.5rem;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  background: white;
  color: #374151;
  font-size: 0.875rem;
`;

export const FileLabel = styled.label`
  background: #ede9fe;
  color: #6d28d9;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #c4b5fd;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: #ddd6fe;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileName = styled.span`
  font-size: 0.875rem;
  color: #6b7280; // gray-500
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const CancelButton = styled.button`
  background: #fee2e2;
  color: #b91c1c;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  &:hover {
    background: #fecaca;
  }
`;

export const UploadButton = styled.button`
  background: #7c3aed;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  &:hover {
    background: #6d28d9;
  }
`;
