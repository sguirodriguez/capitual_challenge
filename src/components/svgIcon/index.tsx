import React from 'react';
import { ReactSVG } from 'react-svg';
import { CSSProperties } from 'styled-components';
import {
  arrowDown,
  arrowUp,
  clipboard,
  collection,
  inbox,
  lock,
  logo,
  menu,
  notification,
  overview,
  search,
  shopping,
  support,
  exclamationCircle,
} from '../../assets';
import { theme } from '../../styles/theme/generalColors';
import { IconContainer } from './styles';

type SVGIconProps = {
  className?: string;
  width?: number;
  color?: string;
  iconName: string;
  style?: CSSProperties;
};

function SVGIcon(props: SVGIconProps) {
  const { className, width = 20, color = theme.colors.primaryDefault, iconName, style } = props;

  const translateIcon: any = {
    arrowDown,
    arrowUp,
    clipboard,
    collection,
    inbox,
    lock,
    logo,
    menu,
    notification,
    overview,
    search,
    shopping,
    support,
    exclamationCircle,
  };

  return (
    <IconContainer className={className} width={width} color={color} style={style}>
      <ReactSVG src={translateIcon[iconName]} />
    </IconContainer>
  );
}

export default SVGIcon;
