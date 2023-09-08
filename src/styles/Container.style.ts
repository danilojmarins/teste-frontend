import { styled } from "styled-components";

export const Container = styled.div`

    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 3rem 12rem;

    .btns {
        margin: 2rem auto;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 2rem;
    }

    .updated {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 1rem;
        color: ${props => props.theme.colors.primary};
        margin: 3rem auto;
    }

    @media (max-width: 1280px) {
        padding: 1rem 2rem;
    }

    @media (max-width: 768px) {
        padding: 1rem 2rem;
    }

    @media (max-width: 640px) {
        padding: 1rem 1rem;
    }

    @media (max-width: 480px) {
        padding: 1rem 0.5rem;
    }

`;