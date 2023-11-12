import { Products } from './types';

export async function getAllProducts(filter: string): Promise<Products[]> {
  const url = new URL('http://localhost:8080/products');
  url.searchParams.set('name', filter);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Fetching products failed');
  }

  return response.json();
}
