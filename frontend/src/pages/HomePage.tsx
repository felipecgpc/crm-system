import { Link } from "react-router-dom";

import Header from "../components/Header";

function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section>
          <h2>Organize suas vendas B2B em um só lugar.</h2>

          <p>
            O FC CRM ajuda equipes comerciais a gerenciar empresas, contatos e
            oportunidades de forma simples e organizada.
          </p>

          <Link to="/cadastro">Criar Conta</Link>

          <Link to="/login">Entrar</Link>
        </section>

        <section>
          <h3>O que você pode fazer?</h3>

          <ul>
            <li>Gerenciar empresas</li>
            <li>Gerenciar contatos</li>
            <li>Acompanhar oportunidades</li>
            <li>Visualizar indicadores no dashboard</li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default HomePage;