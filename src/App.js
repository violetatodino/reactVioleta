import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemsContainer/ItemDetailContainer';

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='productos' element={ <ItemListContainer/> } />
          <Route path='productos/:category' element={ <ItemListContainer /> } />
          <Route path='detail/:id' element={ <ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
    </div>
      
      
    </>
  );
}

export default App;
