import './index.css';
import SecDepoimentos from "./components/depoimentos/Depoimentos";
import Menu from "./components/menu/Menu";
import Slider from "./components/hero-section/HeroSection";
import Apresentacao from './components/apresentacao/apresentacao'

function App() {
  return (
    <>
      <Menu />
      <Slider />
      <Apresentacao />
      <SecDepoimentos />
    </>
  );
}

export default App; 