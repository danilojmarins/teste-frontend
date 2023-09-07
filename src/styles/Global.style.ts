import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    body {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        scroll-behavior: smooth;
        font-family: 'Ubuntu', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        color: ${props => props.theme.colors.text};
        background-color: ${props => props.theme.colors.background};
    }

`;

export default GlobalStyle;