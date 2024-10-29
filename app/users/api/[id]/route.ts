import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  try {
    const response = await fetch(`http://localhost:3001/users/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to delete user with id: ${id}` },
        { status: response.status }
      );
    }

    revalidatePath('/users');

    return NextResponse.json(
      { message: `User with id: ${id} deleted successfully` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `An error occurred: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}
