import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

/* 
styled - reset
npm i styled-reset
*/

const GlobalStyles = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Pretendard-ExtraLight';
        src: url('/assets/font/Pretendard-ExtraLight.otf') format('opentype');
    }

    @font-face {
        font-family: 'Pretendard-Light';
        src: url('/assets/font/Pretendard-Light.otf') format('opentype');
    }

    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('/assets/font/Pretendard-Regular.otf') format('opentype');
    }

    @font-face {
        font-family: 'Pretendard-Medium';
        src: url('/assets/font/Pretendard-Medium.otf') format('opentype');
    }

    @font-face {
        font-family: 'Pretendard-Bold';
        src: url('/assets/font/Pretendard-Bold.otf') format('opentype');
    }    

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        height: auto;
        min-height: 100%;
        background-image: url('/assets/img/background.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }

    body {
        font-family: 'Pretendard', sans-serif;
        color: ${({ theme }) => theme.PALETTE.black};
    }

    button {
        border: none;
        cursor: pointer;
        font-family: inherit;
    }

    input, textarea {
        font-family: inherit;
        outline: none;
    }
    
    ul > li {
        list-style: none;
    }

    ::-webkit-scrollbar {
        display: none;
    }
`;

export default GlobalStyles;
