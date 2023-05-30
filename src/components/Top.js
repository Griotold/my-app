import { useSelector } from 'react-redux';
import '../App.css';
import React from 'react';

const Top = () => {
    const number = useSelector((store) => store.number);

    return (
        <div className="sub_container">
            <h1>Top</h1>
            번호 : {number}
        </div>
    );
};

export default Top;
