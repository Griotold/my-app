import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState(0);
    const [search, setSearch] = useState(0);

    const download = () => {
        // 통신
        let downloadData = 5;
        setData(downloadData);
    };

    // 실행 시점 :
    // (1) App() 함수가 최초 실행될 때(최초 마운트될 때)
    // (2) 상태 변수가 변경될 때
    useEffect(() => {
        console.log('useEffect 실행됨');
        download();
    }, [search]);

    return (
        <div>
            <button
                onClick={() => {
                    setSearch(2);
                }}
            >
                검색하기
            </button>
            <h1> 데이터 : {data}</h1>
            <button
                onClick={() => {
                    setData(data + 1);
                }}
            >
                더하기
            </button>
        </div>
    );
}

export default App;
