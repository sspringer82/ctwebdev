import { NextPage } from 'next';
import { getAllUsers } from '@/app/api/user';
import { User } from '@/app/types/User';
import { IconButton } from '@mui/material';
import Link from 'next/link';
import InfoIcon from '@mui/icons-material/Info';
import Delete from './components/delete';

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
              <Link href={`/users/${user.id}`} passHref>
                <IconButton aria-label="details">
                  <InfoIcon />
                </IconButton>
              </Link>
              <Delete id={user.id} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersListPage;
