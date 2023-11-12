import { getProductById } from '@/app/lib/prodcuts.api';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: string;
  };
};

export default async function DetailPage({ params }: Props) {
  const id = parseInt(params.id, 10);
  const product = await getProductById(id);

  if (Object.keys(product).length === 0) {
    notFound();
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h2>Preis: ${product.price}</h2>
      <p>Größe: {product.size}</p>
      <p>Gewicht: {product.weight}kg</p>

      <Link
        href="/products"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        zurück zur Übersicht
      </Link>
    </div>
  );
}
