import { Link } from "react-router-dom";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";

function LoginPage() {
  return (
    <Card className="w-full max-w-md">
      <h1 className="text-3xl font-bold text-gray-900">
        Bem-vindo de volta
      </h1>

      <p className="mt-2 text-gray-600">
        Entre para acessar sua conta.
      </p>

      <form className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            E-mail
          </label>

          <Input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Senha
          </label>

          <Input
            id="password"
            type="password"
            placeholder="Digite sua senha"
          />
        </div>

        <Button className="w-full">
          Entrar
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Ainda não possui uma conta?{" "}
        <Link
          to="/cadastro"
          className="font-medium text-blue-600 hover:text-blue-700"
        >
          Criar Conta
        </Link>
      </p>
    </Card>
  );
}

export default LoginPage;