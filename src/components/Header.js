import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성 -> 재사용 하려고
// styled-components => js와 css를 하나의 파일로 관리
// 해당 컴포넌트는 이 파일만 보면 된다.
const StyledHeaderDiv = styled.div`
    border: 1px solid black;
    height: 300px;
`;

const Header = () => {
    return (
        <StyledHeaderDiv color>
            <ul>
                <li>
                    <Link to={'/'}>홈</Link>
                </li>
                <li>
                    <Link to={'/login/10'}>로그인</Link>
                </li>
            </ul>
        </StyledHeaderDiv>
    );
};

export default Header;
