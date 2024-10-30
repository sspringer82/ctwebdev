import { NextPage } from 'next';
import List from '../components/list';
import SearchForm from '../components/search';

type Props = {
  searchParams: Promise<{
    name: string;
    email: string;
  }>;
};

const UsersListPage: NextPage<Props> = async ({ searchParams }) => {
  const search = await searchParams;
  return (
    <>
      <SearchForm />
      <List search={search} />
    </>
  );
};

export default UsersListPage;
