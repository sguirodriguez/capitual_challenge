import React from 'react';
import Chart from '../../components/chart';
import Header from '../../components/header';
import SidebarMenu from '../../components/sidebarMenu';
import { ContainerHome, MenuAndMain, Main } from './home.styles';

function HomeScreen({ handlers }: any) {
  const { isMenuMobileVisible, setIsMenuMobileVisible } = handlers;
  return (
    <ContainerHome>
      <Header
        isMenuMobileVisible={isMenuMobileVisible}
        setIsMenuMobileVisible={setIsMenuMobileVisible}
      />

      <MenuAndMain>
        <SidebarMenu
          isMenuMobileVisible={isMenuMobileVisible}
          setIsMenuMobileVisible={setIsMenuMobileVisible}
        />
        <Main>
          <Chart />
        </Main>
      </MenuAndMain>
    </ContainerHome>
  );
}

export default HomeScreen;
