import { Route, Routes } from 'react-router-dom';

import Sobre from 'pages/SobreMim';
import Home from 'pages/Home';
import BarberShop from 'pages/BarberShop';

function Router() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/sobre-mim" element={<Sobre />} />
      <Route path="/sistema-barber-shop" element={<BarberShop />} />
    </Routes>
  )
}

export default Router;