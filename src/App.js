
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import NavBar from './utilites/NavBar';
import ProductDeailes from './components/ProductDeailes';
import Favourite from './pages/Favourite';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <div className="App" >
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Products' element={<ProductsPage />} />
        <Route path='productdetailes/:id' element={<ProductDeailes/>} />
        <Route path='Favourite' element={<Favourite />} />
      </Routes>
      
    </div>
  );
}

export default App;
