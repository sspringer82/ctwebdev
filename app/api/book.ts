import { Book, CreateBook } from '@/app/types/Book';
import { wait } from '@/util/wait';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function getAllBooks(search?: string): Promise<Book[]> {
  const response = await fetch('http://localhost:3001/books');
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  const books = await response.json();

  return books
    .filter((book: Book) => {
      if (search) {
        return (
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase())
        );
      } else {
        return true;
      }
    })
    .map((book: Book) => ({
      ...book,
      release: new Date(book.release),
    }));
}

export async function getBook(id: string): Promise<Book> {
  const response = await fetch(`http://localhost:3001/books/${id}`);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  const book = await response.json();
  return {
    ...book,
    release: new Date(book.release),
  };
}

export async function getBookDetails(id: string): Promise<Book> {
  await wait(5_000);
  return getBook(id);
}

export async function getBookRating(id: string): Promise<Book> {
  await wait(10_000);
  return getBook(id);
}

export async function saveBook(book: CreateBook): Promise<string> {
  const method = book.id ? 'PUT' : 'POST';
  const url = book.id
    ? `http://localhost:3001/books/${book.id}`
    : 'http://localhost:3001/books';

  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    if (!response.ok) {
      throw new Error('Failed to save book');
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An error occurred');
  }
  revalidatePath('/books');
  redirect('/books');
}

export async function deleteBook(id: string): Promise<void> {
  try {
    const response = await fetch(`http://localhost:3001/books/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete book');
    }
  } catch (error) {
    throw error;
  }
  revalidatePath('/books');
}
