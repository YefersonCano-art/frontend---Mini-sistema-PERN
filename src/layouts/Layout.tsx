import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header className="bg-slate-800">
        <div className="mx-auto max-w-6xl py-10">
          <h1 className="text-white p-4 text-4xl font-bold text-center">
            Administrador de Productos
          </h1>
        </div>
      </header>
      <main className="mx-auto max-w-6xl mt-10 p-10 shadow bg-white ">
        <Outlet />
      </main>
    </>
  );
};
