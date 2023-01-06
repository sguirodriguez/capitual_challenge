import React from 'react';
import Header from '../../components/header';
import SidebarMenu from '../../components/sidebarMenu';
import { ContainerHome } from './home.styles';

function HomeScreen() {
  return (
    <ContainerHome>
      <Header />
      <SidebarMenu />
    </ContainerHome>
  );
}

export default HomeScreen;
