import React from 'react';
import Chart from '../../components/chart';
import Header from '../../components/header';
import LatestCustomers from '../../components/latestCustomers';
import SidebarMenu from '../../components/sidebarMenu';
import TopProducts from '../../components/topProducts';
import { ContainerHome, MenuAndMain, Main, GridContainer } from './home.styles';

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
          <GridContainer>
            <LatestCustomers className="left" />
            <TopProducts className="right" />
          </GridContainer>
        </Main>
      </MenuAndMain>
    </ContainerHome>
  );
}

export default HomeScreen;
