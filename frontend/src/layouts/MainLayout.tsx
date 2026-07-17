import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div>
            <h1>Layout Principal</h1>

            <Outlet />
        </div>
    );
}

export default MainLayout;