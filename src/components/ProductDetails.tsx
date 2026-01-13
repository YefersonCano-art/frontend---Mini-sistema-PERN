import { Link, useFetcher } from "react-router-dom";
import type { Product } from "../types";

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  if (!product) {
    return null;
  }

  const fetcher = useFetcher();

  return (
    <>
      <tr className="border-b ">
        <td className="p-3 text-lg text-gray-800">{product.name}</td>
        <td className="p-3 text-lg text-gray-800 text-center">
          {product.price}
        </td>
        <td className="p-3 text-lg text-gray-800 ">
          <div className="flex gap-2 items-center justify-center">
            <Link
              className="bg-yellow-500 hover:bg-yellow-600 px-3 py-2 rounded-md text-white font-bold mr-2"
              to={`/producto/${product.id}/editar`}
              state={product}
            >
              Editar
            </Link>

            <fetcher.Form
              method="post"
              action={`/producto/${product.id}/eliminar`}
            >
              <input
                type="submit"
                disabled={fetcher.state === "submitting"}
                className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md text-white font-bold"
                value={
                  fetcher.state === "submitting" ? "Eliminando..." : "Eliminar"
                }
              />
            </fetcher.Form>
          </div>
        </td>
      </tr>
    </>
  );
};
