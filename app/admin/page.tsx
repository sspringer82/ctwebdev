import { Suspense } from 'react';
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
import CartTable from './table';
import CartCount from './count';

export default async function AdminPage() {
  // const [allCarts, numberOfCarts] = await Promise.all([
  //   getAllCarts(),
  //   getNumberOfCarts(),
  // ]);

  return (
    <div>
      <h1>Admin dashboard</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
        }}
      >
        <Suspense fallback={<div>lade tabllen daten</div>}>
          <CartTable />
        </Suspense>

        <Suspense fallback={<div>Lade Anzahl</div>}>
          <CartCount />
        </Suspense>
      </div>
    </div>
  );
}
