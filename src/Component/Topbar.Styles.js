// src/components/Topbar.styles.js
import styled from 'styled-components';

export const TopbarContainer = styled.div`
  // width: 100%;
  padding: 12px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
 margin-left:30px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px;
  border: 1px solid #83B1C9;
  border-radius: 10px;
`;

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const RoleLabel = styled.span`
  font-size: 14px;
  color: #444;
  font-weight: 500;
`;
