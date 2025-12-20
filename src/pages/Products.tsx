import { Link, useLoaderData } from "react-router-dom";
import { getProducts } from "../services/ProductService";
// import type { Product } from "../types";
import { ProductDetails } from "../components/ProductDetails";
import type { Product } from "../types";

export async function loader() {
  const products = await getProducts();
  console.log("Productos recibidos:", products);

  return products.data;
}

export const Products = () => {
  const products = useLoaderData() as Product[];
  console.log(products);

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Productos</h2>
        <Link
          to="/producto/nuevo"
          className="bg-blue-800 text-white px-3 py-2 rounded-md font-bold uppercase hover:bg-blue-500 transition-colors"
        >
          Nuevo Producto
        </Link>
      </div>
      {/* <div className="mt-10">
        <p className="text-center text-gray-500">No hay productos aún</p>
      </div> */}

      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2">Producto</th>
              <th className="p-2">Precio</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductDetails key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
