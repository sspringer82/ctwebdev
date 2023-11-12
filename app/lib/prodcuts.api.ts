import { Products } from './types';

export async function getAllProducts(): Promise<Products[]> {
  const response = await fetch('http://localhost:8080/products');

  if (!response.ok) {
    throw new Error('Fetching products failed');
  }

  return response.json();
}
