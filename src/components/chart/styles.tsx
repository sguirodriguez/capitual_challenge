import styled from 'styled-components';
import { TextBold, TextDefault, TextMedium } from '../../styles/globalStyles';
import { GeneralColors } from '../../typings';

export const Container = styled.div`
  width: 100%;
  height: 570px;
  background-color: ${({ theme }: GeneralColors) => theme.colors.white};
  border-radius: 16px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  padding: 32px 32px 40px 32px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 6px;
  }
`;

export const TitleAndIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(TextBold)`
  font-size: 1.25rem !important;
  line-height: 150%;
  margin-right: 13px;
`;

export const ContainerTooltip = styled.div`
  width: 150px;
  height: 94px;
  padding: 9px 12px;
  background-color: ${({ theme }: GeneralColors) => theme.colors.white};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  .sales {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 11px;

    .circle {
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: ${({ theme }: GeneralColors) => theme.colors.secondaryDefault};
      margin-right: 5px;
    }
  }
`;

export const TitleToolTip = styled(TextMedium)`
  font-size: 0.8rem;
  color: ${({ theme }: GeneralColors) => theme.colors.graySemiDarker} !important;
`;

export const TextToolTip = styled(TextDefault)`
  line-height: 150%;
  color: ${({ theme }: GeneralColors) => theme.colors.grayDarker};
  margin-right: 5px;
`;

export const ValueToolTip = styled(TextToolTip)`
  color: ${({ theme }: GeneralColors) => theme.colors.primaryDefault};
`;
