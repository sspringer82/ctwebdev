import { NextPage } from 'next';
import { Suspense } from 'react';
import Name from './name';
import Email from './email';

type Props = {
  params: Promise<{ id: string }>;
};

const UserDetailsStreamingPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <h1>User Details - Streaming</h1>
      <Suspense fallback={<div>Loading Name...</div>}>
        <Name id={id} />
      </Suspense>

      <Suspense fallback={<div>Loading Email...</div>}>
        <Email id={id} />
      </Suspense>
    </div>
  );
};

export default UserDetailsStreamingPage;
