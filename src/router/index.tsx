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
        hydrateFallbackElement: (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center space-y-4 p-8 bg-blue-50 rounded-2xl shadow-lg max-w-md border-2 border-blue-100">
              <div className="flex justify-center">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-gray-800">
                  Cargando productos...
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  El servidor puede tardar hasta{" "}
                  <span className="font-semibold text-blue-600">1 minuto</span>{" "}
                  en responder
                </p>
                <p className="text-xs text-gray-500 italic">
                  (hosting gratuito 🚀)
                </p>
              </div>
            </div>
          </div>
        ),
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
