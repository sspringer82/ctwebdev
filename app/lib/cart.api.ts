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
