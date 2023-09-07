import { styled } from "styled-components";

export const Container = styled.div`

    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem 12rem;

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