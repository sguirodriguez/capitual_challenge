import styled from 'styled-components';
import TableRow from '@mui/material/TableRow';
import { TextDefault, TextSemiBold } from '../../styles/globalStyles';
import { GeneralColors } from '../../typings';

export const Container = styled.div`
  width: 100%;
  min-height: 473px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }: GeneralColors) => theme.colors.white};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  margin-top: 16px;
  padding: 16px;

  th,
  td {
    border: none;
    box-shadow: none;
  }

  .table-container {
    box-shadow: none;
  }
`;

export const Title = styled(TextSemiBold)`
  font-size: 1.25rem;
  line-height: 150%;
`;

export const Description = styled(TextDefault)`
  font-size: 0.875rem;
  line-height: 20px;
  color: ${({ theme }: GeneralColors) => theme.colors.grayAlternative};
`;

export const ContainerTableHeader = styled(TableRow)`
  background-color: ${({ theme }: GeneralColors) => theme.colors.gray};

  .table-cell-header {
    height: 50px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
    color: ${({ theme }: GeneralColors) => theme.colors.grayDarker};

    border-bottom: 1px solid ${({ theme }: GeneralColors) => theme.colors.graySemiMedium};
  }

  .header-amount {
    @media (max-width: 660px) {
      display: none;
    }
  }
  .header-status {
    @media (max-width: 660px) {
      display: none;
    }
  }
`;

export const ContainerTableBody = styled(TableRow)`
  height: 54px;
  .transaction {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 20px;
    color: ${({ theme }: GeneralColors) => theme.colors.primaryDefault};

    @media (max-width: 660px) {
      font-size: 0.7rem;
    }
    .text-bold {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 20px;
      color: ${({ theme }: GeneralColors) => theme.colors.primaryDefault};
      @media (max-width: 660px) {
        font-size: 0.7rem;
      }
    }
  }
  .date-and-time {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 20px;
    color: ${({ theme }: GeneralColors) => theme.colors.grayDarker};
    @media (max-width: 660px) {
      font-size: 0.7rem;
    }
  }
  .amount {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }: GeneralColors) => theme.colors.primaryDefault};

    @media (max-width: 660px) {
      display: none;
    }
  }

  .status {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 660px) {
      display: none;
    }
    .component {
      width: 83px;
      height: 22px;
      background: ${({ theme }: GeneralColors) => theme.colors.greenLight};
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      .text {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: ${({ theme }: GeneralColors) => theme.colors.green};
      }
    }
  }
`;
