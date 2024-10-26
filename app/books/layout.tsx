import React, { ReactNode } from 'react';

interface BooksLayoutProps {
  children: ReactNode;
}

const BooksLayout: React.FC<BooksLayoutProps> = ({ children }) => {
  return (
    <div>
      <h1>Books Management</h1>
      {children}
    </div>
  );
};

export default BooksLayout;
