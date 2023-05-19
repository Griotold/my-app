import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useMemo, useRef, createRef } from 'react';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

function App() {
    return (
        <div>
            <HomePage />
        </div>
    );
}

export default App;
