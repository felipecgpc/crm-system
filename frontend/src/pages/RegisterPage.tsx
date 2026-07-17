function RegisterPage() {
  return (
    <div>
      <h1>Criar Conta</h1>

      <form>
        <div>
          <label>Nome</label>
          <input type="text" />
        </div>

        <div>
          <label>Email</label>
          <input type="email" />
        </div>

        <div>
          <label>Senha</label>
          <input type="password" />
        </div>

        <button type="submit">
          Criar conta
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;