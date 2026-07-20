import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>FC CRM</h1>

            <nav>
                <Link to="/login">Login</Link>
                <Link to="/register">Criar Conta</Link>
            </nav>
        </header>
    );
}

export default Header;