import { getUser } from '@/app/api/user';
import { User } from '@/app/types/User';
import { NextPage } from 'next';
import Link from 'next/link';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const UserDetailPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;

  let user: User | null = null;
  let errorMessage: string | null = null;

  try {
    user = await getUser(id);
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : 'An error occurred';
  }

  return (
    <div>
      <h1>User Detail</h1>
      {errorMessage && <div>{errorMessage}</div>}
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      <Link href="/users">Back to list</Link>
    </div>
  );
};

export default UserDetailPage;
