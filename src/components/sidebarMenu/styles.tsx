import styled from 'styled-components';
import { TextDefault, TextMedium } from '../../styles/globalStyles';
import { GeneralColors } from '../../typings';

export const Container = styled.div`
  width: 250px;
  height: calc(100% - 70px);
  background-color: ${({ theme }: GeneralColors) => theme.colors.white};
  border-right: 1px solid ${({ theme }: GeneralColors) => theme.colors.graySemiMedium};
  padding-top: 22px;
  padding-left: 12px;
  padding-right: 12px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: 32px;
  border-radius: 12px;
  margin-top: 22px;
  padding: 0px 11px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:first-of-type {
    margin-top: 0px;
  }

  &:hover {
    background-color: ${({ theme }: GeneralColors) => theme.colors.grayLight};
    cursor: pointer;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(TextMedium)`
  line-height: 150%;
  margin-left: 18px;
`;

export const SubItem = styled.div`
  width: 100%;
  height: 32px;
  margin-top: 10px;
  padding-left: 34px;

  &:first-of-type {
    margin-top: 0px;
  }
`;

export const NotificationMessage = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ theme }: GeneralColors) => theme.colors.redLight};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextNotification = styled(TextDefault)`
  font-size: 12px;
  line-height: 150%;
`;

export const Divider = styled.div`
  margin-top: 24px;
  margin-left: -12px;
  width: 250px;
  height: 1px;
  background-color: ${({ theme }: GeneralColors) => theme.colors.graySemiMedium};
`;
