import './App.css';
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
        <ItemListContainer productos="RemediosLab"/>
    </div>
  );
}

export default App;
