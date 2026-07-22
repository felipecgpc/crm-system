import { Link } from "react-router-dom";

import Button from "../ui/Button";

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">
        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
          FC CRM
        </span>

        <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight text-gray-900">
          Organize seus clientes e impulsione suas vendas.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Gerencie empresas, clientes e oportunidades de forma simples,
          organizada e eficiente em um único lugar.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link to="/cadastro">
            <Button>
              Criar Conta
            </Button>
          </Link>

          <Link to="/login">
            <Button variant="secondary">
              Entrar
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;