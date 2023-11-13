import { getCartContent } from '@/app/lib/prodcuts.api';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import CartForm from './cart-form';

export default async function CheckoutPage() {
  const cartContents = await getCartContent();

  const totalSum = cartContents.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <>
      <CartForm />
      <hr />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Menge</TableCell>
              <TableCell align="right">Preis pro Einheit</TableCell>
              <TableCell align="right">Gesamtpreis</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartContents.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">
                  {row.pricePerUnit.toFixed(2)}
                </TableCell>
                <TableCell align="right">{row.totalPrice.toFixed(2)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3}>Gesamtsumme</TableCell>
              <TableCell align="right">{totalSum.toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
