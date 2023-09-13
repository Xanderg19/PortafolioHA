import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navegacion from '../components/Navegacion'
import Home from '../components/Home'
import Proyectos from '../components/Proyectos'
import Cv from '../components/Cv'

const RouterApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navegacion />} >
                <Route  index element={<Home />}/>
                <Route  path='/proyectos' element={<Proyectos />}/>
                <Route  path='/cv' element={<Cv />}/>

                <Route  path='*' element={<Navigate replace to='/'/>}/>
            </Route>
        </Routes>
    
    </BrowserRouter>
  )
}

export default RouterApp
