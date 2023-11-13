import { Cart } from './types';

type Arg = {
  arg: {
    city: string;
    country: string;
    firstname: string;
    lastname: string;
    street: string;
    zip: string;
  };
};
export async function submitCart(url: string, { arg }: Arg): Promise<void> {
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(arg),
  });

  if (!response.ok) {
    throw new Error('Order process not finished');
  }
}

export async function getAllCarts(): Promise<Cart[]> {
  const delay = 1000;
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const response = await fetch('http://localhost:8080/carts');
      if (!response.ok) {
        reject('Oh noo');
      }
      resolve(await response.json());
    }, delay);
  });
}

export async function getNumberOfCarts(): Promise<number> {
  const delay = 3000;
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const response = await fetch('http://localhost:8080/carts');
      if (!response.ok) {
        reject('Oh noo');
      }
      const carts = await response.json();
      resolve(carts.length);
    }, delay);
  });
}
