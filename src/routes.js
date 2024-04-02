import { Route, Routes } from 'react-router-dom';

import Sobre from 'pages/SobreMim';
import Home from 'pages/Home';
import BarberShop from 'pages/BarberShop';
import PresentesCasamento from 'pages/PresentesCasamento';
import FabricaAtacado from 'pages/FabricaAtacado';
import CamisetasMix from 'pages/CamisetasMix';
import ShopTecnologia from 'pages/ShopTecnologia';
import TermosDeUso from 'pages/TermosUso';
import Planos from 'pages/Planos';

function Router() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/contato" element={<Sobre />} />
      <Route path="/sistema-agendar-aqui" element={<BarberShop />} />
      <Route path="/presentes-casamento" element={<PresentesCasamento />} />
      {/* <Route path="/fabrica-atacado" element={<FabricaAtacado />} /> */}
      <Route path="/camisetas-mix" element={<CamisetasMix />} />
      <Route path="/shop-tecnologia" element={<ShopTecnologia />} />
      <Route path="/termos-de-uso" element={<TermosDeUso />} />
      <Route path="/planos-ativos-c-145135764415" element={<Planos />} />
    </Routes>
  )
}

export default Router;