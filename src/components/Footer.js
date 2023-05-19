import React from 'react';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성 -> 재사용 하려고
// styled-components => js와 css를 하나의 파일로 관리
// 해당 컴포넌트는 이 파일만 보면 된다.
const StyledFooterDiv = styled.div`
    border: 1px solid black;
    height: 300px;
`;

const Footer = () => {
    return (
        <StyledFooterDiv>
            <ul>
                <li>오시는 길 : 서울시 강남구...</li>
                <li>전화번호 : 02032052</li>
            </ul>
        </StyledFooterDiv>
    );
};

export default Footer;
