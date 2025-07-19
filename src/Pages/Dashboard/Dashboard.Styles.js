import styled from 'styled-components';

export const DashboardContainer = styled.div`
  padding: 24px;
  background-image: url('/images/home.png'); 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
`;

export const WelcomeMessage = styled.p`
  font-family: Lato;
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  color: #000;
  margin-bottom: 8px;
`;

export const DashboardTitle = styled.h2`
  font-family: Lato;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  height: 12rem;

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
  height: 15rem;

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
  transition: background 0.3s ease;
box-shadow: 0px 0px 13.3px 0px rgba(0, 0, 0, 0.23);
  &:hover {
    background: #E1E1FD;
  }
`;


export const CardLabel = styled.div`
  color: #4D4D4D;
  font-size: 28px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const LabelImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: 8px;
`;

export const CardValue = styled.h3`
  margin-top: auto;
  text-align: right;
  font-size: 30px;
  color: #4D4D4D;
  font-weight: 600;
`;

export const CardImage = styled.img`
  width: 100px;
  height: 80px;
  object-fit: contain;
  margin: 0 auto 10px;
  display: block;
`;
