import React from 'react';
import Input from '../input';
import SVGIcon from '../svgIcon';
import { Avatar, Container, Left, Right } from './styles';
import avatar from '../../assets/images/backgrounds/avatar.png';

function Header() {
  return (
    <Container>
      <Left>
        <SVGIcon iconName="logo" className="logo" width={35} />
        <SVGIcon iconName="menu" className="menu" width={20} />
        <Input className="input-search" />
      </Left>

      <Right>
        <SVGIcon iconName="notification" width={32} />
        <Avatar src={avatar} />
      </Right>
    </Container>
  );
}

export default Header;
