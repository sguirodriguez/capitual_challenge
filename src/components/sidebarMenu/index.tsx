import React, { ReactNode, useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import SVGIcon from '../svgIcon';
import { sidebarMenuMock } from './mock';

import {
  Container,
  Left,
  Row,
  Title,
  SubItem,
  TextNotification,
  NotificationMessage,
  Divider,
  ModalContainer,
} from './styles';

type SidebarMenuProps = {
  isMenuMobileVisible: boolean;
  setIsMenuMobileVisible: (value: boolean) => any;
};

function SidebarMenu({ isMenuMobileVisible, setIsMenuMobileVisible }: SidebarMenuProps) {
  const [subPages, setSubPages] = useState<any>();
  const [windowWidth, setWindowWidth] = useState<number>(1024);

  const handleClose = () => setIsMenuMobileVisible(false);

  const sizeOfThings = () => {
    const width = window.innerWidth;

    return setWindowWidth(width);
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      sizeOfThings();
    });
    sizeOfThings();
  }, []);

  const translatorContainer = (children: ReactNode) => {
    if (windowWidth <= 768) {
      return (
        <Modal open={isMenuMobileVisible} onClose={handleClose}>
          <ModalContainer>{children}</ModalContainer>
        </Modal>
      );
    }

    return <Container>{children}</Container>;
  };

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
    <>
      {translatorContainer(
        sidebarMenuMock?.map((item, index) => {
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
          // eslint-disable-next-line @typescript-eslint/comma-dangle
        })
      )}
    </>
  );
}

export default SidebarMenu;
