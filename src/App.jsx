import SecDepoimentos from "./components/depoimentos/Depoimentos";
import Menu from "./components/menu/Menu";
import Slider from "./components/hero-section/HeroSection";
import Apresentacao from './components/apresentacao/apresentacao'
import Contact from "./components/contato/Contact";

function App() {
  return (
    <>
      <Menu />
      <Slider />
      <Apresentacao />
      <SecDepoimentos />
      <Contact />
    </>
  );
}

export default App;