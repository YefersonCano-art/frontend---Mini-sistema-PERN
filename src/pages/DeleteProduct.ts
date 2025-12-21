import { type ActionFunctionArgs} from "react-router-dom";
import { deleteProduct } from "../services/ProductService";

export async function action({ params }: ActionFunctionArgs) {
  const resultado = confirm("¿Estás seguro de que deseas eliminar este producto?");

  if (!resultado) {
    console.log("Eliminación cancelada por el usuario.");
    return { success: false};
  }

  if (params.id !== undefined) {
    await deleteProduct(+params.id);
    return { success: true };
  }
}
