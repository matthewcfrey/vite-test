import { useState, useEffect } from 'react'
import './App.css'
import {Routes, Route, useNavigate} from "react-router-dom";

import Home from './components/Home.jsx'
import Layout from './components/Layout.jsx'
import CompMount from './components/CompMount.jsx'

function App() {

useEffect(() => {

}, []);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='CompMount' element={<CompMount />} />
      </Route>
    </Routes>
  )
}

export default App
