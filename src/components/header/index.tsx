import React from 'react';
import Input from '../input';
import SVGIcon from '../svgIcon';
import { Avatar, Container, Left, Right } from './styles';

type HeaderMenuProps = {
  isMenuMobileVisible: boolean;
  setIsMenuMobileVisible: (value: boolean) => any;
};

function Header({ isMenuMobileVisible, setIsMenuMobileVisible }: HeaderMenuProps) {
  return (
    <Container>
      <Left>
        <SVGIcon iconName="logo" className="logo" width={28} height={33} />

        <SVGIcon
          iconName="menu"
          className="menu"
          width={16}
          height={16}
          onClick={() => setIsMenuMobileVisible(!isMenuMobileVisible)}
        />

        <Input className="input-search" />
      </Left>

      <Right>
        <SVGIcon iconName="notification" width={16.8} height={19.2} />
        <Avatar />
      </Right>
    </Container>
  );
}

export default Header;
