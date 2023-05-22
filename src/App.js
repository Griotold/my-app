import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useMemo, useRef, createRef } from 'react';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <Header />

            <Route path="/" exact={true} component={HomePage} />
            <Route path="/login/:id" exact={true} component={LoginPage} />

            <Footer />
        </div>
    );
}

export default App;
