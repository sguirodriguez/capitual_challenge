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
  pages,
} from '../../assets';
import { theme } from '../../styles/theme/generalColors';
import { IconContainer } from './styles';

type SVGIconProps = {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
  iconName: string;
  style?: CSSProperties;
  onClick?: any;
};

function SVGIcon(props: SVGIconProps) {
  const {
    className,
    width = 20,
    color = theme.colors.primaryDefault,
    iconName,
    style,
    height = 20,
    onClick,
  } = props;

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
    pages,
  };

  return (
    <IconContainer
      className={className}
      width={width}
      height={height}
      color={color}
      style={style}
      onClick={onClick}
    >
      <ReactSVG src={translateIcon[iconName]} />
    </IconContainer>
  );
}

export default SVGIcon;
