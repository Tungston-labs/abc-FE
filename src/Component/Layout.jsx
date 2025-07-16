import React from 'react';
import { Container, MainContent, ContentWrapper } from './Layout.Style';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Topbar />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </MainContent>
    </Container>
  );
};

export default Layout;
