'use server';

import { CreateBook } from '@/app/types/Book';
import {
  saveBook as apiSaveBook,
  deleteBook as apiDeleteBook,
} from '@/app/api/book';

export async function saveBook(book: CreateBook): Promise<string> {
  return apiSaveBook(book);
}

export async function deleteBook(id: string): Promise<void> {
  return apiDeleteBook(id);
}
