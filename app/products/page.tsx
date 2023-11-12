import { getAllProducts } from '@/app/lib/prodcuts.api';
import Search from '../ui/search';

type Props = {
  searchParams: {
    name?: string;
  };
};

export default async function ProductsPage({ searchParams }: Props) {
  const filter = searchParams.name || '';

  const products = await getAllProducts(filter);

  console.log(products);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Produkte</h1>
      <Search />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded shadow hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mt-2"
            />
            <p className="mt-2 text-gray-600">{product.description}</p>
            <p className="mt-2 font-semibold">Preis: ${product.price}</p>
            <p className="text-sm text-gray-500">Größe: {product.size}</p>
            <p className="text-sm text-gray-500">Gewicht: {product.weight}kg</p>
          </div>
        ))}
      </div>
    </div>
  );
}
