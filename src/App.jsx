import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent.jsx";
import "./index.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <div>
      <NavBarComponent />
      <ItemListContainer greeting="Tu próximo equipo está en iStore. Somos el Apple Premium Reseller más reconocido de Córdoba." />
    </div>
  );
}

export default App;
