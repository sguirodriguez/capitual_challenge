import React from 'react';
import Header from '../../components/header';
import SidebarMenu from '../../components/sidebarMenu';
import { ContainerHome } from './home.styles';

function HomeScreen({ handlers }: any) {
  const { isMenuMobileVisible, setIsMenuMobileVisible } = handlers;
  return (
    <ContainerHome>
      <Header
        isMenuMobileVisible={isMenuMobileVisible}
        setIsMenuMobileVisible={setIsMenuMobileVisible}
      />
      <SidebarMenu
        isMenuMobileVisible={isMenuMobileVisible}
        setIsMenuMobileVisible={setIsMenuMobileVisible}
      />
    </ContainerHome>
  );
}

export default HomeScreen;
