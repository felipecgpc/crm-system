import { Link } from "react-router-dom";

import Button from "../ui/Button";

function CallToAction() {
  return (
    <section className="bg-blue-600 py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <h2 className="text-3xl font-bold text-white">
          Comece a organizar seus clientes hoje mesmo.
        </h2>

        <p className="mt-4 text-lg text-blue-100">
          Cadastre-se gratuitamente e tenha uma forma simples de gerenciar empresas,
          clientes e oportunidades.
        </p>

        <div className="mt-8">
          <Link to="/cadastro">
            <Button variant="secondary">
              Criar Conta
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;