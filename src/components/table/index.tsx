/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
/* eslint-disable quote-props */
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { useAlert } from 'react-alert';
import { Container, ContainerTableBody, ContainerTableHeader, Description, Title } from './styles';
import { theme } from '../../styles/theme/generalColors';
import request from '../../utils/request';

type TransactionsData = Array<{
  amount: string;
  completed: boolean;
  createdAt: string;
  firstName: string;
  id: string;
  lastName: string;
}>;

function TableTransactions() {
  const [transactions, setTransactions] = useState<TransactionsData>();
  const alert = useAlert();

  const getTransactions = async () => {
    const { data, error } = await request({ method: 'GET', path: '/transactions' });

    if (error) {
      alert.error(error || 'Error on get customers!');
      return;
    }
    setTransactions(data);
  };

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkDate = (date: string) => {
    const modifyDate = date?.toString()?.split('T')[0];
    const splitDate = modifyDate?.split('-');
    const year: string = splitDate[0];
    const month: string = splitDate[1];
    const day: string = splitDate[2];

    const translatorMonth: any = {
      '01': 'Jan',
      '02': 'Feb',
      '03': 'March',
      '04': 'Apr',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'Aug',
      '09': 'Sep',
      '10': 'Octo',
      '11': 'Nov',
      '12': 'Dec',
    };

    return `${day} ${translatorMonth[String(month)]}, ${year}`;
  };

  return (
    <Container>
      <Title>Transactions</Title>
      <Description>This is a list of latest transactions.</Description>

      <TableContainer component={Paper} className="table-container" style={{ marginTop: 16 }}>
        <Table sx={{ minWidth: 160 }} aria-label="simple table">
          <TableHead>
            <ContainerTableHeader>
              <TableCell align="left" className="table-cell-header">
                TRANSACTION
              </TableCell>
              <TableCell align="center" className="table-cell-header">
                DATE & TIME
              </TableCell>
              <TableCell align="center" className="table-cell-header header-amount">
                AMOUNT
              </TableCell>
              <TableCell align="center" className="table-cell-header header-status">
                STATUS
              </TableCell>
            </ContainerTableHeader>
          </TableHead>
          <TableBody>
            {transactions?.map((row, index) => {
              let keyIndex = null;

              keyIndex = index + 1;

              const divided = keyIndex % 2 === 0;

              if (index > 5 || typeof row.completed !== 'boolean') {
                return <div />;
              }

              return (
                <ContainerTableBody
                  key={row.firstName}
                  sx={divided ? { background: theme.colors.gray } : {}}
                >
                  <TableCell align="left" className="transaction">
                    {row.completed ? 'Payment from ' : 'Payment failed from '}
                    <span className="text-bold">{`${row.firstName} ${row.lastName}`}</span>
                  </TableCell>
                  <TableCell align="center" className="date-and-time">
                    {checkDate(row.createdAt)}
                  </TableCell>
                  <TableCell align="center" className="amount">
                    {`$${row.amount}`}
                  </TableCell>
                  <TableCell align="right" className="status">
                    {row.completed ? (
                      <div className="component">
                        <span className="text">Completed</span>
                      </div>
                    ) : (
                      <div className="component" style={{ backgroundColor: theme.colors.redLight }}>
                        <span className="text" style={{ color: theme.colors.redDark }}>
                          Cancelled
                        </span>
                      </div>
                    )}
                  </TableCell>
                </ContainerTableBody>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default TableTransactions;
