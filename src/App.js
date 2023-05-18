import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useMemo, useRef, createRef } from 'react';
import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

function App() {
    return (
        <div>
            <Title>안녕</Title>
        </div>
    );
}

export default App;
