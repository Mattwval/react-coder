import NavBar from "../components/Navbar/NavBar";
import {Outlet} from "react-router-dom";

function MainLayout() {
    return (
        <div className="App">
            <NavBar/>
            <Outlet />
        </div>
    );
}

export default MainLayout;