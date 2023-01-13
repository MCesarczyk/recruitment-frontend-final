import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, #root {
        width: 100%;
        height: 100%;
    }

    html {
       box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Barlow', sans-serif;
        font-weight: 400;
        letter-spacing: 0.05rem;

        width: 100%;
        height: 100%;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
`;
