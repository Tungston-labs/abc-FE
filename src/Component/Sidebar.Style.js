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
  margin-bottom: 32px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    width: 5rem; /* or whatever width you prefer */
  }
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
  color: ${({ active }) => (active ? 'black' : '#848484')};
  background-color: ${({ active }) => (active ? '#83B1C9' : 'transparent')};
  font-family: Lato;

  &:hover {
    background-color: #83B1C9;
    color: black;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 6px;
    bottom: 6px;
    width: 4px;
    background-color: ${({ active }) => (active ? 'black' : 'transparent')};
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  &:hover::before {
    background-color: black;
  }
`;


export const ActiveMenu = styled(MenuItem)`
  background-color: #83B1C9;
  color: #4042E2;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 6px;
    bottom: 6px;
    width: 4px;
    background-color: #4042E2;
    border-radius: 4px;
  }

  &:hover {
    background-color: #83B1C9;
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
