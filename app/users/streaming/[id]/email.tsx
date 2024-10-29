import { getEmail } from '@/app/api/user';

type Props = {
  id: string;
};

const Email: React.FC<Props> = async ({ id }) => {
  const user = await getEmail(id);

  return (
    <div>
      <h1>Email</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default Email;
