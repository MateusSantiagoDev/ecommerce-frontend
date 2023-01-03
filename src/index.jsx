import './Assets/Style.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './Header/Header';
import { Home } from './Pages/Home/Home';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
