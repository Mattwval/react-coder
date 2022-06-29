import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import MainPage from "./pages/MainPage";
import MainLayout from "./layout/MainLayout";
import PageNotFound from "./pages/PageNotFound";
import {useState} from "react";


function App() {

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route path="/producto/:id" element={<ItemDetailContainer />}/>
                        <Route path="/catalogo" element={<ItemListContainer titulo="Remedios Lab"/>}/>
                        <Route path="/catalogo/:categoria" element={<ItemListContainer titulo="Remedios Lab"/>}/>
                        <Route exact path="/" element={<MainPage/>}/>

                    </Route>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
