import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center">
      <h2 className="mb-6 text-5xl font-bold tracking-tight">
        Organize suas vendas B2B em um só lugar.
      </h2>

      <p className="mb-10 max-w-2xl text-lg text-gray-600">
        O FC CRM ajuda equipes comerciais a gerenciar empresas, contatos e
        oportunidades de forma simples, rápida e organizada.
      </p>

      <div className="flex gap-4">
        <Link
          to="/cadastro"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Criar Conta
        </Link>

        <Link
          to="/login"
          className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
        >
          Entrar
        </Link>
      </div>
    </section>
  );
}

export default Hero;