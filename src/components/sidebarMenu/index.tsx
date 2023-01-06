import React, { useState } from 'react';
import { theme } from '../../styles/theme/generalColors';
import SVGIcon from '../svgIcon';
import {
  Container,
  Left,
  Row,
  Title,
  SubItem,
  TextNotification,
  NotificationMessage,
  Divider,
} from './styles';

function SidebarMenu() {
  const [subPages, setSubPages] = useState<any>();

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
      subpages: ['Testing'],
    },
    {
      title: 'Sales',
      icon: 'shopping',
      iconWidth: 17,
      iconHeight: 19,
      subpages: ['Product List', 'Briling', 'Invoice'],
    },
    {
      title: 'Messages',
      icon: 'inbox',
      iconWidth: 17,
      iconHeight: 17,
    },
    {
      title: 'Authentication',
      icon: 'lock',
      iconWidth: 17,
      iconHeight: 19,
      subpages: ['Testing'],
    },
    {
      title: 'Docs',
      icon: 'clipboard',
      iconWidth: 14,
      iconHeight: 18,
    },
    {
      title: 'Components',
      icon: 'collection',
      iconWidth: 19,
      iconHeight: 16,
    },
    {
      title: 'Help',
      icon: 'support',
      iconWidth: 19,
      iconHeight: 16,
    },
  ];

  const handleClick = async (value: string) => {
    const arrayValues = subPages;
    let foundedValue = null;

    if (arrayValues?.length === 0 || arrayValues === undefined) {
      setSubPages([{ title: value, state: true }]);
      return;
    }

    foundedValue = await arrayValues?.findIndex((item: any) => item?.title === value);

    if (foundedValue === -1 || foundedValue === undefined) {
      setSubPages([...arrayValues, { title: value, state: true }]);
      return;
    }

    arrayValues[foundedValue] = { title: value, state: !arrayValues[foundedValue].state };

    setSubPages([...arrayValues]);
  };

  const translatorArrow = (objectItem: any) => {
    const objectInArray = subPages?.find((item: any) => item.title === objectItem?.title);

    if (objectInArray?.state) {
      return <SVGIcon iconName="arrowUp" width={19} />;
    }
    return <SVGIcon iconName="arrowDown" width={19} />;
  };

  const verifyInArrayAndReturnSubItem = (object: any) => {
    const objectInArray = subPages?.find((item: any) => item?.title === object?.title);

    if (!objectInArray?.state || !objectInArray) {
      return <div />;
    }

    return object?.subpages?.map((itemSub: string) => (
      <SubItem>
        <Title style={{ color: object?.color }}>{itemSub}</Title>
      </SubItem>
    ));
  };

  return (
    <Container>
      {sidebarMenuMock?.map((item, index) => {
        if (item?.title === 'Messages') {
          return (
            <Row key={item?.icon} onClick={() => item?.subpages && handleClick(item?.title)}>
              <Left>
                <SVGIcon
                  iconName={item?.icon}
                  width={24 || item?.iconWidth}
                  height={24 || item?.iconHeight}
                  color={item?.color}
                />
                <Title style={{ color: item?.color }}>{item?.title}</Title>
              </Left>

              <NotificationMessage>
                <TextNotification>1</TextNotification>
              </NotificationMessage>
            </Row>
          );
        }

        if (index === 5) {
          return (
            <>
              <Divider className="divider" />
              <Row key={item?.icon} onClick={() => item?.subpages && handleClick(item?.title)}>
                <Left>
                  <SVGIcon
                    iconName={item?.icon}
                    width={24 || item?.iconWidth}
                    height={24 || item?.iconHeight}
                    color={item?.color}
                  />
                  <Title style={{ color: item?.color }}>{item?.title}</Title>
                </Left>
              </Row>
            </>
          );
        }

        return (
          <>
            <Row key={item?.icon} onClick={() => item?.subpages && handleClick(item?.title)}>
              <Left>
                <SVGIcon
                  iconName={item?.icon}
                  width={24 || item?.iconWidth}
                  height={24 || item?.iconHeight}
                  color={item?.color}
                />
                <Title style={{ color: item?.color }}>{item?.title}</Title>
              </Left>

              {item?.subpages && translatorArrow(item)}
            </Row>
            {item?.subpages && verifyInArrayAndReturnSubItem(item)}
          </>
        );
      })}
    </Container>
  );
}

export default SidebarMenu;
