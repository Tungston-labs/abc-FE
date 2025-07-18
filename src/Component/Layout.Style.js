import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
    background: #F4F5FA;
`;

export const MainContent = styled.div`
  margin-left: 220px; /* match sidebar width */
  width: calc(100% - 220px);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
  // background: #fff;
`;
