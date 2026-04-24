type LoadingStateProps = {
  title?: string;
  description?: string;
  note?: string;
};

export const LoadingState = ({
  title = "Cargando productos...",
  description = "Estamos preparando el catálogo. Puede tardar unos segundos mientras el servidor responde.",
  note = "Si el backend estuvo dormido por hosting gratuito, puede tardar más en levantar.",
}: LoadingStateProps) => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-2xl shadow-slate-200/70 backdrop-blur">
        <div className="mb-6 flex justify-center">
          <div className="relative flex h-20 w-20 items-center justify-center">
            <div className="absolute inset-0 animate-pulse rounded-full bg-sky-100" />
            <div className="h-20 w-20 animate-spin rounded-full border-4 border-sky-200 border-t-sky-600" />
          </div>
        </div>

        <div className="space-y-4 text-center">
          <p className="text-3xl font-extrabold tracking-tight text-slate-900">
            {title}
          </p>

          <p className="text-base leading-7 text-slate-600">{description}</p>

          <div className="rounded-2xl bg-sky-50 px-4 py-3 text-sm font-medium text-sky-800">
            {note}
          </div>
        </div>
      </div>
    </div>
  );
};
