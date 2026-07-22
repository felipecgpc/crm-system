import Card from "../ui/Card";

function Benefits() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Tudo o que você precisa para organizar seu negócio
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Um CRM simples para gerenciar empresas, clientes e oportunidades.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="text-xl font-semibold text-gray-900">
              Empresas
            </h3>

            <p className="mt-3 text-gray-600">
              Cadastre e organize as empresas que fazem parte da sua operação.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-gray-900">
              Clientes
            </h3>

            <p className="mt-3 text-gray-600">
              Centralize as informações dos seus clientes em um único lugar.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-gray-900">
              Oportunidades
            </h3>

            <p className="mt-3 text-gray-600">
              Acompanhe negociações e mantenha seu processo comercial organizado.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Benefits;