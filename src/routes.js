import { Route, Routes } from 'react-router-dom';

import Sobre from 'pages/SobreMim';
import Home from 'pages/Home';
import BarberShop from 'pages/BarberShop';
import PresentesCasamento from 'pages/PresentesCasamento';
import FabricaAtacado from 'pages/FabricaAtacado';
import CamisetasMix from 'pages/CamisetasMix';
import ShopTecnologia from 'pages/ShopTecnologia';

function Router() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/sobre-mim" element={<Sobre />} />
      <Route path="/sistema-barber-shop" element={<BarberShop />} />
      <Route path="/presentes-casamento" element={<PresentesCasamento />} />
      <Route path="/fabrica-atacado" element={<FabricaAtacado />} />
      <Route path="/camisetas-mix" element={<CamisetasMix />} />
      <Route path="/shop-tecnologia" element={<ShopTecnologia />} />
    </Routes>
  )
}

export default Router;