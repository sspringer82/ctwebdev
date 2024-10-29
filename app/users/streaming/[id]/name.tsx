import { getName } from '@/app/api/user';

type Props = {
  id: string;
};

const Name: React.FC<Props> = async ({ id }) => {
  const user = await getName(id);

  return (
    <div>
      <h1>Name</h1>
      <p>{user.name}</p>
    </div>
  );
};

export default Name;
