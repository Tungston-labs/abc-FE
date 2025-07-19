import styled from 'styled-components';

export const PageWrapper = styled.div`
  padding: 10px;
  background-color: #F4F5FA;;
  min-height: 100vh;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  background-color: #DAE5EF; /* light lavender */
  padding: 7px;
  border-radius: 7px;

  /* Centering */
  margin: 0 auto;
  max-width: 900px; /* you can adjust based on screen */
  width: 100%;
`;
export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 10px;
  
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px 14px;
  border-radius: 7px;
  border: none;
  outline: none;
  font-size: 14px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const ClearButton = styled.button`
  background-color: rgba(245, 66, 66, 0.2);
  border: 1px solid #f54242;
  color: #f54242;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #f54242;
    color: white;
  }
`;
export const SettingButton = styled.button`
  background-color: #83B1C9;
 
  border: 1px solid ;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  &:hover {
    // background-color: rgba(123, 61, 244, 0.2);
    color:white;
  }
`;

export const SearchButton = styled.button`
  background-color: #83B1C9;
  border: none;
  color: black;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    // background-color: #682ddf;
    color:white;
  }
`;

export const FilterButton = styled.button`
  background-color: rgba(123, 61, 244, 0.08);
  color: #83B1C9;
  border: 1px solid #83B1C9;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  &:hover {
    // background-color: rgba(123, 61, 244, 0.2);
  }
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

export const Illustration = styled.img`
  max-width: 360px;
  width: 100%;
  height: auto;
`;

export const Message = styled.p`
  margin-top: 16px;
  font-size: 18px;
  color: #7b3df4;
  font-weight: 500;
`;
