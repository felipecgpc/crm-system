import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <main>
            <h1>Layout de Autenticação</h1>

            <Outlet />
        </main>
    );
}

export default AuthLayout;