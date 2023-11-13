import { getNumberOfCarts } from '../lib/cart.api';

export default async function CartCount() {
  const numberOfCarts = await getNumberOfCarts();
  return (
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
  );
}
