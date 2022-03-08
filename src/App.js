import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsContainer/ItemListContainer';

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='productos' element={ <ItemListContainer/> } />
        </Routes>
      </BrowserRouter>
    </div>
      
      
    </>
  );
}

export default App;
