type ErrorMessageProps = {
  children: string;
};

const friendlyBackendMessage =
  "El hosting gratuito desactivó el backend. Comunicate con el administrador del sitio para ponerlo en linea nuevamente.";

const getMessage = (message: string) => {
  const lowerMessage = message.toLowerCase();

  if (
    lowerMessage.includes("fetch") ||
    lowerMessage.includes("network") ||
    lowerMessage.includes("error al obtener") ||
    lowerMessage.includes("error al agregar") ||
    lowerMessage.includes("error al actualizar") ||
    lowerMessage.includes("error al eliminar")
  ) {
    return friendlyBackendMessage;
  }

  return message;
};

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  const message = getMessage(children);

  return (
    <div className="my-4 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-center text-red-900 shadow-sm">
      <p className="text-base font-extrabold uppercase tracking-wide">
        Error
      </p>
      <p className="mt-2 text-sm leading-6">{message}</p>
    </div>
  );
};
