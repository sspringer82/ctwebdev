import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: Request) {
  const cartId = cookies().get('cart')?.value;

  const data = await request.json();

  const serverResponse = await fetch(`http://localhost:8080/carts/${cartId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return Response.json({ success: true });
}
