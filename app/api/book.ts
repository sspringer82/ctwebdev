import { Book } from '@/app/types/Book';
import { wait } from '@/util/wait';

export async function getAllBooks(): Promise<Book[]> {
  const response = await fetch('http://localhost:3001/books');
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  const books = await response.json();
  return books.map((book: Book) => ({
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
