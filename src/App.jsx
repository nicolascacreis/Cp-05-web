import SecDepoimentos from "./components/depoimentos/Depoimentos";
import Menu from "./components/menu/menu";
import Slider from "./components/hero-section/HeroSection";
import Apresentacao from "./components/apresentacao/apresentacao";
import Contact from "./components/contato/Contact";
import Funcionalidades from "./components/funcionalidades/Funcionalidades";

function App() {
  return (
    <>
      <Menu />
      <Slider />
      <Apresentacao />
      <Funcionalidades />
      <SecDepoimentos />
      <Contact />
    </>
  );
}

export default App;
