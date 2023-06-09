import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StandardPage from 'pages/StandatdPage'
import AddMovie from 'pages/AddMovie'
import Directors from 'pages/Directors'
import Movie from 'pages/Movie'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<StandardPage />} >
            <Route index element={<Movie />} ></Route>
            <Route path='/diretores' element={<Directors/>} />
            <Route path='/adicionar' element={<AddMovie/>} />
            <Route path="*" element={<div>Pagina não encontrada!</div>} />
          </Route>
        </Routes>
    </BrowserRouter> 
  )
}
