import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const backendDownMessage =
  "El hosting gratuito desactivó el backend. Comunicate con el administrador del sitio para ponerlo en linea nuevamente.";

export const ProductsRouteError = () => {
  const error = useRouteError();

  let message = backendDownMessage;

  if (isRouteErrorResponse(error)) {
    message = error.statusText || message;
  } else if (error instanceof Error) {
    const lowerMessage = error.message.toLowerCase();

    if (!lowerMessage.includes("failed to fetch")) {
      message = error.message;
    }
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl rounded-3xl border border-red-200 bg-red-50 p-8 text-center shadow-xl shadow-red-100">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
          Error de carga
        </p>
        <h2 className="mt-4 text-3xl font-black text-red-950">
          No se pudo cargar productos
        </h2>
        <p className="mt-4 text-base leading-7 text-red-900">{message}</p>
        <p className="mt-3 text-sm leading-6 text-red-700">
          Si esto pasó después de mucho tiempo sin uso, el backend puede estar dormido o apagado por el hosting gratuito.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-6 rounded-xl bg-red-700 px-5 py-3 font-bold text-white transition-colors hover:bg-red-800"
        >
          Reintentar
        </button>
      </div>
    </div>
  );
};