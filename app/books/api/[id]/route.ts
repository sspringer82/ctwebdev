import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  try {
    const book = await request.json();

    if (typeof book.rating !== 'number' || book.rating < 0 || book.rating > 5) {
      return NextResponse.json(
        {
          error:
            'Invalid rating value. Rating must be a number between 0 and 5.',
        },
        { status: 400 }
      );
    }

    const response = await fetch(`http://localhost:3001/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to update the book with id: ${id}` },
        { status: response.status }
      );
    }

    revalidatePath('/books');

    return NextResponse.json(
      { message: `Book with id: ${id} updated successfully` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `An error occurred: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}
