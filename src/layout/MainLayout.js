import NavBar from "../components/Navbar/NavBar";
import {Outlet} from "react-router-dom";
import CartContext from "../CartContext";

function MainLayout({cantidad}) {

    return (
        <CartContext>
            <div className="App">
                <NavBar cantidad={cantidad}/>
                <Outlet/>
            </div>
        </CartContext>
    );
}

export default MainLayout;