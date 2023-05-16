import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
    const [users, setUsers] = useState([]);

    const download = () => {
        let sample = [
            { id: 1, name: '홍길동' },
            { id: 2, name: '길복순' },
            { id: 3, name: '황용식' },
            { id: 4, name: '동백이' },
        ];
        setUsers([...users, ...sample]);
    };

    // 렌더링 시점 = 상태값이 변경 될 때
    return (
        <div>
            <button onClick={download}>다운로드</button>
            {users.map((u) => (
                <h1>
                    {u.id}, {u.name}
                </h1>
            ))}
        </div>
    );
}

export default App;
