import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
    // let number = 1; // 상태 값이 아님
    const [number, setNumber] = useState(1);
    const add = () => {
        setNumber(number + 1);
        console.log('add', number);
    };

    // 렌더링 시점 = 상태값이 변경 될 때
    return (
        <div>
            <h1>숫자 : {number}</h1>
            <button onClick={add}>더하기</button>
        </div>
    );
}

export default App;
