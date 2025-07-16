import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';

export const ConfirmBox = styled.div`
  // width: 360px;
  // background: #fff;
  border-radius: 12px;
  // padding: 24px;
  // border: 1px solid #ddd;
  text-align: center;
  // box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
`;

export const IconCircle = styled.div`
  background: #ffecec;
  width: 60px;
  height: 60px;
  margin: 0 auto 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TrashIcon = styled(FaTrashAlt)`
  color: red;
  font-size: 24px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Message = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 24px;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const CancelButton = styled.button`
  padding: 10px 24px;
  background: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: #e0e0e0;
  }
`;

export const DeleteButton = styled.button`
  padding: 10px 24px;
  background: #ffe6e6;
  border: 1px solid red;
  color: red;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: #ffcccc;
  }
`;
