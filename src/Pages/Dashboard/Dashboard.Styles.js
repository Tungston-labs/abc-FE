import styled from 'styled-components';

export const DashboardContainer = styled.div`
  padding: 24px;
  background: #F4F5FA;
  min-height: 100vh;
`;

export const WelcomeMessage = styled.p`
  font-size: 20px;
  color: black;
  margin-bottom: 8px;
  color: #000;
  font-family: Lato;
font-size: 20px;
font-style: italic;
font-weight: 400;
`;

export const DashboardTitle = styled.h2`
  color: #000;

font-family: Lato;
font-size: 30px;
font-style: normal;
font-weight: 700;
  margin-bottom: 20px;
  color: #000;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const BottomRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardLabel = styled.span`
  color: #7b3df4;
  font-size: 14px;
  font-weight: 500;
`;

export const CardValue = styled.h3`
  margin-top: auto;
  text-align: right;
  font-size: 18px;
  color: #7b3df4;
  font-weight: 600;
`;
