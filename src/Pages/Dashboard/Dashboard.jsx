import React from 'react';
import {
  DashboardContainer,
  WelcomeMessage,
  DashboardTitle,
  CardsWrapper,
  BottomRow,
  StatCard,
  CardLabel,
  CardValue
} from './Dashboard.Styles';

const topStats = [
  { label: 'User', value: 154 },
  { label: 'LCO', value: 154 },
  { label: 'OLT', value: 154 }
];

const bottomStats = [
  { label: 'Plan expires count', value: 154 },
  { label: 'ISP count', value: 154 }
];

const Dashboard = () => {
  return (
    <DashboardContainer>
      <WelcomeMessage>Welcome. You have successfully accessed the dashboard.</WelcomeMessage>
      <DashboardTitle>Dashboard</DashboardTitle>

      <CardsWrapper>
        {topStats.map((stat, index) => (
          <StatCard key={index}>
            <CardLabel>{stat.label}</CardLabel>
            <CardValue>{stat.value}</CardValue>
          </StatCard>
        ))}
      </CardsWrapper>

      <BottomRow>
        {bottomStats.map((stat, index) => (
          <StatCard key={index}>
            <CardLabel>{stat.label}</CardLabel>
            <CardValue>{stat.value}</CardValue>
          </StatCard>
        ))}
      </BottomRow>
    </DashboardContainer>
  );
};

export default Dashboard;
