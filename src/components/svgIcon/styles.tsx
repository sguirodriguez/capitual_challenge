import styled from 'styled-components';

type IconProps = {
  width: number;
  color: string;
};

export const IconContainer = styled.div`
  background: transparent;
  border: none;
  padding: 0;
  line-height: 0;

  svg {
    width: ${(props: IconProps) => props.width}px !important;
    & {
      fill: ${(props: IconProps) => props.color} !important;
    }
  }
`;
