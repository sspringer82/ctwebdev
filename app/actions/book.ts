'use server';

import { CreateBook } from '@/app/types/Book';
import { saveBook as apiSaveBook } from '@/app/api/book';

export async function saveBook(book: CreateBook): Promise<string> {
  return apiSaveBook(book);
}
