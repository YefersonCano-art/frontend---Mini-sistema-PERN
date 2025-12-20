import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { Products, loader as productLoader } from "../pages/Products";
import NewProducts, { action as newProductAction } from "../pages/NewProducts";

import EditProducts, { action as editProduct } from "../pages/EditProducts";
import { action as deleteProductAction } from "../pages/DeleteProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productLoader,
        hydrateFallbackElement: <p>Cargando...</p>,
      },
      {
        path: "/producto/nuevo",
        element: <NewProducts />,
        action: newProductAction,
      },
      {
        path: "/producto/:id/editar",
        element: <EditProducts />,
        action: editProduct,
      },
      {
        path: "/producto/:id/eliminar",
        action: deleteProductAction,
      },
    ],
  },
]);
