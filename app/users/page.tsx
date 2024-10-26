import { NextPage } from 'next';
import { getAllUsers } from '@/app/api/user';
import { User } from '@/app/types/User';

const UsersListPage: NextPage = async () => {
  let users: User[] = [];
  let errorMessage: string | null = null;

  try {
    users = await getAllUsers();
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : 'An error occurred';
  }

  return (
    <div>
      <h1>User List</h1>
      {errorMessage && <div>{errorMessage}</div>}
      {users.length === 0 && <div>No users found.</div>}
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersListPage;
