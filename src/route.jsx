import Movies from 'pages/Movies'
import StandardPage from './pages/StandatdPage'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddMovie from 'pages/AddMovie'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<StandardPage />} >
            <Route index element={<Movies />} ></Route>
            <Route path='/adicionar' element={<AddMovie/>} />
            <Route path='/diretores' element={<AddMovie/>} />
            <Route path="*" element={<div>Pagina não encontrada!</div>} />
          </Route>
        </Routes>
    </BrowserRouter> 
  )
}
