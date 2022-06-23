import './MainPage.css';
import {Link} from "react-router-dom";

function MainPage() {
    return (
        <>
            <h1>INICIO</h1>
            <Link to='/catalogo'>
                <button className='btn btn-secondary'>Catálogo</button>
            </Link>
        </>
    );
}

export default MainPage;