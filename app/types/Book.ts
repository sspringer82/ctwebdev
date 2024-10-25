export type Book = {
  id: string;
  isbn: string;
  title: string;
  release: Date;
  pages: number;
  language: string;
  rating: number;
};

export type CreateBook = Omit<Book, 'id'> & { id?: string };
