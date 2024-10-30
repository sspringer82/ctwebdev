'use client';

import { useRouter } from 'next/navigation';

type Props = {
  id: string;
};

const Delete: React.FC<Props> = ({ id }) => {
  const router = useRouter();
  async function handleClick() {
    await fetch(`/users/api/${id}`, {
      method: 'DELETE',
    });

    router.refresh();
  }

  return <button onClick={handleClick}>Delete</button>;
};

export default Delete;
