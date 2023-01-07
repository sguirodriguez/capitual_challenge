import styled from 'styled-components';
import { TextDefault, TextSemiBold } from '../../styles/globalStyles';
import { GeneralColors } from '../../typings';

type ImageProps = {
  src: any;
};

export const Container = styled.div`
  width: 100%;
  min-height: 448px;
  max-height: 460px;
  background-color: ${({ theme }: GeneralColors) => theme.colors.white};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 24px;
  overflow-x: auto;
`;

export const Title = styled(TextSemiBold)`
  font-size: 1.25rem;
  line-height: 150%;
`;

export const Row = styled.div`
  width: 100%;
  height: 59px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }: GeneralColors) => theme.colors.graySemiMedium};

  &:first-of-type {
    margin-top: 20px;
    border-top: none;
  }

  .avatar-and-info {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .info {
    margin-left: 8px;
    display: flex;
    flex-direction: column;
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-image: url(${({ src }: ImageProps) => src});
`;

export const TitleInfo = styled(Title)`
  font-size: 1rem !important;
`;

export const TextInfo = styled(TextDefault)`
  font-size: 0.8rem;
  line-height: 150%;
  color: ${({ theme }: GeneralColors) => theme.colors.grayDarker};
`;
