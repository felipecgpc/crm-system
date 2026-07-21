import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          FC CRM
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            to="/login"
            className="font-medium text-gray-600 transition hover:text-gray-900"
          >
            Entrar
          </Link>

          <Link
            to="/cadastro"
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Criar Conta
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;