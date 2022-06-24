import NavBar from "../components/Navbar/NavBar";
import {Outlet} from "react-router-dom";

function MainLayout({cantidad}) {

    return (
        <div className="App">
            <NavBar  cantidad={cantidad}/>
            <Outlet />
        </div>
    );
}

export default MainLayout;