import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useMemo, useRef, createRef } from 'react';

import LoginPage from './pages/LoginPage';

function App() {
    return (
        <div>
            <LoginPage />
        </div>
    );
}

export default App;
