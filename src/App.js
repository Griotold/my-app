import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useMemo, useRef, createRef } from 'react';

function App() {
    const myRef = useRef(null);

    const [list, setList] = useState([
        { id: 1, name: 'wow' },
        { id: 2, name: 'lol' },
    ]);

    const myRefs = Array.from({ length: list.length }).map(() => createRef());

    return (
        <div>
            <button
                onClick={() => {
                    console.log(myRef);
                    // myRef.current.style.backgroundColor = 'red';

                    myRefs[1].current.style.backgroundColor = 'red';
                }}
            >
                색 변경
            </button>
            <div ref={myRef}>박스</div>
            {list.map((user, index) => (
                <h1 ref={myRefs[index]}>{user.name}</h1>
            ))}
        </div>
    );
}

export default App;
