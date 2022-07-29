import NavBar from "../components/Navbar/NavBar";
import {Outlet} from "react-router-dom";
import CartContext from "../CartContext";
import Footer from "../components/Footer/Footer";

function MainLayout() {

    return (
        <CartContext>
            <div className="App">
                <NavBar />
                <Outlet/>
                <Footer />
            </div>
        </CartContext>
    );
}

export default MainLayout;