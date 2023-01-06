import React from 'react';
import Input from '../input';
import SVGIcon from '../svgIcon';
import { Avatar, Container, Left, Right } from './styles';

function Header() {
  return (
    <Container>
      <Left>
        <SVGIcon iconName="logo" className="logo" width={35} />
        <Input />
      </Left>

      <Right>
        <SVGIcon iconName="notification" width={32} />
        <Avatar />
      </Right>
    </Container>
  );
}

export default Header;
