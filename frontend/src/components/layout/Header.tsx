import { Link } from "react-router-dom";

import Button from "../ui/Button";

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-xl font-bold text-blue-600"
        >
          FC CRM
        </Link>

        <nav className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="secondary">
              Entrar
            </Button>
          </Link>

          <Link to="/cadastro">
            <Button>
              Criar Conta
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;