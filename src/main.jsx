import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import Homepage from './pages/Homepage.jsx';
import ContinentsPage from './pages/ContinentsPage.jsx';
import CountriesPage from './pages/CountriesPage.jsx';
import NotFoundPage from './pages/NotFoundPage.js';
import { NavLink } from 'react-router';
import NavBar from './components/NavBar.jsx';

// 1.1 criar 4 Components
// Homepage
// CountriesPage
// ContinentsPage
// NotFound

// 1.2  criar rotas para cada um destes components

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/continents" element={<ContinentsPage />} />
                <Route path="/countries" element={<CountriesPage />} />
                <Route path="/batatas" element={<h1>BATATAS</h1>} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
