import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemsContainer/ItemDetailContainer';
import { CartContextProvider } from './components/Context/CartContext';

function App() {
  return (
    <>
    <div>
    <CartContextProvider>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='productos' element={ <ItemListContainer/> } />
          <Route path='productos/:category' element={ <ItemListContainer /> } />
          <Route path='detail/:id' element={ <ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
      
      
    </>
  );
}

export default App;
