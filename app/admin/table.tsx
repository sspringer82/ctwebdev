import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { getAllCarts } from '../lib/cart.api';

export default async function CartTable() {
  const allCarts = await getAllCarts();
  return (
    <TableContainer
      component={Paper}
      style={{ maxHeight: 400, overflow: 'auto', width: '70%' }}
    >
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allCarts.map((cart) => (
            <TableRow key={cart.id}>
              <TableCell>{cart.status}</TableCell>
              <TableCell>{cart.firstname}</TableCell>
              <TableCell>{cart.lastname}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
