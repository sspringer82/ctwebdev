export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <div className="logo">Logo</div>
        {/* Hier können weitere Elemente der Kopfzeile hinzugefügt werden */}
      </header>

      <main className="flex-1 p-4">{children}</main>

      <footer className="bg-gray-700 text-white p-4">Footer-Inhalt</footer>
    </div>
  );
}
