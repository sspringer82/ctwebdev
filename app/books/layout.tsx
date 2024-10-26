import React, { ReactNode } from 'react';

interface BooksLayoutProps {
  children: ReactNode;
}

const BooksLayout: React.FC<BooksLayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Books Management</h1>
      <div className="bg-white shadow-md rounded-lg p-6">{children}</div>
    </div>
  );
};

export default BooksLayout;
