import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { Container, ContainerTableBody, ContainerTableHeader, Description, Title } from './styles';
import { theme } from '../../styles/theme/generalColors';

function TableTransactions() {
  function createData(name: string, calories: number, fat: number, carbs: number) {
    return { name, calories, fat, carbs };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
  ];

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
              <TableCell align="center" className="table-cell-header">
                AMOUNT
              </TableCell>
              <TableCell align="center" className="table-cell-header">
                STATUS
              </TableCell>
            </ContainerTableHeader>
          </TableHead>
          <TableBody>
            {rows?.map((row, index) => {
              let keyIndex = null;

              keyIndex = index + 1;

              const divided = keyIndex % 2 === 0;

              return (
                <ContainerTableBody
                  key={row.name}
                  sx={divided ? { background: theme.colors.gray } : {}}
                >
                  <TableCell align="left" className="transaction">
                    {row.name}
                  </TableCell>
                  <TableCell align="center" className="date-e-time">
                    {row.calories}
                  </TableCell>
                  <TableCell align="center" className="amount">
                    {row.fat}
                  </TableCell>
                  <TableCell align="center" className="status">
                    {row.carbs}
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
