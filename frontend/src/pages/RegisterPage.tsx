import { Link } from "react-router-dom";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";

function RegisterPage() {
  return (
    <Card className="w-full max-w-md">
      <h1 className="text-3xl font-bold text-gray-900">
        Crie sua conta
      </h1>

      <p className="mt-2 text-gray-600">
        Comece a organizar seus clientes hoje mesmo.
      </p>

      <form className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Nome
          </label>

          <Input
            id="name"
            type="text"
            placeholder="Digite seu nome"
          />
        </div>

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

        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Confirmar senha
          </label>

          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirme sua senha"
          />
        </div>

        <Button className="w-full">
          Criar Conta
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Já possui uma conta?{" "}
        <Link
          to="/login"
          className="font-medium text-blue-600 hover:text-blue-700"
        >
          Entrar
        </Link>
      </p>
    </Card>
  );
}

export default RegisterPage;