'use client';

import { useEffect } from 'react';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error: React.FC<Props> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
