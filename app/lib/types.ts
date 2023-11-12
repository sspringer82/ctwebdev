export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  size: string;
  weight: number;
  image: string;
};

export type Cart = {
  id: number;
  user: number;
  items: CartItem[];
};

export type CartItem = {
  product: number;
  amount: number;
};

export type User = {
  id: number;
  name: string;
  password: string;
};
