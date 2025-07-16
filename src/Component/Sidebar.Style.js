import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 220px;
  background: #fff;
  border-right: 1px solid #f0f0f0;
  padding: 24px 12px;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 1000;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #7b3df4;
  margin-bottom: 32px;
  text-align: center;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  cursor: pointer;
  position: relative;
  color: ${({ active }) => (active ? '#5B1FF3' : '#333')};
  background-color: ${({ active }) => (active ? '#EAEAEA' : 'transparent')};
  font-family: Lato;

  &:hover {
    background-color: #EAEAEA;
    color: #5B1FF3;
  }

  &::before {
    content: ${({ active }) => (active ? "''" : 'none')};
    position: absolute;
    left: 0;
    top: 6px;
    bottom: 6px;
    width: 4px;
    background-color: #5B1FF3;
    border-radius: 4px;
  }
`;

export const ActiveMenu = styled(MenuItem)`
  position: relative;
  background-color: #EAEAEA;
  color: #5B1FF3;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 6px;
    bottom: 6px;
    width: 4px;
    background-color: #5B1FF3;
    border-radius: 4px;
  }

  &:hover {
    background-color: #eae6ff;
  }
`;



export const Icon = styled.div`
  font-size: 18px;
`;

export const Label = styled.span`
  font-size: 15px;
  font-weight: 500;
  font-family:Lato;
`;

export const LogoutButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #f64e60;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 12px;
  margin-top: auto;

  &:hover {
    background: #fff0f0;
    border-radius: 8px;
  }
`;
