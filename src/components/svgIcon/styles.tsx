import styled from 'styled-components';

type IconProps = {
  width: number;
  color: string;
  height: number;
};

export const IconContainer = styled.div`
  background: transparent;
  border: none;
  padding: 0;
  line-height: 0;

  svg {
    width: ${(props: IconProps) => props.width}px !important;
    width: ${(props: IconProps) => props.height}px !important;
    & {
      fill: ${(props: IconProps) => props.color} !important;
    }
  }
`;
