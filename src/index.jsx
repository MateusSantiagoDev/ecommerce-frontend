import './Assets/Style.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './Header/Header';
import { Home } from './Pages/Home/Home';
import { Sell } from './Pages/Sell/Sell';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sell" element={<Sell />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
