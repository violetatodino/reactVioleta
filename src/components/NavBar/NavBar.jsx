import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../img/logoFelina.jpg'
import carrito from '../../img/carritodc.png'

const NavBar = () => {
  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <Link to='/productos' className="mr-5 hover:text-gray-900 justify-between dropdown dropdown-open">Productos</Link> 
        <ul className="p-2">
            <li><Link to='/productos/velas'>Velas</Link></li>
            <li><Link to='/productos/difusores'>Difusores</Link></li>
            <li><Link to='/productos/homeSpray'>Home Spray</Link></li>
          </ul>
        
            
          
        <Link className='mr-5 hover:text-gray-900' to='/productos/homeSpray'>Home Spray</Link>
        <Link className='mr-5 hover:text-gray-900' to='/productos/preguntas'>Preguntas frequentes</Link>
        
        
       </nav>
      <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
        
           <img width='200px' src={logo}></img>
        
      </a>
      <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <button className="btn glass">
        <img width='30px' src={carrito}></img>
        </button>
      </div>
    </div>
  </header>
  )
}

export default NavBar