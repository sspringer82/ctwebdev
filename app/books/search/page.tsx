import { NextPage } from 'next';
import List from '../components/list';
import Search from '../components/search';

type Props = {
  searchParams: Promise<{
    search: string;
  }>;
};
const BooksListPage: NextPage<Props> = async ({ searchParams }) => {
  const { search } = await searchParams;

  return (
    <>
      <Search />
      <List search={search} />
    </>
  );
};

export default BooksListPage;
