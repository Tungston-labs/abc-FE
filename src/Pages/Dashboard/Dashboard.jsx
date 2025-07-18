import React from 'react';
import {
  DashboardContainer,
  WelcomeMessage,
  DashboardTitle,
  CardsWrapper,
  BottomRow,
  StatCard,
  CardLabel,
  CardValue,
  CardImage,
  LabelImage
} from './Dashboard.Styles';

const topStats = [
  { label: 'User', value: 154, labelImage: '/images/user.png' },
  { label: 'LCO', value: 154, labelImage: '/images/lco.png' },
  { label: 'OLT', value: 154, labelImage: '/images/olt.png' }
];

const bottomStats = [
  {
    label: 'Plan expires count',
    value: 154,
    image: '/images/plan.png',
    imageStyle:{width:'10rem',height:'100px'}
    // labelImage: '/images/plan-icon.png'
  },
  {
    label: 'ISP Count',
    value: 154,
    image: '/images/isp.png',
    imageStyle:{width:'15rem',height:'100px'}
    // labelImage: '/images/isp.png'
  }
];

const Dashboard = () => {
  return (
    <DashboardContainer>
      {/* <WelcomeMessage>Welcome. You have successfully accessed the dashboard.</WelcomeMessage>
      <DashboardTitle>Dashboard</DashboardTitle> */}

      <CardsWrapper>
        {topStats.map((stat, index) => (
          <StatCard key={index} height="12rem">
            <CardLabel>
              <LabelImage src={stat.labelImage} alt={`${stat.label} icon`} />
              {stat.label}
            </CardLabel>
            <CardValue>{stat.value}</CardValue>
          </StatCard>
        ))}
      </CardsWrapper>

      <BottomRow>
        {bottomStats.map((stat, index) => (
          <StatCard key={index} height="15rem">
            <CardLabel>
              {/* <LabelImage src={stat.labelImage} alt={`${stat.label} icon`} /> */}
              {stat.label}
            </CardLabel>
            {stat.image && <CardImage src={stat.image} alt={stat.label}
            style={stat.imageStyle} />}
            <CardValue>{stat.value}</CardValue>
          </StatCard>
        ))}
      </BottomRow>
    </DashboardContainer>
  );
};

export default Dashboard;
