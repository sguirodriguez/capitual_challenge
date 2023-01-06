import React, { useState } from 'react';
import HomeScreen from './home.screen';

function HomeController() {
  const [isMenuMobileVisible, setIsMenuMobileVisible] = useState(false);

  const handlers: any = {
    isMenuMobileVisible,
    setIsMenuMobileVisible,
  };
  return <HomeScreen handlers={handlers} />;
}

export default HomeController;
