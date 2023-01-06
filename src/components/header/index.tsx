import React from 'react';
import SVGIcon from '../svgIcon';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div className="left">
        <SVGIcon iconName="logo" />
      </div>
      <div className="right" />
    </Container>
  );
}

export default Header;
