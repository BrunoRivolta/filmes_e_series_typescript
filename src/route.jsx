import Movies from 'pages/movies'
import StandardPage from './pages/StandatdPage'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<StandardPage />} >
            <Route index element={<Movies />} ></Route>
            <Route path='/carrinho' ></Route>
            <Route path='/pedidos' ></Route>
            <Route path="*" element={<div>Pagina não encontrada!</div>} />
          </Route>
        </Routes>
    </BrowserRouter> 
  )
}
