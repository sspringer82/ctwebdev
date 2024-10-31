import { NextPage } from 'next';
import Form from '../components/form';
import { getBook } from '@/app/api/book';

type Props = {
  params: Promise<{ id: string }>;
};

const CreateBookPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;

  const book = await getBook(id);

  return <Form book={book} />;
};

export default CreateBookPage;
