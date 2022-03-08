import React from 'react'
import logo from '../../img/logoFelina.jpg'
import carrito from '../../img/carritodc.png'

const NavBar = () => {
  return (
    <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <a class="mr-5 hover:text-gray-900 justify-between dropdown dropdown-open">Productos 
        <ul class="p-2">
            <li><a>Velas</a></li>
            <li><a>Difusores</a></li>
            <li><a>Home spray</a></li>
          </ul></a>
        
            
          
        <a class="mr-5 hover:text-gray-900">Quienes somos</a>
        <a class="mr-5 hover:text-gray-900">Preguntas frecuentes</a>
       </nav>
      <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
        
           <img width='200px' src={logo}></img>
        
      </a>
      <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <button class="btn glass">
        <img width='30px' src={carrito}></img>
        </button>
      </div>
    </div>
  </header>
  )
}

export default NavBar