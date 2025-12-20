import {
  Link,
  Form,
  useActionData,
  type ActionFunctionArgs,
  useLocation,
  redirect,
} from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { updateProduct } from "../services/ProductService";

export async function action({ request, params }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  const productId = Number(params.id);

  console.log(data);

  let error = "";
  if (Object.values(data).includes("")) {
    error = "Todos los campos son obligatorios";
    return { error };
  }
  await updateProduct(productId, data);
  return redirect("/");
}

const EditProducts = () => {
  const error = useActionData();
  const location = useLocation();

  const product = location.state || {};
  console.log("Producto a editar:", product);

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Editar Producto</h2>
        <Link
          to="/"
          className="bg-blue-800 text-white px-3 py-2 rounded-md font-bold uppercase hover:bg-blue-500 transition-colors"
        >
          Volver a Productos
        </Link>
      </div>

      {error?.error && <ErrorMessage>{error.error}</ErrorMessage>}

      <Form className="mt-10" method="post">
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="name">
            Nombre Producto:
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Nombre del Producto"
            name="name"
            defaultValue={product.name}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="price">
            Precio:
          </label>
          <input
            id="price"
            type="number"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Precio Producto. ej. 200, 300"
            name="price"
            defaultValue={product.price}
          />
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-blue-800 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Editar Producto"
        />
      </Form>
    </>
  );
};

export default EditProducts;
