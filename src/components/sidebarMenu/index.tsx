import React from 'react';
import { theme } from '../../styles/theme/generalColors';
import SVGIcon from '../svgIcon';
import { Container, Left, Row, Title } from './styles';

function SidebarMenu() {
  const sidebarMenuMock = [
    {
      title: 'Overview',
      icon: 'overview',
      color: theme.colors.secondaryDefault,
    },
    {
      title: 'Pages',
      icon: 'pages',
      iconWidth: 14,
      iconHeight: 19,
      subpages: ['teste'],
    },
  ];

  return (
    <Container>
      {sidebarMenuMock?.map((item) => (
        <Row key={item.icon}>
          <Left>
            <SVGIcon
              iconName={item.icon}
              width={24 || item.iconWidth}
              height={24 || item.iconHeight}
              color={item.color}
            />
            <Title style={{ color: item.color }}>{item.title}</Title>
          </Left>

          {item.subpages && <SVGIcon iconName="arrowDown" width={19} />}
        </Row>
      ))}
    </Container>
  );
}

export default SidebarMenu;
