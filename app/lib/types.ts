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
  status: string;
  firstname: string;
  lastname: string;
  street: string;
  zip: string;
  city: string;
  country: string;
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

export type CartContent = {
  name: string;
  amount: number;
  pricePerUnit: number;
  totalPrice: number;
};
