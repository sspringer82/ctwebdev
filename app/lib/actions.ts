'use server';

import { cookies } from 'next/headers';

export async function addToCart(formData: FormData) {
  const cartExists = cookies().has('cart');
  const cart = cookies().get('cart');
  console.log('cart?', cartExists, cart);

  if (!cartExists) {
    const response = await fetch('http://localhost:8080/carts/', {
      method: 'POST',
    });
    const { id } = await response.json();

    cookies().set('cart', id);
  }

  const cartId = cookies().get('cart')!.value;

  console.log(cartId);

  const data = {
    productId: formData.get('product'),
    amount: formData.get('amount'),
  };

  const url = `http://localhost:8080/carts/items/${cartId}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  console.log(response.ok);
}
