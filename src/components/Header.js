import React from 'react';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성 -> 재사용 하려고
// styled-components => js와 css를 하나의 파일로 관리
// 해당 컴포넌트는 이 파일만 보면 된다.
const HeaderList = styled.div`
    border: 1px solid black;
    height: 300px;
`;

const Header = () => {
    return (
        <HeaderList>
            <ul>
                <li>메뉴 1</li>
                <li>메뉴 2</li>
            </ul>
        </HeaderList>
    );
};

export default Header;
