import { cookies } from 'next/headers';
import { CartContent, Product } from './types';

export async function getAllProducts(filter: string): Promise<Product[]> {
  const url = new URL('http://localhost:8080/products');
  url.searchParams.set('name', filter);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Fetching products failed');
  }

  return response.json();
}

export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`http://localhost:8080/products/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch Product');
  }

  const product = await response.json();

  return product;
}

export async function getCartContent(): Promise<CartContent[]> {
  const cartId = cookies().get('cart')?.value;

  const url = `http://localhost:8080/carts/${cartId}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Unable to get cart content');
  }

  const cartContent = await response.json();

  return cartContent;
}
