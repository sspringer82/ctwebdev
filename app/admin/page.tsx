import { getAllCarts, getNumberOfCarts } from '../lib/cart.api';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

export default async function AdminPage() {
  const [allCarts, numberOfCarts] = await Promise.all([
    getAllCarts(),
    getNumberOfCarts(),
  ]);

  return (
    <>
      <h1>Admin dashboard</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
        }}
      >
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
              {allCarts.map((cart: Cart) => (
                <TableRow key={cart.id}>
                  <TableCell>{cart.status}</TableCell>
                  <TableCell>{cart.firstname}</TableCell>
                  <TableCell>{cart.lastname}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div
          style={{
            width: '30%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h2>{numberOfCarts}</h2>
        </div>
      </div>
    </>
  );
}
