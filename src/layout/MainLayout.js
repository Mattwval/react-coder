import NavBar from "../components/Navbar/NavBar";
import {Outlet} from "react-router-dom";
import CartContext from "../CartContext";

function MainLayout() {

    return (
        <CartContext>
            <div className="App">
                <NavBar />
                <Outlet/>
            </div>
        </CartContext>
    );
}

export default MainLayout;