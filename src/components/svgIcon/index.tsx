import React from 'react';
import { ReactSVG } from 'react-svg';
import {
  clipboard,
  collection,
  inbox,
  lock,
  logo,
  notification,
  overview,
  search,
  shopping,
  support,
} from '../../assets';
import { theme } from '../../styles/theme/generalColors';
import { IconContainer } from './styles';

type SVGIconProps = {
  className?: string;
  width?: number;
  color?: string;
  iconName: string;
};

function SVGIcon(props: SVGIconProps) {
  const { className, width = 20, color = theme.colors.primaryDefault, iconName } = props;

  const translateIcon: any = {
    clipboard,
    collection,
    inbox,
    lock,
    logo,
    notification,
    overview,
    search,
    shopping,
    support,
  };

  return (
    <IconContainer className={className} width={width} color={color}>
      <ReactSVG src={translateIcon[iconName]} />
    </IconContainer>
  );
}

export default SVGIcon;
