import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';

import Homepage from './pages/Homepage.jsx';
import ContinentsPage from './pages/ContinentsPage.jsx';
import CountriesPage from './pages/CountriesPage.jsx';
import NotFoundPage from './pages/NotFoundPage.js';

import NavBar from './components/NavBar.jsx';
import CountryDetailPage from './pages/CountryDetail.jsx';
import CountriesList from './components/CountriesList.jsx';

import CountryPage from './pages/CountryPage.jsx';
import RegionsPage from './pages/RegionsPage.jsx';
import RegionDetailPage from './pages/RegionDetailPage.jsx';

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
                <Route path="/countries" element={<CountriesList />} />
                <Route path="/country/:name" element={<CountryPage />} />

                <Route path="/regions" element={<RegionsPage />} />
                <Route path="/region/:name" element={<RegionDetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);

/// Pretendo
// 1. criação de uma nova rota que regions
// 2.  Criar um componente que diga  Estou na pagina regions

// 3. criar a rota do single page region/:nome da minha region
