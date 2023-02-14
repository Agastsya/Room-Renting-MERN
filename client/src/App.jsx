import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Layout from './Layout';
import RegisterPage from './pages/RegisterPage';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />}></Route>
        
      </Route>

    </Routes>

  )
}

export default App;
